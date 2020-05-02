import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class ListResults extends Component {

    render() {
        return(
            <button onClick={() => this.props.clearDataStore()}>Reiniciar</button>          
        )           
    }

}

export default ListResults