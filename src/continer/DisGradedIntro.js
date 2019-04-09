import React, { Component } from 'react'
import FrontCarousel from '../component/FrontCarouselComponent'

export default class DisGradedIntro extends Component {
    render() {
        return (
            <div className="container-disgraded-intro">
                <FrontCarousel imgSrc="/img/disgraded-bg.jpeg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </FrontCarousel>
            </div>
        )
    }
}