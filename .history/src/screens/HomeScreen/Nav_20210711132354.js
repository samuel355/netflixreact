import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav() {

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if(window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img onClick={() => history.push} className="nav__logo" src="./images/netflix-logo.png" alt="" />
          
        <img className="nav__avatar" src="./images/netflix-user.png" alt="" />
      </div>
    </div>
  );
}

export default Nav;
