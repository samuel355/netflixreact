import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Nav from '../HomeScreen/Nav';
import './ProfileScreen.css'

function Profile() {
  const currentUser = useSelector(selectUser)
  return (
    <div>
      <Nav />
      div.profileScreen
    </div>
  );
}

export default Profile;
