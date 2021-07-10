import React from 'react'
import './Row.css'

function Row({title, fetchUrl,}) {



    return (
        <div className="row">
            <h4>{title }</h4>
        </div>
    )
}

export default Row
