import React from 'react'
import Navigation from '../continer/Navigation'
import LandingPane from '../continer/LandingPane'
import GitHubOrganizationInfo from '../continer/GitHubOrganizationInfo'
import Footer from '../continer/Footer'
import ProductTracking from '../continer/ProductTracking';

export default () => (
    <div className="page">
        <Navigation />
        <LandingPane />
        <GitHubOrganizationInfo />
        {/* <ProductTracking /> */}
        <Footer />
    </div>
)