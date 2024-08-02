import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css"
function Grid({numberOfCards}){
    // console.log(numberOfCards);
    const [turn, setTurn] = useState(true); // true -> O, false-> X
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); // ["","","","","","","","",""]

    function play(index){
        console.log("move played",index);
        if(turn == true){
            board[index] = "O";
        }else{
            board[index] = "X"
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    return (
        <>

        <h1 className="turn-highlight"> Current Turn : {(turn) ? "O" : "X"} </h1>

        <div className="grid">
        {board.map((value, idx) => {
            return <Card onPlay ={play} player={value} key={idx} index={idx}/>              
        })}
        </div>

        </>
    )
}
export default Grid;