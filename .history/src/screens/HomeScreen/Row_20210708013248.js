import React, { useState } from 'react'
import './Row.css'

function Row({title, fetchUrl, isLargeRow=false}) {

    const [movies, setMovies] = useState([])

    useEffect(() =>)

    return (
        <div className="row">
            <h4> {title }</h4>
        </div>
    )
}

export default Row