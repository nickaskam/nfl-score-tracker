import React from "react";
import { useParams } from "react-router-dom";
import stadiumLogo from "../assets/lumenField.png";
import cowboysLogo from "../assets/cowboys.png";
import seahawksLogo from "../assets/seahawks.png";
import nflTeams from "../data/nflTeams.json";
import nflGames3 from "../data/gameScores3.json";

function OneGameMatchup() {
    let { gameid } = useParams()
    const gameMatchups = [...nflGames3]
    const loadedTeams = [...nflTeams]
    let selectedGame = {}
    
    for (let i = 0, len = gameMatchups.length; i < len; i++) {
        if (gameid == gameMatchups[i].id) {
            selectedGame = gameMatchups[i]
            console.log("found game")
        }
    }
    console.log(selectedGame);

    // Find the team names
    let loadedTeamsIndex = loadedTeams.length - 1
    let team1Object = {}
    let team2Object = {}

    while (loadedTeamsIndex > -1) {
        if (selectedGame.team1 === loadedTeams[loadedTeamsIndex].code) {
            team1Object = loadedTeams[loadedTeamsIndex]
        } 
        if (selectedGame.team2 === loadedTeams[loadedTeamsIndex].code) {
            team2Object = loadedTeams[loadedTeamsIndex]
        }
        loadedTeamsIndex --;
    }
    console.log(team1Object)
    console.log(team2Object)

    return (
        <>
            <h1>
                {selectedGame.date}: Logo1 {team1Object.full_name} vs {team2Object.full_name} Logo 2
            </h1>
            <p>
                This game took place at insert place
            </p>
            <div>
                <p className="right">
                    Put in map
                    <img src={stadiumLogo} className="stadiumImage"/>
                </p>
            </div>
            <div className="gameHolder">
                <table className="oneGame">
                    <thead>
                        <tr className="oneGameRow">
                            <th>Teams</th>
                            <th>Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="oneGameRow">
                            <td>{team2Object.full_name}</td>
                            <td>{selectedGame.score2}</td>
                        </tr>
                        <tr className="oneGameRow">
                            <td>{team1Object.full_name}</td>
                            <td>{selectedGame.score1}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p>What happened on this day: </p>
                <ul>
                    <li>place holder</li>
                    <li>place holder</li>
                    <li>place holder</li>
                </ul>
            </div>
        </>
    )
}

export default OneGameMatchup