import React, { Component } from 'react';
import './basic.css'


class Basic extends Component {
    render() {
        return (
            <div id='contain'>
                <h3>{this.props.color}</h3>
            </div>
        )
    }
}

export default Basic
