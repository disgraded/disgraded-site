import React, { Component } from 'react'
import Carousel from '../component/CarouselComponent'
import MobileGame from '../component/carousel/MobileGameComponent';

export default class MainPresentation extends Component {
    render() {
        return (
            <div className="container-main-presentation">
                <Carousel bg="pink">
                    <MobileGame />
                </Carousel>
            </div>
        )
    }
}