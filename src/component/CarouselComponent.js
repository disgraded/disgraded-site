import React from 'react'

export default ({ children, bg = 'black' }) => (
    <div className="carousel">
        <div className={'carousel-content carousel-content-color-' + bg}>
            {children}
        </div>    
    <div className="carousel-animation">
            <div className="wave-animation">
                <div className="wave wave-top">
                    <div className="wave-bg wave-bg-top"></div>
                </div>
                <div className="wave wave-middle">
                    <div className="wave-bg wave-bg-middle"></div>
                </div>
                <div className="wave wave-bottom">
                    <div className="wave-bg wave-bg-bottom"></div>
                </div>
            </div>
        </div>
    </div>
)