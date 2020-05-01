import React, { Component } from 'react';
import './Counter.css'
import PropTypes from 'prop-types'


class Counter extends Component {
    //Define the initial state in a constructor
    constructor() {
        super(); //Error 1  
        
    }

    render() {
        return (
            <div>
                <div style={{float: "right"}} >
                    <CounterButton/>
                </div>
                <div style={{float: "left"}}>
                    <CounterButton/>
                </div>                
                <div>
                    <button className="reset" onClick={CounterButton}>Reset</button>
                </div>
            </div>
        )
    }
}

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
                    <button onClick={() => this.calculate(this.props.simple, "add")} >+{this.props.simple}</button>
                </div>
                <div>
                    <button onClick={() => this.calculate(this.props.truco, "add")} >+{this.props.truco}</button>
                </div>
                <div>
                    <button onClick={() => this.calculate(this.props.simple, "subtract")} style={{backgroundColor: 'red' }} >-{this.props.simple}</button>
                </div>
                <div>
                    <span className="count">{this.state.counter}</span>
                </div>
            </div>
        )
    }

     //calculate = () => {
        calculate(value, operator) {            
            this.setState(
                (previousState) => {
                    if(operator == "add") {
                        return { counter: previousState.counter + value }          
                    } else {
                        return { counter: previousState.counter - value }
                    }                    
                }
            )
        }

        reset() {            
            this.setState({counter: 0})
        }

}

CounterButton.defaultProps = {
    simple: 1,
    truco: 3
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter