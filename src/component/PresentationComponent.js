import React from 'react'

export default ({ children }) => (
    <div className="presentation">
        <div className="presentation-background">
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
        <div className="presentation-content">
            {children}
        </div>
    </div>
)