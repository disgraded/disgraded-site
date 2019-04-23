import React, { Component } from 'react'
import Carousel from '../component/CarouselComponent'
import QueriQLayers from '../component/QueriQLayersComponent';

export default class LandingPane extends Component {
    render() {
        return (
            <div className="container-landing-pane">
                <Carousel bg="primary">
                    <QueriQLayers />
                </Carousel>
            </div>
        )
    }
}