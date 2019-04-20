import React, { Component } from 'react'
import Carousel from '../component/CarouselComponent'

export default class MainPresentation extends Component {
    render() {
        return (
            <div className="container-disgraded-intro">
                <Carousel bg="blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                
                            </div>
                            <div className="col-md-4">
                                <img alt="" src="https://img.pngio.com/meet-your-google-assistant-mobile-phone-png-png-335_679.png" height="100%" />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}