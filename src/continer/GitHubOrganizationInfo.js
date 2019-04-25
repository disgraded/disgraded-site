import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchGihubStatsAction from '../action/fetchGihubStatsAction'

import InfoArea from '../component/InfoAreaComponent'
import GitHubStats from '../component/GitHubStatsComponent'

class GitHubOrganizationInfo extends Component {

    componentDidMount() {
        this.props.fetchGihubStatsAction()
    }

    render() {
        return(
            <div className="container-github-organization-info">
                <InfoArea title="Who are we ?" description="We are team of young enthusiasts with goal to contribute to open source game development community with building tools for solving most common problems in game development industry and proving efficinecy of that tools with developing open source games." />
                <GitHubStats dark title="Stats" maintainers={this.props.maintainers} projects={this.props.projects} contributions={this.props.contributions} issues={this.props.issues} />
            </div>
        )
    }
}

let mapState = (state) => {
    return {
        maintainers: state.statistics.maintainers,
        projects: state.statistics.projects,
        contributions: state.statistics.contributions,
        issues: state.statistics.issues
    };
}

let mapActions = (dispatch) => {
    return {
        fetchGihubStatsAction: bindActionCreators(fetchGihubStatsAction, dispatch)
    };
}


export default connect(mapState, mapActions)(GitHubOrganizationInfo);