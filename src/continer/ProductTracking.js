import React, { Component } from 'react'
import Product from '../component/ProductComponent';

export default class ProductTracking extends Component {
    render() {
        return (
            <div className="container-product-tracking">
                <Product organization="disgraded" name="quariq" />
            </div>
        )
    }
} 