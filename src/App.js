import React, { Component } from 'react';
import './css/App.css';
import Background from './images/background.jpg';
import TeamPick from './components/TeamPick';
import Result from './components/Result';
import HeroPicker from './components/HeroPikcer';

var backgroundStyle = {
  width: "100%",
  height: "1500px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Background})`
};

class App extends Component {
  constructor(props) {
    super(props)
    let passedRecommendedHeroes = ["abaddon.png", "ancient_apparition.png", "chen.png","clinkz.png"];
    this.state = {
        myTeamHeroes: [],
        opponentTeamHeroes: [],
        round: 0,
        recommendedHeroes: passedRecommendedHeroes
    }
  }

  handleClickImage = (dataFromHeroPicker) => {
    let curtRound = this.state.round + 1;
    let newMyTeamHeroes = this.state.myTeamHeroes;
    let newOpponentHeroes = this.state.opponentTeamHeroes;
    if (newMyTeamHeroes.length < 5 && (curtRound === 1 || curtRound === 4 || curtRound === 5 || curtRound === 8 || curtRound === 9)) {
      newMyTeamHeroes.push(dataFromHeroPicker.name);
    } else if (newOpponentHeroes.length < 5 && (curtRound === 2 || curtRound === 3 || curtRound === 6 || curtRound === 7 || curtRound === 10)) {
      newOpponentHeroes.push(dataFromHeroPicker.name);
    }
    this.setState({myTeamHeroes : newMyTeamHeroes});
    this.setState({opponentTeamHeroes : newOpponentHeroes});
    this.setState({round : curtRound});
    // console.log(this.state.myTeamHeroes);
  };
  resetTeamPick = () => {
    this.setState({myTeamHeroes: []});
    this.setState({opponentTeamHeroes: []});
    this.setState({round: 0})
  }

  render() {
    return (
      <div className="App" style={ backgroundStyle }>
          <div className="Predicter">
            <TeamPick myTeamHeroes={this.state.myTeamHeroes} opponentTeamHeroes={this.state.opponentTeamHeroes}></TeamPick>
            <Result 
              resetTeamPick = {this.resetTeamPick}
            ></Result>
          </div>
          <div className="HeroPicker">
            <HeroPicker 
              handleClickImage = {this.handleClickImage}
              recommendedHeroes = {this.state.recommendedHeroes}
            ></HeroPicker>
          </div>
      </div>
    );
  }
}

export default App;
