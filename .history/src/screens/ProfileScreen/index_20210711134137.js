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
        <div className="profileScreen__info">
          <img src="./images/netflix-user.png" alt="" />

          <div className="profileScreen__details">
            <h2>{currentUser.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: </h3>

              <button onClick={() => auth.signOut()} className="profileScreen__signOut" type="submit"> Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
