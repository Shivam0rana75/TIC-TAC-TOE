import { useState } from "react"
const Player = ({name,symbol,isActive}) => {
   
    const[Editing,setEditing] = useState(false);
    const [Pn,setPn] = useState(name);
    const handleClick = ()=>{
        setEditing((editing)=>!editing);
    }
    const handleChange = (event)=>{
        setPn(event.target.value)
    }
  return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {!Editing ? <span className="player-name">{Pn}</span> : <input type="text" value={Pn} onChange={handleChange} /> }
            <span className="player-symbol">{symbol}</span>
        </span> 
    <button onClick={handleClick}>{Editing ? 'Save' : 'Edit'}</button>
  </li>
  )
}

export default Player