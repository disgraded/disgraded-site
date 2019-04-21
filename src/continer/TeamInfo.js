import React, { Component } from 'react'
import InfoArea from '../component/InfoAreaComponent';
import HighlightArea from '../component/HighlightAreaComponent';

export default class TeamInfo extends Component {


    render() {
        return(
            <div className="container-team-info">
                <div className="container team-info-about">
                    <div className="row">
                        <div className="col-md-12">
                            <InfoArea title="Who are we ?" text="We are team of young enthusiasts with goal to contribute to open source game development community with building tools for solving most common problems in game development industry and proving efficinecy of that tools with developing open source games." />
                        </div>
                    </div>
                </div>
                <HighlightArea>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 team-info-work">
                                <InfoArea title="Our work" text="" />
                            </div>
                        </div>
                    </div>
                </HighlightArea>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <InfoArea title="Follow Us" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}