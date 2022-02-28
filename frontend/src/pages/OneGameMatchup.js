import React, {useState, useEffect} from "react"; 
import { useParams } from "react-router-dom";
import stadiumLogo from "../assets/lumenField.png";
import nflTeams from "../data/nflTeams.json";
import nflGames3 from "../data/gameScores3.json";
import axios from "axios";

function OneGameMatchup() {
    let { gameid } = useParams()
    const gameMatchups = [...nflGames3]
    const loadedTeams = [...nflTeams]
    let selectedGame = {}
    
    for (let i = 0, len = gameMatchups.length; i < len; i++) {
        if (gameid == gameMatchups[i].id) {
            selectedGame = gameMatchups[i]
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

    // team info
    let url_1 = 'http://localhost:5000/teamdata/' + team1Object.full_name.replace(/\s/g, '+')
    // console.log(url_1)
    // logo one
    let url_2 = 'http://localhost:5000/image/' + team1Object.full_name.replace(/\s/g, '+')
    // logo two
    let url_3 = 'http://localhost:5000/image/' + team2Object.full_name.replace(/\s/g, '+')

    const [getMessage, setGetMessage] = useState({})
    const [getLogoOne, setLogoOne] = useState({})
    const [getLogoTwo, setLogoTwo] = useState({})

    useEffect(() =>{

        const requestOne = axios.get(url_1);
        const requestTwo = axios.get(url_2);
        const requestThree = axios.get(url_3);

        axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
            const responseOne = responses[0]
            const responseTwo = responses[1]
            const responseThree = responses[2]
            setGetMessage(responses[0])
            setLogoOne(responses[1])
            setLogoTwo(responses[2])
            // use/access the results 
            console.log("responseOne",responseOne);
            console.log("responseTwo",responseTwo);
            console.log("responesThree",responseThree);
            })).catch(errors => {
            console.log(errors);
        })
    }, [])


    return (
        <>
            <h1>
                {selectedGame.date}: 
                {/* get logo one */}
                {getLogoOne.status === 200 ? 
                    <img src={getLogoOne.data} className="logo"/>
                    :
                    <li>LOADING</li>}
                {team1Object.full_name} vs {team2Object.full_name} 
                {/* get logo two */}
                {getLogoTwo.status === 200 ? 
                    <img src={getLogoTwo.data} className="logo"/>
                    :
                    <li>LOADING</li>}
            </h1>
            <p>
                This game took place at {team1Object.full_name}'s stadium
            </p>
            <div>
                <p className="right">
                    Put in map for latitude - {team1Object.homeLat} and longitude - {team1Object.homeLong} 
                    {/* <img src={stadiumLogo} className="stadiumImage"/> */}
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
                <p>More About the Home Team - {team1Object.full_name}: </p>
                <ul>
                    <div>{getMessage.status === 200 ? 
                        <li>{getMessage.data}</li>
                        :
                        <li>LOADING</li>}</div>
                </ul>
            </div>
        </>
    )
}

export default OneGameMatchup