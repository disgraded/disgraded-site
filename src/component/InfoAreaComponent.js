import React from 'react'

export default ({ dark, title, description, teammates, projects, commits }) => {
    let contrast = dark ? 'dark' : 'light'
    title = title ? (<h2 className="infoarea-header">{title}</h2>) : ''
    description = description ? (<p className="infoarea-text">{description}</p>) : ''
    return (
        <div className={`infoarea infoarea-${contrast}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {title}
                        {description}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {teammates}
                    </div>
                    <div className="col-md-4">
                        {projects}
                    </div>
                    <div className="col-md-4">
                        {commits}
                    </div>
                </div>
            </div>
        </div>
    )
}