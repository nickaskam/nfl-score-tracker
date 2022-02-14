import React from "react";
import stadiumLogo from "../assets/lumenField.png";
import cowboysLogo from "../assets/cowboys.png";
import seahawksLogo from "../assets/seahawks.png";

function OneGameMatchup({ team1, team2 }) {
    return (
        <>
            <h1>
                12/2/2021: <img src={cowboysLogo} className="logo" /> {team1} vs {team2} <img src={seahawksLogo} className="logo" />
            </h1>
            <p>
                This game took place at Century Link Field
            </p>
            <div>
                <p className="right">
                    Map
                    <img src={stadiumLogo} className="stadiumImage"/>
                </p>
            </div>
            <div>
                <table className="oneGame">
                    <thead>
                        <tr className="oneGameRow">
                            <th>Teams</th>
                            <th>First Quarter</th>
                            <th>Second Quarter</th>
                            <th>Third Quarter</th>
                            <th>Fourth Quarter</th>
                            <th>Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="oneGameRow">
                            <td>{team1}</td>
                            <td>9</td>
                            <td>6</td>
                            <td>7</td>
                            <td>9</td>
                            <td>31</td>
                        </tr>
                        <tr className="oneGameRow">
                            <td>{team2}</td>
                            <td>9</td>
                            <td>14</td>
                            <td>7</td>
                            <td>8</td>
                            <td>38</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p>Leading Passers:</p>
                <p>Russell Wilson: 315 yards (27/40), 5 touchdowns, 0 interceptions</p>
                <p>Dak Prescott: 472 yards (37/57), 3 touchdowns, 2 interceptions</p>
            </div>
        </>
    )
}

export default OneGameMatchup