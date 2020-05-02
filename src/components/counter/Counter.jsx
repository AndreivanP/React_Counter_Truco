import React, { Component } from 'react';
import './Counter.css'
import CounterButton from './CounterButton'


class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counterA: 0,
            counterB: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);

    }

    render() {
        return (
            <div>
                <div style={{ float: "left" }} >
                    <span className="name">Nós</span>
                    <CounterButton simple={1} truco={3} team="A" increment={this.increment} decrement={this.decrement} />
                    <span className="count">{this.state.counterA}</span>
                </div>
                <div style={{ float: "right" }}>
                    <span className="name">Elas</span>
                    <CounterButton simple={1} truco={3} team="B" increment={this.increment} decrement={this.decrement} />
                    <span className="count">{this.state.counterB}</span>
                </div>
                <div>
                    <button className="reset" onClick={this.reset}>Reiniciar</button>
                </div>
            </div>
        )
    }

    increment(value, team) {
        this.setState(
            (previousState) => {
                if (team == "A") {
                    return {counterA: previousState.counterA + value }
                } else {
                    return {counterB: previousState.counterB + value }
                }

            }
        )
    }

    decrement(value, team) {
        this.setState(
            (previousState) => {
                if (team == "A") {
                    return {counterA: previousState.counterA - value }
                } else {
                    return {counterB: previousState.counterB - value }
                }

            }
        )
    }

    reset() {
        this.setState(
            {
                counterA: 0,
                counterB: 0
            }
        )
        saveResultsInLS(this.state.counterA, this.state.counterB);
    }    
}

function saveResultsInLS(stateA, stateB) {   
    let resultsA;
    let resultsB;
    if (localStorage.getItem('resultsA') === null || localStorage.getItem('resultsB') === null) {
        resultsA = [];
        resultsB = [];    
    } else {
        resultsA = JSON.parse(localStorage.getItem('resultsA'));
        resultsB = JSON.parse(localStorage.getItem('resultsB'));
    }

    resultsA.push(stateA);
    resultsB.push(stateB);  

    localStorage.setItem('resultsA', JSON.stringify(resultsA))
    localStorage.setItem('resultsB', JSON.stringify(resultsB))
}

export default Counter