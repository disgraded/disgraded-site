import React, { Component } from 'react'
import Navbar from '../component/NavbarComponent'

export default class Navigation extends Component {
    
    state = {
        activeItem : null
    }

    itemClicked(name) {
        this.setState({
            activeItem : name
        })
    }
    
    render() {
        const { activeItem } = this.state
        return (
            <div className="container-natigation">
                <Navbar title="DisGraded" onClick={() => this.itemClicked(null)}>
                    <Navbar.Item active={activeItem === 'games'} name="games" label="Games" onClick={(data) => this.itemClicked(data.name)} />
                    <Navbar.Item active={activeItem === 'products'} name="products" label="Products" onClick={(data) => this.itemClicked(data.name)} />
                </Navbar>
            </div>
        )
    }
}