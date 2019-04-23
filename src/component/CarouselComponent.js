import React from 'react'

let WaveDecoration = () => (
    <div className="decoration wave-animation">
        <div className="wave wave-top"><div className="wave-bg wave-bg-top"></div> </div>
        <div className="wave wave-middle"><div className="wave-bg wave-bg-middle"></div></div>
        <div className="wave wave-bottom"><div className="wave-bg wave-bg-bottom"></div></div>
    </div>
)

export default ({ children, bg = 'black', decoration = 'wave' }) => {
    let decorationContent = ''
    if (decoration === 'wave') {
        decorationContent = <WaveDecoration />
    }
    return (
        <div className="carousel">
            <div className={'carousel-content carousel-content-color-' + bg}>
                {children}
            </div>    
        <div className="carousel-decoration">
                {decorationContent}
            </div>
        </div>
    )
}