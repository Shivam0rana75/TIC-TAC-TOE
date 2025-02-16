import Player from "../components/Player";
import { useState } from "react";
import GameBoard from "../components/GameBoard";
import Log from "../components/Log";
function App() {
    const [gameTurn, setgameTurn] = useState([]);
    const [activePlayer, setactivePlayer] = useState('O');

    function handleSelectSquare(rowIndex, colIndex) {
        setgameTurn(prevTurns => {
            const updatedTurns = [{ 
                square: { row: rowIndex, col: colIndex }, 
                player: activePlayer 
            }, ...prevTurns];

            return updatedTurns;
        });

        setactivePlayer(activePlayer === 'O' ? 'X' : 'O'); // ✅ Correctly switch players
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name="PLAYER 1" symbol="O" isActive={activePlayer === 'O'} />
                    <Player name="PLAYER 2" symbol="X" isActive={activePlayer === 'X'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} Turns={gameTurn} />
            </div>
            <Log  Turns= {gameTurn}  />
        </main>
    );
}

export default App;
