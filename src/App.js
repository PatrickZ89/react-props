import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = { 
    currentNumber: '',
    currentTotal: '0',
    history: [],
  }

  handleChange = event => {
    console.log('handling change!');
    this.setState({
      currentNumber: event.target.value
      
    })
  }

  handleUp = (event) => {
    event.preventDefault();
    this.setState({
      
      currentTotal: Number(this.state.currentNumber)+1,
      // currentNumber: '',
      // history : [ ...this.state.history,  this.state.currentNumber]
    });

  }

  handleDown = (event) => {
    event.preventDefault();
    this.setState({
      
      currentTotal: Number(this.state.currentNumber)-1,
      // currentNumber: '',
      // history : [ ...this.state.history,  this.state.currentNumber]
    });

  }
 
save = (event) => {
  event.preventDefault();
  this.setState({
    
    currentTotal: '',
    history : [ ...this.state.history,  this.state.currentTotal]
  });

}




  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>React Components</h1>
          <p>
            Enter a number and click up or down.  
            The total will increase or decrease by that amount.
          </p>
        </header>
        <button onClick={this.handleUp}>Up</button>
          <input  
            placeholder="Enter Number"
            // value={this.state.star.name}
            type="number"
            onChange={this.handleChange}
          />
        <button onClick={this.handleDown}>Down</button>
      <p>
        {this.state.currentTotal}
      {/* <li key={this.props.starItem.name}> {this.props.starItem.name} is {this.props.starItem.diameter} in diameter</li>
       */}
       
      </p>
      <button onClick={this.save}>Save</button>
      <div>
        <h3>History</h3>
        <ul>
        {this.state.history.map( number => 
        <p key={number}> {number} </p> )}
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
