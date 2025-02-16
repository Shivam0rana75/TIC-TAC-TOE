import Player from "../components/Player";
import { useState, useEffect } from "react";
import GameBoard from "../components/GameBoard";
import Log from "../components/Log";
import { winningConditions } from "./winning-combinations";

function App() {
    const [gameTurn, setgameTurn] = useState([]);
    const [activePlayer, setactivePlayer] = useState('O');
    const [winner, setWinner] = useState(null);

    // Initialize a 3x3 game board based on the turns
    const gameboard = Array(3).fill(null).map(() => Array(3).fill(null));

    for (const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;
        gameboard[row][col] = player;
    }

    // Check for a winner
    useEffect(() => {
        for (const combination of winningConditions) {
            const first = gameboard[combination[0].row][combination[0].column];
            const second = gameboard[combination[1].row][combination[1].column];
            const third = gameboard[combination[2].row][combination[2].column];

            if (first && first === second && first === third) {
                setWinner(first);
                return;
            }
        }
    }, [gameTurn]); // Runs when gameTurn updates

    function handleSelectSquare(rowIndex, colIndex) {
        if (winner || gameboard[rowIndex][colIndex] !== null) return; // Prevent moves after win

        setgameTurn(prevTurns => {
            return [{ 
                square: { row: rowIndex, col: colIndex }, 
                player: activePlayer 
            }, ...prevTurns];
        });

        setactivePlayer(activePlayer === 'O' ? 'X' : 'O');
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="PLAYER 1" symbol="O" isActive={activePlayer === 'O'} />
                    <Player name="PLAYER 2" symbol="X" isActive={activePlayer === 'X'} />
                </ol>
                {winner && <p className="winner-message">🎉 {winner} Wins! 🎉</p>}
                <GameBoard onSelectSquare={handleSelectSquare} board={gameboard} />
            </div>
            <Log Turns={gameTurn} />
        </main>
    );
}

export default App;