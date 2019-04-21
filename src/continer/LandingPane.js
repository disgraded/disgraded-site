import React, { Component } from 'react'
import Carousel from '../component/CarouselComponent'
import MobileGame from '../component/carousel/MobileGameComponent'

export default class LandingPane extends Component {
    render() {
        return (
            <div className="container-landing-pane">
                <Carousel bg="primary">
                    <MobileGame />
                </Carousel>
            </div>
        )
    }
}