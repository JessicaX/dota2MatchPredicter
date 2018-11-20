import React, { Component } from 'react';
import '../css/Result.css';
class Result extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            result : "this is the predicted result"
      }
    }
   predictResult = () => {
       console.log("Predict buttion is clicked!")
   }
  render() {
    return (
      <div className="TeamPick">
        <div className="button">
            <button onClick={this.predictResult}>
                Predict Match Result
            </button>
            <button onClick={this.props.resetTeamPick}>
                Reset Team Picks
            </button>
            <h1>
                {this.state.result}
            </h1>
        </div>
        
      </div>
    );
  }
}

export default Result;