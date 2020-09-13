import React, { Component } from 'react';
import Basic from './Basic';
import Color from './Color';
import './myStyles.css';


class Card extends Component {
    render() {
        return (
            <div id='container'>
                <Color color={this.props.color} />
                <Basic color={this.props.color} />
            </div>
        )
    }
}

export default Card