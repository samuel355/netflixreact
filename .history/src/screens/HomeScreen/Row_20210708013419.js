import React, { useState } from 'react'
import './Row.css'
import Axios from '../../axios'

function Row({title, fetchUrl, isLargeRow=false}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function = await Axios.get(fetchUrl)
        setMovies(requets.data.results)
        return requets;
    })

    return (
        <div className="row">
            <h4> {title }</h4>
        </div>
    )
}

export default Row
