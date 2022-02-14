import React from "react";
import { Link } from "react-router-dom";

function GameMatchups({ team1, team2 }) {
    return (
        <>
            <h1>
                {team1} vs {team2}
            </h1>
            <p>
                These are the matchups between the two teams heads to head all time
            </p>
            <div className="individualGame">
                <h3>Game: 12/2/2021</h3>
                <p>{team1} 14 vs 21 {team2}</p>
                <Link to="/oneGameMatchup">
                    See Game in Detail
                </Link>
            </div>
            <div className="individualGame">
                <h3>Game: 10/12/2020</h3>
                <p>{team2} 31 vs 28 {team1}</p>
                <Link to="/oneGameMatchup">
                    See Game in Detail
                </Link>
            </div>
        </>
    )
}

export default GameMatchups