import React from 'react'

export default ({ title, text }) => {
    return (
        <div className="infoarea">
            <h2 className="infoarea-header">{title}</h2>
            <p className="infoarea-text">{text}</p>
        </div>
    )
}