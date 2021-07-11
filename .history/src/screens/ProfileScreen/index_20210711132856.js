import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../HomeScreen/Nav';
import './ProfileScreen.css'

function Profile() {
  const currentUser = useSelector(selc)
  return (
    <div>
      <Nav />

      <div className="profileScren__body">
        <img src="./images/netflix-user.png" alt="" />

        <div className="profileScreen__details">

        </div>
      </div>
    </div>
  );
}

export default Profile;
