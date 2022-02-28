import React from "react"; // , {useState, useEffect} 
import { useParams } from "react-router-dom";
import stadiumLogo from "../assets/lumenField.png";
// import cowboysLogo from "../assets/cowboys.png";
// import seahawksLogo from "../assets/seahawks.png";
import nflTeams from "../data/nflTeams.json";
import nflGames3 from "../data/gameScores3.json";
// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://192.168.86.24:5050";

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

    // var token_ // variable will store the token
    // var userName = "admin_T42"; // app clientID
    // var passWord = "admin_T42"; // app clientSecret
    // var caspioTokenUrl = "https://us-central1-osu-project-342203.cloudfunctions.net/image-generator?query=atlanta+falcons+logo+nfl&size=small"; // Your application token endpoint  
    // var request = new XMLHttpRequest(); 

    // function getToken(url, clientID, clientSecret) {
    //     var key;           
    //     request.open("POST", url, true); 
    //     request.setRequestHeader("Content-type", "application/json");
    //     request.send("grant_type=client_credentials&client_id="+clientID+"&"+"client_secret="+clientSecret); // specify the credentials to receive the token on request
    //     request.onreadystatechange = function () {
    //         if (request.readyState == request.DONE) {
    //             var response = request.responseText;
    //             var obj = JSON.parse(response); 
    //             key = obj.access_token; //store the value of the accesstoken
    //             token_ = key; // store token in your global variable "token_" or you could simply return the value of the access token from the function
    //         }
    //     }
    // }
    // // Get the token
    // console.log(getToken(caspioTokenUrl, userName, passWord))

    // const [response, setResponse] = useState("");
    // let data = '';

    // useEffect(() => {
    //   const socket = socketIOClient(ENDPOINT);
    //   socket.on("hello", data => {
    //     setResponse(data);
    //   });

    //   return () => socket.disconnect();
    // }, []);

    // console.log(data)

    return (
        <>
            <h1>
                {selectedGame.date}: Logo1 {team1Object.full_name} vs {team2Object.full_name} Logo 2
            </h1>
            <p>
                This game took place at insert place
            </p>
            <div>
                <p className="right">
                    Put in map
                    <img src={stadiumLogo} className="stadiumImage"/>
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
                    <li>place holder</li>
                    <li>place holder</li>
                    <li>place holder</li>
                </ul>
            </div>
        </>
    )
}

export default OneGameMatchup