import React, { Component } from 'react'
import InfoArea from '../component/InfoAreaComponent';

export default class TeamInfo extends Component {


    render() {
        return(
            <div className="container-team-info">
                <div className="container infoarea">
                    <div className="row">
                        <InfoArea />
                    </div>
                </div>    
            </div>
            )
    }
}