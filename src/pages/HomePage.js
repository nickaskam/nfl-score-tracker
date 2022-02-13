import React from "react"

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
            <p>
                You have selected {selectedTeams} so far
            </p>
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
                    <p className="team n-e">
                        <input
                        type="checkbox"
                        onChange={handleChange} />
                        Dallas Cowboys
                    </p>
                    <p className="team n-e">Philadelphia Eagles</p>
                    <p className="team n-e">New York Giants</p>
                    <p className="team n-e">Washington Commanders</p>
                </div>
                <div className="row">
                    <p className="team n-n">NFC North:</p>
                    <p className="team n-n">Green Bay Packers</p>
                    <p className="team n-n">Minnesota Vikings</p>
                    <p className="team n-n">Chicago Bears</p>
                    <p className="team n-n">Detroit Lions</p>
                </div>
                <div className="row">
                    <p className="team n-s">NFC South:</p>
                    <p className="team n-s">Tampa Bay Buccanneers</p>
                    <p className="team n-s">New Orleans Saints</p>
                    <p className="team n-s">Atlanta Falcons</p>
                    <p className="team n-s">Carolina Panthers</p>
                </div>
                <div className="row">
                    <p className="team n-w">NFC West:</p>
                    <p className="team n-w">Los Angeles Rams</p>
                    <p className="team n-w">San Francisco 49ers</p>
                    <p className="team n-w">Arizona Cardinals</p>
                    <p className="team n-w">Seattle Seahawks</p>
                </div>
            </div>

        </>
    )
}

export default HomePage