import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];
const GameBoard = ({onSelectSquare , Turns}) => {

   let gameboard = initialGameBoard;
    for(const turn of Turns){
        const {square , player} = turn;
        const {row , col } = square;

        gameboard[row][col] = player;
    }


  return (
    <ol id="game-board">
        {gameboard.map((row,rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((PlayerSymbol,colIndex) => (
                    <li key={colIndex}>
                    <button onClick={()=> onSelectSquare(rowIndex,colIndex)}>{PlayerSymbol}</button>
                    </li>))}
            </ol>
        </li>)}
    </ol>  )
}

export default GameBoard