
import React from 'react'

import {numberOfQuestion} from  '../BazaPytan/index.js'

const Result = ({ score, responses, grajPonownie }) => {
    console.log(score, responses)
    return (
        <div className="score-card">
            <div className="score">
    {score/(responses/1000) > 0.8 ? (<div>Super! Twój wynik to {score}/{numberOfQuestion}</div>) : <div>Slabo. Twój wynik to {score}:{responses/1000}</div>}
            </div>
            <button
                className="playBtn"
                onClick={grajPonownie}
            >Graj Ponownie</button>
        </div>
    )
}

export default Result