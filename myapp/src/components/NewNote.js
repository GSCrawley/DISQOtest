import React from 'react'

function NewNote({title, text}) {
    return (
        <div>
            <div className="title">
                {title}
            </div>
            <div className="text">
                {text}
            </div>
        </div>
    )
}

export default NewNote