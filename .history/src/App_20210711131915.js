import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))

      } else{
        //Logged out
        dispatch(logout)
      }
    })

    return unsubscribe;
  }, [])


  return (
    <div className="app">
      <Router>

        {
          ! ? (
            <LoginScreen />
          ) : (
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              <Route exact path="/">
                <HomeScreen />
              </Route>

            </Switch>
          )
        }
      </Router>
    </div>
  );
}

export default App;
