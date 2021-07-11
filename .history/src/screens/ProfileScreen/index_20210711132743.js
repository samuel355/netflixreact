import React from 'react';
import Nav from '../HomeScreen/Nav';
import './ProfileScreen.css'

function Profile() {
  return (
    <div>
      <Nav />

      <div className="profileScren__body">
        <img src="./images/netflix-user.png" alt="" />
      </div>
    </div>
  );
}

export default Profile;
