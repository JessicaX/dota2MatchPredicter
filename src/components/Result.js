import React, { Component } from 'react';
// import '../App.css';
class Result extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            result : "this is a test"
      }
    }
   predictResult = () => {
       console.log("Predict buttion is clicked!")
   }
  render() {
    return (
      <div className="TeamPick">
        <button onClick={this.predictResult}>
            Predict Match Result
        </button>
        <h1>
            {this.state.result}
        </h1>
      </div>
    );
  }
}

export default Result;