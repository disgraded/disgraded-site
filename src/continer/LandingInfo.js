import React, { Component } from 'react'
import InfoArea from '../component/InfoAreaComponent'
import GitHubStats from '../component/GitHubStatsComponent'

export default class LandingInfo extends Component {


    render() {
        return(
            <div className="container-landing-info">
                <InfoArea title="Who are we ?" description="We are team of young enthusiasts with goal to contribute to open source game development community with building tools for solving most common problems in game development industry and proving efficinecy of that tools with developing open source games." />
                <GitHubStats dark title="Stats" teammates="1" projects="3" commits="106" issues="22" />
            </div>
        )
    }
}