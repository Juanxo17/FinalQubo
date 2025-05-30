import React, { useState, useEffect } from 'react';
import { Badge, Dropdown, Button, ListGroup } from 'react-bootstrap';
import { API_BASE_URL } from '../utils/config.js';
import { database } from '../firebase.js';
import { ref, onValue, off } from 'firebase/database';
import { useProfile } from '../context/ProfileContext';
import { useNavigate } from 'react-router-dom';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem('notificationsEnabled');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const { profileData } = useProfile();
  const navigate = useNavigate();
  
  // Save notification settings to localStorage when changed
  useEffect(() => {
    localStorage.setItem('notificationsEnabled', JSON.stringify(notificationsEnabled));
  }, [notificationsEnabled]);
  
  useEffect(() => {
    // Get accountId from profileData or directly from localStorage if needed
    const accountId = profileData?.accountId || localStorage.getItem('accountId');
    
    if (!accountId || !notificationsEnabled) {
      console.log("NotificationCenter: No accountId or notifications disabled", {
        hasAccountId: !!accountId,
        notificationsEnabled,
        profileData
      });
      setNotifications([]);
      setUnreadCount(0);
      return;
    }
    
    console.log("NotificationCenter: Listening for notifications for user ID:", accountId);
    const notificationsRef = ref(database, `notifications/${accountId}`);    onValue(notificationsRef, (snapshot) => {
      console.log("NotificationCenter: Received Firebase notification update, snapshot exists:", snapshot.exists());
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("NotificationCenter: Notification data received:", data);
        const notificationArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        
        notificationArray.sort((a, b) => b.createdAt - a.createdAt);
        
        setNotifications(notificationArray);
        setUnreadCount(notificationArray.filter(n => !n.read).length);
      } else {
        console.log("NotificationCenter: No notifications found for user");
        setNotifications([]);
        setUnreadCount(0);
      }
    }, (error) => {
      console.error("NotificationCenter: Error listening to notifications:", error);
    });
    
    return () => {
      console.log("NotificationCenter: Cleaning up listener");
      off(notificationsRef);
    };
  }, [profileData, notificationsEnabled]);
    const markAsRead = async (notificationId) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error al marcar notificación como leída:', error);
    }
  };
  
  const markAllAsRead = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`${API_BASE_URL}/notifications/read-all`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Error al marcar todas las notificaciones como leídas:', error);
    }
  };
  
  const handleNotificationClick = (notification) => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
    
    switch (notification.type) {
      case 'like':
      case 'comment':
        navigate(`/post/${notification.targetId}`);
        break;
      case 'follow':
        navigate(`/profile/${notification.senderProfileId}`);
        break;
      default:
        navigate('/feed');
    }
  };
  
  const renderNotification = (notification) => {
    return (
      <ListGroup.Item 
        key={notification.id}
        className={`notification-item ${!notification.read ? 'notification-unread' : ''}`}
        onClick={() => handleNotificationClick(notification)}
        action
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-1">{notification.message}</p>
            <small className="text-muted">
              {new Date(notification.createdAt).toLocaleString()}
            </small>
          </div>
          {!notification.read && (
            <Badge pill bg="primary">
              Nuevo
            </Badge>
          )}
        </div>
      </ListGroup.Item>
    );
  };
  
  return (
    <Dropdown align="end">      <Dropdown.Toggle variant="light" id="dropdown-notifications">
        <i className="bi bi-bell"></i>
        {unreadCount > 0 && (
          <Badge pill bg="danger" className="notification-badge notification-pulse">
            {unreadCount}
          </Badge>
        )}
      </Dropdown.Toggle><Dropdown.Menu className="notification-menu">
        <Dropdown.Header className="d-flex justify-content-between align-items-center">
          <span>Notificaciones</span>
          {unreadCount > 0 && (
            <Button 
              variant="link" 
              size="sm" 
              className="p-0 text-primary" 
              onClick={(e) => {
                e.stopPropagation();
                markAllAsRead();
              }}
            >
              Marcar todas como leídas
            </Button>
          )}
        </Dropdown.Header>        <div className="notification-scroll">
          {notifications.length > 0 ? (
            <ListGroup variant="flush">
              {notifications.map(renderNotification)}
            </ListGroup>
          ) : (
            <p className="text-center my-3">No tienes notificaciones</p>
          )}
        </div>
        <Dropdown.Divider />
        <div className="px-3 py-2 d-flex justify-content-between align-items-center">
          <span className="text-muted fs-7">Notificaciones</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationCenter;
