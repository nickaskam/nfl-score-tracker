import React from "react";
import { Link } from "react-router-dom";
import cowboysLogo from "../assets/cowboys.png";
import seahawksLogo from "../assets/seahawks.png";

function GameMatchups({ team1, team2 }) {
    return (
        <>
            <h1 className="centered">
            <img src={cowboysLogo} className="logo" /> {team1} vs {team2} <img src={seahawksLogo} className="logo" />
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