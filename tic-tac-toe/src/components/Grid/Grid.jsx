import { useState } from "react";
import Card from "../Card/Card";
import { ToastContainer, toast } from 'react-toastify';
import isWinner from "../../helper/checkWinner";

import "./Grid.css"
import 'react-toastify/dist/ReactToastify.css';

function Grid({numberOfCards}){
    // console.log(numberOfCards);
    const [turn, setTurn] = useState(true); // true -> O, false-> X
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); // ["","","","","","","","",""]
    const [winner, setWinner]  = useState(null);

    function play(index){
        console.log("move played",index);
        if(turn == true){
            board[index] = "O";
        }else{
            board[index] = "X"
        }
        const win = isWinner(board, turn ? "O" : "X")
        console.log("Winner is : ", win);
        if (win) {
            setWinner(win);
            toast.success(`Congratulations! 🥳 ${win} wins the Game.`);
        }
        
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setTurn(true);
        setWinner(null);
    }

    return (
        <div className="grid-wrapper">
        
        {winner && (
            <>
            <h1 className="turn-highlight">Winner is {winner}</h1>
            <button className="reset" onClick={reset}>Reset Game</button>
            {/* <ToastContainer position="top-center"/> */}
            </>
            )}
        <h1 className="turn-highlight"> Current Turn : {(turn) ? "O" : "X"} </h1>

        <div className="grid">
        {board.map((value, idx) => {
            return <Card gameEnd ={winner ? true : false} onPlay ={play} player={value} key={idx} index={idx}/>              
        })}
        </div>

        </div>
    )
}
export default Grid;