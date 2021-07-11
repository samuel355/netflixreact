import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from '../../Requests'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            
            <Banner />

            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row 
                title="TRENDING NOW"
                fetchUrl={requests.fetchTrending}
                
            />

            <Row 
                title="TOP RATED"
                fetchUrl={requests.fetchTopRated}
                
            />

            <Row 
                title="ACTION MOVIES"
                fetchUrl={requests.fetchActionMovies}
                
            />

            <Row 
                title="ROMANTIC MOVIES"
                fetchUrl={requests.fetchRomanceMovies}
                
            />
            
            <Row 
                title="HORROR MOVIES"
                fetchUrl={requests.fetchHorrorMovies}
               
            />

            <Row 
                title="NETFLIX COMEDY"
                fetchUrl={requests.fetchComedyMovies}
               
            />

            <Row 
                title="NETFLIX DOCUMENTARY"
                fetchUrl={requests.fetchDocumentaries}
                
            />
        </div>
    )
}

export default HomeScreen
