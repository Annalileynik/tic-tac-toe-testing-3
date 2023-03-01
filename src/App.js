import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import Square from "./components/Square";

const boardStyle = {
    border: "4px double blue",
    width: "600px",
    height: "600px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "auto auto auto",

}

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [gamerX, setGamerX] = useState(true)
    const [winner, setWinner] = useState("")
    const handleMove = (el, index) => {
        if (el === null) {
            const gamer = gamerX ? "X" : "0"
            setBoard(board.map((el, i) =>
                (i === index) ? gamer : el))
            setGamerX(!gamerX)
        }
    }
    useEffect(() => {calculateWinner()}, [board])
    const calculateWinner = () => {
        const winningCombination = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 4, 8],
                [2, 4, 6],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
        ]
        for (let i = 0; i < winningCombination.length; i++) {

            const[a, b, c] = winningCombination[i]

           if (board[a] && board[a] === board[b] && board[c] === board[b])
            setWinner(`${board[a]} won!`)
        }
    }

    return (
        <div className="App view">
            <Header/>
            <div style={boardStyle} >
                {board.map((el, i) =>
                    <Square key={i} el={el} index={i}
                            handleMove={handleMove}/>
                )}
            </div>

        <b className="winner"> {winner}</b>
        </div>
    );
}

export default App;
