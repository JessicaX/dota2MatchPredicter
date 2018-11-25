import React, { Component } from 'react';
import '../css/Result.css';
import hero from '../heromap/hero.json' 
class Result extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            result : ""
      }
      this.predictResult = this.predictResult.bind(this);
      this.findId = this.findId.bind(this);
    }

    findId = (fileName) => {
        var oriName = fileName.split(".")[0];
        // console.log(oriName);
        var finalName = "";
        for (let i = 0; i < oriName.length; i++) {
            if (oriName.charAt(i) === '_') {
                finalName += ' ';
            } else {
                finalName += oriName.charAt(i).toLowerCase();
            }
        }
        console.log(finalName);
        var id; 
        hero.map((data, index) => {
            var targetName = data.localized_name;
            var formattedTargetName = "";
            for (let i = 0; i < targetName.length; i++) {   
                if (targetName.charAt(i).toLowerCase() === '-') {
                    formattedTargetName += ' ';
                } else if (targetName.charAt(i).toLowerCase() === '\'') {
                    continue;
                } else {
                    formattedTargetName += targetName.charAt(i).toLowerCase();
                }
                
            }
            // console.log(formattedTargetName);
            if (finalName === formattedTargetName) {
                id = data.id;
                console.log(id);
            }
        })
        // var id = hero.filter(
        //     function(hero) {return hero.localized_name == finalName}
        // );
        return id;
    }

    async predictResult() {
        var myTeamIds = [];
        var opponentTeamIds = [];
        console.log(this.props.myTeamHeroes)
        for (let i = 0; i < this.props.myTeamHeroes.length; i++) {
            let id = this.findId(this.props.myTeamHeroes[i]); 
            myTeamIds.push(id);
            // console.log(id);
        }
        for (let i = 0; i < this.props.opponentTeamHeroes.length; i++) {
            let id = this.findId(this.props.opponentTeamHeroes[i]); 
            opponentTeamIds.push(id);
        }
        console.log(myTeamIds);
        console.log(opponentTeamIds);
       const response = await fetch(
        //   `${uriBase}?visualFeatures=${visualFeatures}&details=${details}&language=${language}`,
        `http://localhost:5000/predictMatch`,
          {
            method: 'post',
            headers: new Headers({
                'content-type': 'application/json',
                // 'Accept': 'application/json',
              }),
            // body: JSON.stringify({"url": "http://digitalnativestudios.com/textmeshpro/docs/rich-text/line-indent.png"})
            body: JSON.stringify(
                {
                    "myTeam": myTeamIds,
                    "opponentTeam": opponentTeamIds
                }
            ) 
          }
        );
        // console.log(JSON.parse(response));
        var rep = response.json()
        var resultString = await rep.then(function(value) {
            // console.log(value.res);
            return value.res;
          });
        console.log(resultString);
        this.setState({
            result: resultString
        })
        // console.log(rep);
        
   }
  render() {
    return (
      <div className="TeamPick">
        <div className="button">
            <button onClick={this.predictResult}>
                Predict the Match Result
            </button>
            <button onClick={this.props.resetTeamPick}>
                Reset Team Picks
            </button>
            <h1>
                The propablity of win is : {this.state.result}
            </h1>
        </div>
        
      </div>
    );
  }
}

export default Result;