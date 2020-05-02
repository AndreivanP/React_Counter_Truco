import React, { Component } from 'react';
import './Counter.css'
import CounterButton from './CounterButton'
import ListResults from './ListResults'
import ClearResults from './ClearResults'


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
        this.clearDataStore = this.clearDataStore.bind(this);

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
                    <span className="name">Eles</span>
                    <CounterButton simple={1} truco={3} team="B" increment={this.increment} decrement={this.decrement} />
                    <span className="count">{this.state.counterB}</span>
                </div>
                <div>
                    <button className="resetButton" onClick={this.reset}>Salvar / Reiniciar</button>
                </div>
                <ListResults />
                <ClearResults clearDataStore={this.clearDataStore} />
                {/* <button onClick={this.clearDataStore}>Reiniciar</button>           */}
            </div>
        )
    }

    increment(value, team) {
        this.setState(
            (previousState) => {
                if (team == "A") {
                    return { counterA: previousState.counterA + value }
                } else {
                    return { counterB: previousState.counterB + value }
                }
            }
        )
    }

    decrement(value, team) {
        this.setState(
            (previousState) => {
                if (team == "A") {
                    return { counterA: previousState.counterA - value }
                } else {
                    return { counterB: previousState.counterB - value }
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

    clearDataStore() {
        localStorage.clear();
        window.location.reload();
    }
}


function saveResultsInLS(stateA, stateB) {
    let results;
    const nameA = 'results'
    if (localStorage.getItem(nameA) === null) {
        results = [];
    } else {
        results = JSON.parse(localStorage.getItem(nameA));
    }
    results.push(stateA);
    results.push(stateB);

    localStorage.setItem(nameA, JSON.stringify(results))
}

export default Counter