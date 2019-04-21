import React from 'react'

export default ({ children, color }) => {
    return (
        <div className={`highlight-area highlight-area-${color}`}>
            {children}
        </div>
    )
}