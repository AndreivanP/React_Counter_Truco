import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class ListResults extends Component {

    render() {
        return(
            <button className="finishButton" onClick={() => this.props.clearDataStore()}>Limpar Resultados</button>          
        )           
    }

}

export default ListResults