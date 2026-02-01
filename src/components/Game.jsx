import { useState } from "react"



export default function Game(){

    
    let [score, setScore] = useState(0)

    function addScore(){
        setScore(score+=1)
    }

    return(
        <>
        <h1>Game goes here</h1>
        <button onClick={()=>addScore()}>Add 1</button>
        <p>{score}</p>
    </>
    
)
}