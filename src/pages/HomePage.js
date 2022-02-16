import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import nflTeams from "../data/nflTeams.json";

function HomePage() {
    const loadedTeams = [...nflTeams]
    const navigate = useNavigate()
    let loadedTeamsCount = loadedTeams.length

    const [checkedState, setCheckedState] = useState(
        new Array(loadedTeamsCount).fill(false)
    );
    
    // get the selection count
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

    // filter the teams
    const [filteredTeams, setFilteredTeams] = useState(loadedTeams) 

    const filterChange = e => {
        const value = e.target.value
        console.log(value)
        if (value != "all") {
            setFilteredTeams(
                loadedTeams.filter(loadedTeam => {
                    if (loadedTeam.division === value) {
                        return true
                    }
                    return false
                })
            )
        } else {
            setFilteredTeams(
                loadedTeams.filter(loadedTeam => {
                    return true
                })
            )
        }
    }

    // find the matchups between the two selected teams
    const findMatchups = () => {
        // find which teams have been selected
        let foundMatchups = []
        for (let i = 0; i < loadedTeamsCount; i++) {
            if (checkedState[i] == true) {
                foundMatchups.push(i)
            }
        }
        // add those teams to the URL and find their matchups
        let team1 = loadedTeams[foundMatchups[0]].name
        let team2 = loadedTeams[foundMatchups[1]].name
        navigate(`/gameMatchups/${team1}/${team2}`)
    } 


    return (
        <>
            <h1>
                NFL Score Tracker
            </h1>
            <p>
                Welcome to the app to track which NFL teams you want to see scores for
            </p>
            <div className="row">
                <p></p>
                <p></p>
                <p>Division Filter:</p>
                <p>
                    <select onChange={filterChange}>
                        <option value="all">All</option>
                        <option value="NFC East">NFC East</option>
                        <option value="NFC North">NFC North</option>
                        <option value="NFC South">NFC South</option>
                        <option value="NFC West">NFC West</option>
                        <option value="AFC East">AFC East</option>
                        <option value="AFC North">AFC North</option>
                        <option value="AFC South">AFC South</option>
                        <option value="AFC West">AFC West</option>
                    </select>
                </p>
            </div>
            <div className="row">
                {filteredTeams.map(({ full_name, division }, index) => {
                    return (
                        <p className={division} key={index}>
                            <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={full_name}
                                value={full_name}
                                checked={checkedState[index]}
                                onChange={() => handleChange(index)} />
                            <label htmlFor={`custom-checkbox-${index}`}>{full_name}</label>
                        </p>
                    )
                })}
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
                    <button onClick={() => findMatchups([loadedTeams[1], loadedTeams[2]])}>
                        See matchups for 2 teams selected
                    </button>
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