import React, {useState, useEffect} from "react"; 
import { useParams } from "react-router-dom";
import nflTeams from "../data/nflTeams.json";
import nflGames3 from "../data/gameScores.json";
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

    // team info
    let url_1 = 'http://localhost:5000/teamdata/' + team1Object.full_name.replace(/\s/g, '+')
    // logo one
    let url_2 = 'http://localhost:5000/image/' + team1Object.full_name.replace(/\s/g, '+')
    // logo two
    let url_3 = 'http://localhost:5000/image/' + team2Object.full_name.replace(/\s/g, '+')
    // map
    let url_4 = 'http://localhost:5000/homeMap/' + team1Object.homeLat + ',' + team1Object.homeLong

    const [getFacts, setFacts] = useState({})
    const [getLogoOne, setLogoOne] = useState({})
    const [getLogoTwo, setLogoTwo] = useState({})
    const [getMap, setMap] = useState({})

    useEffect(() =>{

        const requestFacts = axios.get(url_1);
        const requestLogoOne = axios.get(url_2);
        const requestLogoTwo = axios.get(url_3);
        const requestMap = axios.get(url_4)

        axios
            .all([requestFacts, requestLogoOne, requestLogoTwo, requestMap])
            .then(axios.spread((...responses) => {
                const responseFacts = responses[0]
                const responseLogoOne = responses[1]
                const responseLogoTwo = responses[2]
                const responseMap = responses[3]
                setFacts(responseFacts)
                setLogoOne(responseLogoOne)
                setLogoTwo(responseLogoTwo)
                setMap(responseMap)
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
                    <span>Loading </span>}
                {team1Object.full_name} vs {team2Object.full_name} 
                {/* get logo two */}
                {getLogoTwo.status === 200 ? 
                    <img src={getLogoTwo.data} className="logo"/>
                    :
                    <span> Loading </span>}
            </h1>
            <p>
                This game took place at {team1Object.stadiumName}'s stadium
            </p>
            <div>
                <p className="right">
                    {/* Put in map for home stadium */}
                    {getMap.status === 200 ? 
                    <img src={getMap.data} className="stadiumImage"/>
                    :
                    <span>Loading Image</span>}
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
                    {/* get facts for home team */}
                    <div>{getFacts.status === 200 ? 
                        <li>{getFacts.data}</li>
                        :
                        <li>LOADING</li>}</div>
                </ul>
            </div>
        </>
    )
}

export default OneGameMatchup