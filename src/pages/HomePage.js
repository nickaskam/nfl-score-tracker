import React, {useState} from "react"
import { Link } from "react-router-dom";

function HomePage() {
    const [checkedState, setCheckedState] = useState(
        new Array(16).fill(false)
    );
    
    const [selectedTeams, setSelectedTeams] = useState(0);
    
    const handleChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalSelectedTeams = updatedCheckedState.reduce(
        (sum, currentState) => {
        if (currentState === true) {
            return sum + 1;
        }
        return sum;
        },
        0
    );

    setSelectedTeams(totalSelectedTeams);
    };

    return (
        <>
            <h1>
                NFL Score Tracker
            </h1>
            <p>
                Welcome to the app to track which NFL teams you want to see scores for
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
                            id="custom-checkbox-0"
                            checked={checkedState[0]}
                            onChange={() => handleChange(0)}
                        />
                        Dallas Cowboys
                    </p>
                    <p className="team n-e">
                        <input
                            type="checkbox"
                            id="custom-checkbox-1"
                            checked={checkedState[1]}
                            onChange={() => handleChange(1)}
                        />
                        Philadelphia Eagles
                    </p>
                    <p className="team n-e">
                        <input
                            type="checkbox"
                            id="custom-checkbox-2"
                            checked={checkedState[2]}
                            onChange={() => handleChange(2)}
                        />
                        New York Giants
                    </p>
                    <p className="team n-e">
                        <input
                            type="checkbox"
                            id="custom-checkbox-3"
                            checked={checkedState[3]}
                            onChange={() => handleChange(3)}
                        />
                        Washington Commanders
                    </p>
                </div>
                <div className="row">
                    <p className="team n-n">NFC North:</p>
                    <p className="team n-n">
                        <input
                            type="checkbox"
                            id="custom-checkbox-4"
                            checked={checkedState[4]}
                            onChange={() => handleChange(4)}
                        />
                        Green Bay Packers
                    </p>
                    <p className="team n-n">
                        <input
                            type="checkbox"
                            id="custom-checkbox-5"
                            checked={checkedState[5]}
                            onChange={() => handleChange(5)}
                        />
                        Minnesota Vikings
                    </p>
                    <p className="team n-n">
                        <input
                            type="checkbox"
                            id="custom-checkbox-6"
                            checked={checkedState[6]}
                            onChange={() => handleChange(6)}
                        />
                        Chicago Bears
                    </p>
                    <p className="team n-n">
                        <input
                            type="checkbox"
                            id="custom-checkbox-7"
                            checked={checkedState[7]}
                            onChange={() => handleChange(7)}
                        />
                        Detroit Lions
                    </p>
                </div>
                <div className="row">
                    <p className="team n-s">NFC South:</p>
                    <p className="team n-s">
                        <input
                            type="checkbox"
                            id="custom-checkbox-1"
                            checked={checkedState[8]}
                            onChange={() => handleChange(8)}
                        />
                        Tampa Bay Buccanneers
                    </p>
                    <p className="team n-s">
                        <input
                            type="checkbox"
                            id="custom-checkbox-1"
                            checked={checkedState[9]}
                            onChange={() => handleChange(9)}
                        />
                        New Orleans Saints
                    </p>
                    <p className="team n-s">
                        <input
                            type="checkbox"
                            id="custom-checkbox-10"
                            checked={checkedState[10]}
                            onChange={() => handleChange(10)}
                        />
                        Atlanta Falcons
                    </p>
                    <p className="team n-s">
                        <input
                            type="checkbox"
                            id="custom-checkbox-11"
                            checked={checkedState[11]}
                            onChange={() => handleChange(11)}
                        />
                        Carolina Panthers
                    </p>
                </div>
                <div className="row">
                    <p className="team n-w">NFC West:</p>
                    <p className="team n-w">
                        <input
                            type="checkbox"
                            id="custom-checkbox-12"
                            checked={checkedState[12]}
                            onChange={() => handleChange(12)}
                        />
                        Los Angeles Rams
                    </p>
                    <p className="team n-w">
                        <input
                            type="checkbox"
                            id="custom-checkbox-13"
                            checked={checkedState[13]}
                            onChange={() => handleChange(13)}
                        />
                        San Francisco 49ers
                    </p>
                    <p className="team n-w">
                        <input
                            type="checkbox"
                            id="custom-checkbox-14"
                            checked={checkedState[14]}
                            onChange={() => handleChange(14)}
                        />
                        Arizona Cardinals
                    </p>
                    <p className="team n-w">
                        <input
                            type="checkbox"
                            id="custom-checkbox-15"
                            checked={checkedState[15]}
                            onChange={() => handleChange(15)}
                        />
                        Seattle Seahawks
                    </p>
                </div>
            </div>
            <br />
            <div className="centered">You have selected: {selectedTeams}</div>
            {selectedTeams === 0 &&
                <div className="centered">
                    <p>Select 2 More Teams</p>
                </div>
            }
            {selectedTeams === 1 &&
                <div className="centered">
                    <p>Select 1 More Team</p>
                </div>
            }
            {selectedTeams === 2 &&
                <div className="centered">
                    <p>
                        <Link to="/gameMatchups">See matchups for 2 teams selected</Link>
                    </p>
                </div>
            }
            {selectedTeams > 2 &&
                <div className="centered">
                    <p>You've selected too many teams! Remove before moving on</p>
                </div>
            }
        </>
    )
}

export default HomePage