import React from "react";

function OneGameMatchup({ team1, team2 }) {
    return (
        <>
            <h1>
                12/2/2021: {team1} vs {team2}
            </h1>
            <p>
                This game took place at Century Link Field
            </p>
            <div>
                Map: add image
            </div>
            <div>
                <table className="oneGame">
                    <thead>
                        <tr>
                            <th>Teams</th>
                            <th>First Quarter</th>
                            <th>Second Quarter</th>
                            <th>Third Quarter</th>
                            <th>Fourth Quarter</th>
                            <th>Final</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{team1}</td>
                            <td>0</td>
                            <td>10</td>
                            <td>7</td>
                            <td>7</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>{team2}</td>
                            <td>10</td>
                            <td>7</td>
                            <td>7</td>
                            <td>7</td>
                            <td>31</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <p>Leading Passer</p>
                <p>Russell Wilson: 390 yards (25/31), 2 touchdowns, 1 interception</p>
                <p>Dak Prescott: 324 yards (20/28), 1 touchdown, 0 interceptions</p>
            </div>
        </>
    )
}

export default OneGameMatchup