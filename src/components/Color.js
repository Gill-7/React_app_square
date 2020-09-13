import React, { Component } from 'react'

class Color extends Component {
    render() {
        var heading = {
            height: 150,
            backgroundColor: this.props.color
        };
        return (
            <div style={heading}>
                
            </div>
        )
    }
}

export default Color