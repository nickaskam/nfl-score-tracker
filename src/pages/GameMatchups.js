import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import cowboysLogo from "../assets/cowboys.png";
import seahawksLogo from "../assets/seahawks.png";
import nflTeams from "../data/nflTeams.json";

function GameMatchups() {
    let { team1, team2 } = useParams();
    const loadedTeams = [...nflTeams]
    
    let loadedTeamsIndex = loadedTeams.length - 1
    let team1Object = {}
    let team2Object = {}

    while (loadedTeamsIndex > 0) {
        if (team1 === loadedTeams[loadedTeamsIndex].name) {
            team1Object = loadedTeams[loadedTeamsIndex]
        } else if (team2 === loadedTeams[loadedTeamsIndex].name) {
            team2Object = loadedTeams[loadedTeamsIndex]
        }
        loadedTeamsIndex --;
    }

    // get logos

    return (
        <>
            <h1 className="centered">
            <img src={cowboysLogo} className="logo" /> {team1Object.full_name} vs {team2Object.full_name} <img src={seahawksLogo} className="logo" />
            </h1>
            <p className="centered">
                These are the matchups between the two teams heads to head recently
            </p>
            <div className="individualGame">
                <h3>Game: 9/27/20</h3>
                <p>{team1} 31 vs 38 {team2}</p>
                <Link to="/oneGameMatchup">
                    See Game in Detail
                </Link>
            </div>
            <div className="individualGame">
                <h3>Game: 1/5/2019</h3>
                <p>{team2} 22 vs 24 {team1}</p>
                <Link to="/oneGameMatchup">
                    See Game in Detail
                </Link>
            </div>
            <div className="individualGame">
                <h3>Game: 9/23/2018</h3>
                <p>{team1} 13 vs 24 {team2}</p>
                <Link to="/oneGameMatchup">
                    See Game in Detail
                </Link>
            </div>
            <div className="individualGame">
                <h3>Game: 12/24/2017</h3>
                <p>{team2} 21 vs 12 {team1}</p>
                <Link to="/oneGameMatchup">
                    See Game in Detail
                </Link>
            </div>
        </>
    )
}

export default GameMatchups