import { useState } from "react";

 const LudoBoard = () => {

  const[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
  const[arr,setArr]=useState(["no moves"])

  let updateBlue = ()=>{
    console.log(moves);
    // setMoves((prevMoves)=>{
    //   return {...prevMoves , blue: prevMoves.blue+1}
    // })
    setArr((prevArr)=>[...arr, "blue moves"]);
    console.log(arr);
  };

  return (
    <div>
        <p>Game Begins!</p>
        <p>{arr}</p>
        <div className="board">
            <p>blue : {moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor : "blue"}}>+1</button> 
            <p>yellow {moves.yellow} :</p>
            <button style={{backgroundColor : "yellow"}}>+1</button>
            <p>red : {moves.red}</p>
            <button style={{backgroundColor : "red"}}>+1</button>
            <p>green :{moves.green}</p>
            <button style={{backgroundColor : "green"}}>+1</button>
        </div>
    </div>
  )
}

export default LudoBoard;
