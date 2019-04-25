import React from 'react'
import Icon from './IconComponent';

let GitHubBlock = ({ value, icon, label = "label_prop" }) => {
    return (
        <div className="githubstats-block">
            <div className="block-icon">
                <Icon color="light" hover="dark" icon={icon} />
            </div>
            <div className="block-label">{label}</div>
            <div className="block-value">{value}</div>
        </div>
    )
}

export default ({dark, title, description, maintainers, projects, contributions, issues }) => {
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
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <GitHubBlock label="Maintainers" icon="supervised_user_circle" value={maintainers} />
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <GitHubBlock label="Projects" icon="library_books" value={projects} />
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <GitHubBlock label="Contributions" icon="call_split" value={contributions} />
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <GitHubBlock label="Issues" icon="table_chart" value={issues} />
                    </div>
                </div>
            </div>
        </div>
    )
}