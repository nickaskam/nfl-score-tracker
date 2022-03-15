import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import nflTeams from "../data/nflTeams.json";
import nflGames3 from "../data/gameScores.json";

function GameMatchups() {
    let { team1, team2 } = useParams();
    const navigate = useNavigate()
    // keep track of wins, losses and ties
    let team1Wins = 0
    let team2Wins = 0
    let teamTies = 0
    const loadedTeams = [...nflTeams]
    
    // Find the team names
    let loadedTeamsIndex = loadedTeams.length - 1
    let team1Object = {}
    let team2Object = {}

    while (loadedTeamsIndex > -1) {
        if (team1 === loadedTeams[loadedTeamsIndex].name) {
            team1Object = loadedTeams[loadedTeamsIndex]
        } else if (team2 === loadedTeams[loadedTeamsIndex].name) {
            team2Object = loadedTeams[loadedTeamsIndex]
        }
        loadedTeamsIndex --;
    }

    // Load game matchups
    const gameMatchups = [...nflGames3]
    let activeGames = []
    for (let i = 0, len = gameMatchups.length; i < len; i++) {
        if (gameMatchups[i].team1 === team1Object.code && gameMatchups[i].team2 === team2Object.code) {
            activeGames.push(gameMatchups[i])
            // check for tie
            if (gameMatchups[i].score1 > gameMatchups[i].score2) {
                team1Wins ++
            } else if (gameMatchups[i].score2 > gameMatchups[i].score1) {
                team2Wins ++
            } else {
                teamTies ++
            }
        } else if (gameMatchups[i].team1 === team2Object.code && gameMatchups[i].team2 === team1Object.code) {
            activeGames.push(gameMatchups[i])
            // check for tie
            if (gameMatchups[i].score1 > gameMatchups[i].score2) {
                team2Wins ++
            } else if (gameMatchups[i].score2 > gameMatchups[i].score1) {
                team1Wins ++
            } else {
                teamTies ++
            }
        }
    }

    // find the matchups between the two selected teams
    const findGames = (id) => {
        navigate(`/oneGameMatchup/${id}`)
    } 

    return (
        <>
            <h1 className="centered">
            {team1Object.full_name} vs {team2Object.full_name}
            </h1>
            <p className="centered">
                These are the matchups between the two teams heads to head recently
            </p>
            <p className="centered">
                Overall Record | {team1Object.full_name}: {team1Wins} | {team2Object.full_name}: {team2Wins} | Ties: {teamTies}
            </p>
            <div className="games">
                {activeGames.reverse().map(({ date, team1, team2, score1, score2, id }) => {
                    return (
                        <div className="card text-dark bg-light" key={id} style={{ margin: '2px' }}>
                            <div className="card-body">
                                <h5 className="card-title">Game Date: {date}</h5>
                                <p className="card-text">{team1} {score1} vs {score2} {team2}</p>
                                <button onClick={() => findGames(id)}>
                                    See the Game Details
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default GameMatchups