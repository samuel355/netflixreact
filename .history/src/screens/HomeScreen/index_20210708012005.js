import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            
            <Banner />

            <Row 
                title="NETFLIX ORIGINALS"
            />
        </div>
    )
}

export default HomeScreen