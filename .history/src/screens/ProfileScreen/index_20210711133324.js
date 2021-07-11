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

      <div className="profileScreen__body">
        <img className="profileScren__logo" src="./images/netflix-user.png" alt="" />

        <div className="profileScreen__details">
          <h2>{currentUser.email}</h2>
          <div className="profileScreen__plans">
          
            <button onClick={() => auth.signOut()} className="profileScren__signOut" type="submit"> Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
