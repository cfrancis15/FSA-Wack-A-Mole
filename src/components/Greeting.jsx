import { useState } from "react"
import Game from "./Game"


export default function Greeting(){
    const [isPlaying, setIsPlaying]=useState(false)
    
    if(isPlaying === true){
        return <Game/>
    }


    return(
    <div>
        <h1>Welcome to whack a mole!</h1>
        <button onClick={()=>setIsPlaying(true)}> Click this button to play the game!</button>
    </div>
    )
}