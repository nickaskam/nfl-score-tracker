import React from "react"
import { Link } from "react-router-dom";

function HomePage({ name }) {
    
    let selectedTeams = 0;

    const handleChange = () => {
      selectedTeams ++;
      console.log("selected teams: " + selectedTeams);
    };
    // change to make it change based on 

    return (
        <>
            <h1>
                NFL Score Tracker
            </h1>
            <p>
                Welcome {name} to the app to track which NFL teams you want to see scores for
            </p>
            <div>
                { selectedTeams && <p>You have selected {selectedTeams} so far</p>}
            </div>
            <div className="teamMatrix">
                <div className="row">
                    <p className="team">Division:</p>
                    <p></p>
                    <p></p>
                    <p>Division Filter:</p>
                    <p>
                        <select>
                            <option value="all">All</option>
                            <option value="nfc-east">NFC East</option>
                            <option value="nfc-north">NFC North</option>
                            <option value="nfc-south">NFC South</option>
                            <option value="nfc-west">NFC West</option>
                        </select>
                    </p>
                </div>
                <div className="row">
                    <p className="team n-e">NFC East:</p>
                    <p className="team n-e"><input type="checkbox" onChange={handleChange} />Dallas Cowboys</p>
                    <p className="team n-e"><input type="checkbox" onChange={handleChange} />Philadelphia Eagles</p>
                    <p className="team n-e"><input type="checkbox" onChange={handleChange} />New York Giants</p>
                    <p className="team n-e"><input type="checkbox" onChange={handleChange} />Washington Commanders</p>
                </div>
                <div className="row">
                    <p className="team n-n">NFC North:</p>
                    <p className="team n-n"><input type="checkbox" onChange={handleChange} />Green Bay Packers</p>
                    <p className="team n-n"><input type="checkbox" onChange={handleChange} />Minnesota Vikings</p>
                    <p className="team n-n"><input type="checkbox" onChange={handleChange} />Chicago Bears</p>
                    <p className="team n-n"><input type="checkbox" onChange={handleChange} />Detroit Lions</p>
                </div>
                <div className="row">
                    <p className="team n-s">NFC South:</p>
                    <p className="team n-s"><input type="checkbox" onChange={handleChange} />Tampa Bay Buccanneers</p>
                    <p className="team n-s"><input type="checkbox" onChange={handleChange} />New Orleans Saints</p>
                    <p className="team n-s"><input type="checkbox" onChange={handleChange} />Atlanta Falcons</p>
                    <p className="team n-s"><input type="checkbox" onChange={handleChange} />Carolina Panthers</p>
                </div>
                <div className="row">
                    <p className="team n-w">NFC West:</p>
                    <p className="team n-w"><input type="checkbox" onChange={handleChange} />Los Angeles Rams</p>
                    <p className="team n-w"><input type="checkbox" onChange={handleChange} />San Francisco 49ers</p>
                    <p className="team n-w"><input type="checkbox" onChange={handleChange} />Arizona Cardinals</p>
                    <p className="team n-w"><input type="checkbox" onChange={handleChange} />Seattle Seahawks</p>
                </div>
            </div>
            {selectedTeams > 1 &&
                // <Link to="/gameMatchups" id="gameMatchups">
                //     See head to head matchups of 2 selected teams
                // </Link>
                <h2>
                You have {selectedTeams} unread messages.
                </h2>
            }

        </>
    )
}

export default HomePage