import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import Nav from '../HomeScreen/Nav';
import './ProfileScreen.css'

function Profile() {
  const currentUser = useSelector(selectUser)
  return (
    <div>
      <Nav />

      <div className="profileScren__body">
        <img src="./images/netflix-user.png" alt="" />

        <div className="profileScreen__details">
          <h2>{currentUser.email}</h2>
          div.
        </div>
      </div>
    </div>
  );
}

export default Profile;
