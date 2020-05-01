import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'

class CounterButton extends Component {

    //Define the initial state in a constructor
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        // this.reset = this.reset.bind(this);
    }

    //render = () => {
    render() {
        return (
            <div>               
                <div>
                    <button onClick={() => this.props.increment(this.props.simple, this.props.team)} >+{this.props.simple}</button>
                </div>
                <div>
                    <button onClick={() => this.props.increment(this.props.truco, this.props.team)} >+{this.props.truco}</button>
                </div>
                <div>
                    <button onClick={() => this.props.decrement(this.props.simple, this.props.team)} style={{ backgroundColor: 'red' }} >-{this.props.simple}</button>
                </div>
            </div>
        )
    }

}

CounterButton.defaultProps = {
    value: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton