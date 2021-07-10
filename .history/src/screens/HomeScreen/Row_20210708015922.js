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

            <div className="row__posters">
                {
                    movies.map(
                        (movie) =>
                        ((isLargeRow && movie.poster_path) || 
                        (!isLargeRow && movie.backdrop_path)) && (
                            <img src=  alt="" />
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default Row
