import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Nav from '../HomeScreen/Nav';
import './ProfileScreen.css'

function Profile() {
  const currentUser = useSelector(selectUser)
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        div.profile__
      </div>
    </div>
  );
}

export default Profile;
