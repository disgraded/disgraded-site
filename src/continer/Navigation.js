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
        return (
            <div className="container-natigation">
                <Navbar title="DisGraded" onClick={() => this.itemClicked(null)}>
                    <Navbar.Item name="devlogs" label="Dev Logs" onClick={(data) => this.itemClicked(data.name)} />
                </Navbar>
            </div>
        )
    }
}