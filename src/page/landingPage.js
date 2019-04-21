import React from 'react'
import Navigation from '../continer/Navigation'
import LandingPane from '../continer/LandingPane'
import LandingInfo from '../continer/LandingInfo';

export default () => (
    <div className="page">
        <Navigation />
        <LandingPane />
        <LandingInfo />
    </div>
)