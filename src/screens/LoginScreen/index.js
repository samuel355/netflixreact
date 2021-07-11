import React, { useState } from 'react'
import './Login.css'
import SignUpScreen from '../SignUpScreen'

function Login() {

    const [signIn, setSignIn] = useState(false)


  return (
    <div className="login" style={{backgroundImage: "url('./images/home-banner.jpg')", backgroundSize: 'cover'}}>
      <div className="">
        <img className="login__logo" src="./images/netflix-logo.png" alt="" />

        <button onClick= {() => setSignIn(true)} className="login__button"> SignIn</button>

        <div className="login__gradient"></div>
      </div>

      <div className="login__body">

        {
            signIn ? (
                <SignUpScreen />
            ):(
                <>
                    <h1>Unlimited films, TV programs and more.</h1>
                    <h2>Watch anywhere. Cancel anytime</h2>
                    <h3>Ready to watch? Enter your email to create or start your membership plan</h3>

                    <div className="login__input">
                        <form action="">
                            <input type="email" placeholder="Email Address" id="" />
                            <button onClick={() => setSignIn(true)} className="loginInput__button">GET STARTED</button>
                        </form>
                    </div>
                </>
            )
        }
        
      </div>
    </div>
  )
}

export default Login
