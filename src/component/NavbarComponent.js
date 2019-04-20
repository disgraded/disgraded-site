import React from 'react'

const Navbar = ({ title, onClick, children }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-disgraded">
            <div className="container">
                <a className="navbar-brand" href="#brand" onClick={(e) => {
                    e.preventDefault()
                    if (typeof onClick === 'function') {
                        onClick()
                    }
                }}>
                    <img height="80" src="/img/logo.png" alt="DisGraded Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Navbar.Item = ({label, name = label, active = false, onClick = null }) => {
    if (onClick !== null && typeof onClick !== 'function') {
        throw Error("[Navbar.Item] onClick prop must be function")
    }
    return (
        <li onClick={(e) => {
            e.preventDefault()
            if (onClick !== null) {
                onClick({ name, label, active })
            }
        }} className={active ? "nav-item active" : "nav-item"}>
            <a className="nav-link" href={"#" + name}>{label}</a>
        </li>
    )
}

export default Navbar