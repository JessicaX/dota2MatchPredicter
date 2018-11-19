import React, { Component } from 'react';
import './css/App.css';
import Background from './images/background.jpg';
import TeamPick from './components/TeamPick';
import Result from './components/Result';
import HeroPicker from './components/HeroPikcer';

var backgroundStyle = {
  width: "100%",
  height: "900px",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${Background})`
};
class App extends Component {
  render() {
    return (
      <div className="App" style={ backgroundStyle }>
          <div className="Predicter">
            <TeamPick></TeamPick>
            <Result></Result>
          </div>
          <div className="HeroPicker">
            <HeroPicker></HeroPicker>
          </div>
      </div>
    );
  }
}

export default App;
