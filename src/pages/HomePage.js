import React from "react"

function HomePage({ name }) {
    return (
        <>
            <h1>
                Exercise App Tracker
            </h1>
            <p>
                Welcome {name} to the app to track which NFL teams you want to see scores for
            </p>
        </>
    )
}

export default HomePage