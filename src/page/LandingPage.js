import React from 'react'
import Navigation from '../continer/Navigation'
import LandingPane from '../continer/LandingPane'
import GitHubOrganizationInfo from '../continer/GitHubOrganizationInfo'
import Footer from '../continer/Footer'

export default () => (
    <div className="page">
        <Navigation />
        <LandingPane />
        <GitHubOrganizationInfo />
        <Footer />
    </div>
)