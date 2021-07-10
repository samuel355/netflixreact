import React, { useState, useEffect } from 'react'
import './Row.css'
import Axios from '../../axios'

function Row({title, fetchUrl, isLargeRow=false}) {

    const [movies, setMovies] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/"

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
            <h2> {title }</h2>

            {
                movies.map((movie) => (
                    <img src={`${base_url}`} alt="" />
                ))
            }
        </div>
    )
}

export default Row
