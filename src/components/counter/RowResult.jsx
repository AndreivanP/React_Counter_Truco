import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class RowResult extends Component {
    render() {
        return (            
            <div className="result">{this.props.resultA}      -       {this.props.resultB}</div>            
        )
    }
}

export default RowResult