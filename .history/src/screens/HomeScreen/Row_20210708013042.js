import React from 'react'
import './Row.css'

function Row({title, fetchUrl, isLargeRow=false}) {

    

    return (
        <div className="row">
            <h4>{title }</h4>
        </div>
    )
}

export default Row
