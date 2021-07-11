import React, {useRef} from 'react';
import './SignUp.css'
import {auth} from '../../firebase'

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then( (authUser) => {
        console.log(authUser)
    }).catch((error) => {
      alert(error.message);
    })
  }

  const login = (e) => {
    e.preventDefault()
  }

  return (
    <div className="signup">
      <form action="">
          <h1>Sign In</h1>
          <input ref={emailRef}  type="email" placeholder="Enter Your Email" />
          <input ref={passwordRef} type="password" placeholder="Your Password" />
          <button onClick={() => login()} type="submit">Sign In</button>
          
          <h4 onClick={register} className="signup__link">
            <span className="signup__gray"> Net to Netflix ? </span> {"  "}
            Sign up now
          </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
