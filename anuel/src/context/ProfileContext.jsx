import { createContext, useContext, useState, useEffect } from 'react';
import { DoublyLinkedList } from '../utils/DoublyLinkedList'; 
import { getAccountId, getProfileId } from '../utils/auth';

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

const profileInitialState = {
  nombre: '',
  nombreUsuario: '',
  biografia: '',
  fotoPerfil: '',
  accountId: getAccountId() || '', // Add accountId from localStorage
  perfilId: getProfileId() || '',  // Add profileId from localStorage
};

const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(profileInitialState);
  const [sliderList] = useState(new DoublyLinkedList());
  const [currentSlide, setCurrentSlide] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  // Initialize the slider for profile creation
  useEffect(() => {
    sliderList.append('Bienvenida');
    sliderList.append('Nombre');
    sliderList.append('Username');
    sliderList.append('Biografia');  
    sliderList.append('FotoPerfil');
    
    sliderList.append('Salida');     

    setCurrentSlide(sliderList.head);
  }, []);

  // Load profile data if user is authenticated and has a profile
  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('token');
      const accountId = getAccountId();
      const perfilId = getProfileId();
      
      if (!token || !accountId) return;
      
      try {
        setIsProfileLoading(true);
        const res = await fetch('http://localhost:8080/profile/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (res.ok) {
          const data = await res.json();
          // Update profile data including accountId and perfilId
          setProfileData(prevData => ({
            ...prevData,
            ...data,
            accountId: accountId,
            perfilId: perfilId || data._id
          }));
          
          // Store profile ID if it was returned from the API
          if (data._id && !perfilId) {
            localStorage.setItem('perfilId', data._id);
          }
          
          console.log("ProfileContext: Loaded profile data:", {
            ...data,
            accountId: accountId,
            perfilId: perfilId || data._id
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setIsProfileLoading(false);
      }
    };
    
    fetchProfileData();
  }, []);

  const nextSlide = () => {
    if (currentSlide?.next) {
      setCurrentSlide(currentSlide.next);
    }
  };

  const prevSlide = () => {
    if (currentSlide?.prev) {
      setCurrentSlide(currentSlide.prev);
    }
  };

  const updateProfile = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <ProfileContext.Provider
      value={{
        profileData,
        updateProfile,
        currentSlide,
        nextSlide,
        prevSlide,
        isProfileLoading
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
