import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      fetchUserDetails();
    }
  }, [user, navigate]);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${user.id}`);
      if (response.ok) {
        const data = await response.json();
        setUserDetails(data);
      } else {
        console.error('Failed to fetch user details');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <h1 className="profile-header">Your Profile</h1>
      {userDetails ? (
        <div className="profile-details">
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          {/* Add form or other elements to update profile details */}
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default Profile;
