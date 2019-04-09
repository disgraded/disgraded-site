import React from 'react'

export default ({ children, imgSrc }) => (
    <div className="front-carousel">
        <div className="carousel-background">
            <img src={imgSrc} alt="" />
        </div>
        <div className="carousel-content">
            {children}
        </div>
    </div>
)