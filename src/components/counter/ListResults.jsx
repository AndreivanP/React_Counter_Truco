import React, { Component } from 'react';
import './Counter.css'
import RowResult from './RowResult'
import PropTypes from 'prop-types'

class ListResults extends Component {

    render() {
        var elements = this.getTasksFromLSB();
        let rows = []
        for (var i = 0; i < elements.length; i=i+2) {                      
            rows.push(<RowResult resultA={elements[i]} resultB={elements[i+1]}/>);
        }
        return <div>{rows}</div>;             
    }

    getTasksFromLSB() {
        let results;        
        const nameA = 'results'        
        if (localStorage.getItem(nameA) === null) {
            results = [];            
        } else {
            results = JSON.parse(localStorage.getItem(nameA));            
        }
        return results
    }

}

export default ListResults