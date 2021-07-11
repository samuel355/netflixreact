import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {
  const user = null;
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((userAuth) =>{
      if(userAuth){
        //Logged in
        console.log(userAuth)
      } else{
        //Logged out
        
      }
    })

    return unsubscribe;
  }, [])


  return (
    <div className="app">
      <Router>

        {
          !user ? (
            <LoginScreen />
          ) : (
            <Switch>
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
