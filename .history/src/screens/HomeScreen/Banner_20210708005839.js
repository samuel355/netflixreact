import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Banner.css'
import Axios from '../../axios'
import requests from '../../../Requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData(){
          const request = await Axios.get(requests.fetchNetflixOriginals);
          setMovie
      }
      return () => {
        
      };
    }, []);

    function truncate( string, n){

        return string?.length > n ? string.substr(0, n-1) + '...' : string;
        
    }

  return (
    <header className="banner" style={{
        backgroundSize : "cover",
        backgroundImage : "url('./images/home-banner.jpg')",
        backgroundPosition : "center center"
    }}>

      <div className="banner__contents">
        <h4 className="banner__title"> Movie Name</h4>
        <div className="banner__buttons">
            <button className="banner__button"> Play</button>
            <button className="banner__button"> My List</button>
        </div>
        <h1 className="banner__description"> {truncate(` This is the title of movies which is gon be here when we are done with the build. keep up and don't give up`, 150)}</h1>
      </div>

        <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
