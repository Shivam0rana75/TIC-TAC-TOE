import React from 'react'

const Log = ({Turns}) => {
  return (
    <ol id="log">
       { Turns.map(turn => <li key={`${turn.square.row} ${turn.square.col}`}>
        {turn.player} selected {turn.square.row} , {turn.square.col}  </li>)}
    </ol>        
)
}

export default Log