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
                isLargeRow
            />

            <Row 
                title="TOP RATED"
                fetchUrl={requests.fetchTopRated}
                isLargeRow
            />

            <Row 
                title="ACTION MOVIES"
                fetchUrl={requests.fetchActionMovies}
                isLargeRow
            />

            <Row 
                title="ROMANTIC MOVIES"
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow
            />
            
            <Row 
                title="HORROR MOVIES"
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow
            />

            <Row 
                title="NETFLIX COMEDY"
                fetchUrl={requests.fetchComedyMovies
                isLargeRow
            />

            <Row 
                title="NETFLIX DOCUMENTARY"
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow
            />
        </div>
    )
}

export default HomeScreen
