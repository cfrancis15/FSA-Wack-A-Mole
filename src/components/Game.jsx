import { useState } from "react"
import '../index.css'



export default function Game() {


    let [score, setScore] = useState(0)

    //hole states
    let [moleIndex, setMoleIndex] = useState(1)



    function generateMoleIndexNumber() {
        setMoleIndex(moleIndex = Math.floor(Math.random() * 9) + 1)
        console.log(moleIndex)
    }

    function removeMoleIndexNumber() {
        setMoleIndex(moleIndex = null)
    }



    function addScore() {
        setScore(score += 1)
    }

    function moleDisplayFunction(i) {
        if (i === moleIndex) {
            return (
                <div key={i} onClick={() => { addScore(); removeMoleIndexNumber(); generateMoleIndexNumber(); }}>
                    <img src="/mole.png" alt="Mole" />
                </div>
            );
        }
        return (
            <div key={i}>
                <img src="/hole.png" alt="Hole" />
            </div>
        );
    }



    return (
        <>
            <h1>Time to play!</h1>
            <h4>Score: {score}</h4>
            <button onClick={() => {
                location.reload()
            }}>Restart</button>



            <div className="board">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                    return moleDisplayFunction(i)
                })}
            </div>







        </>

    )
}