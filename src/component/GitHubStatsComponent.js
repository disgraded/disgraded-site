import React from 'react'
import Icon from './IconComponent';

export default ({dark, title, description, teammates, projects, commits, milestones }) => {
    let contrast = dark ? 'dark' : 'light'
    title = title ? (<h2 className="githubstats-header">{title}</h2>) : ''
    description = description ? (<p className="infoarea-text">{description}</p>) : ''
    return (
        <div className={`githubstats githubstats-${contrast}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {title}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {teammates}
                        <Icon icon="pin_drop" />
                    </div>
                    <div className="col-md-4">
                        {projects}
                    </div>
                    <div className="col-md-4">
                        {commits}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {milestones}
                    </div>
                </div>
            </div>
        </div>
    )
}