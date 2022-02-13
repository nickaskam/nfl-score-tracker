import React from "react"

function HomePage({ name }) {
    let selectedTeams = 0;

    return (
        <>
            <h1>
                NFL Score Tracker
            </h1>
            <p>
                Welcome {name} to the app to track which NFL teams you want to see scores for
            </p>
            <p>
                You have selected {selectedTeams} so far
            </p>
            <div className="teamMatrix">
                <div className="row">
                    <p className="team">Division:</p>
                    <p className="team">Team 1:</p>
                    <p className="team">Team 2:</p>
                    <p className="team">Team 3:</p>
                    <p className="team">Team 4:</p>
                </div>
                <div className="row">
                    <p className="team">NFC East:</p>
                    <p className="team">Dallas Cowboys</p>
                    <p className="team">Philadelphia Eagles</p>
                    <p className="team">New York Giants</p>
                    <p className="team">Washington Commanders</p>
                </div>
                <div className="row">
                    <p className="team">NFC North:</p>
                    <p className="team">Green Bay Packers</p>
                    <p className="team">Minnesota Vikings</p>
                    <p className="team">Chicago Bears</p>
                    <p className="team">Detroit Lions</p>
                </div>
            </div>

        </>
    )
}

export default HomePage