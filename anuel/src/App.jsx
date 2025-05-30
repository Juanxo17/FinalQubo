import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateProfile from './pages/CreateProfile';
import EditProfile from './pages/EditProfile';
import DeleteProfile from './pages/DeleteProfile';
import ViewProfile from './pages/ViewProfile';
import ProfileWithPosts from './pages/ProfileWithPosts';
import Feed from './pages/Feed';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <CreateProfile />
        </ProtectedRoute>
      } />
      <Route path="/view-profile" element={
        <ProtectedRoute requireProfile={true}>
          <ViewProfile />
        </ProtectedRoute>
      } />
      <Route path="/feed" element={
        <ProtectedRoute requireProfile={true}>
          <Feed />
        </ProtectedRoute>
      } />
      <Route path="/edit-profile" element={
        <ProtectedRoute requireProfile={true}>
          <EditProfile />
        </ProtectedRoute>
      } />
      <Route path="/delete-profile" element={
        <ProtectedRoute requireProfile={true}>
          <DeleteProfile />
        </ProtectedRoute>
      } />
      {}
      <Route path="/profile-posts" element={
        <ProtectedRoute requireProfile={true}>
          <ProfileWithPosts />
        </ProtectedRoute>
      } />
      {}
      <Route path="/profile/:username" element={
        <ProtectedRoute requireProfile={true}>
          <ProfileWithPosts />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;