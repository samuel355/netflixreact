import React, { useState } from 'react'
import './Row.css'
import Axios from ''

function Row({title, fetchUrl, isLargeRow=false}) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function = await Axios.get
    })

    return (
        <div className="row">
            <h4> {title }</h4>
        </div>
    )
}

export default Row
