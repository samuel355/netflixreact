import React, { useState, useEffect } from 'react'
import './Row.css'
import Axios from '../../axios'

function Row({title, fetchUrl, isLargeRow=false}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request  = await Axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    console.log(movies)
    return (
        <div className="row">
            <h3> {title }</h3>

            {
                movies.map((movie) => (
                    img
                ))
            }
        </div>
    )
}

export default Row
