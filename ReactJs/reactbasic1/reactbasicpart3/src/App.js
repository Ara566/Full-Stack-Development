
//import Usestateupdate from "./Usestateupdate";
import { useState } from "react";
import React from "react";
//import "./App.css";



export default function App() {


  let [count,incdec]=useState(0)
  let stock=10


  return(

    <div>

    <h3 id='abc'>Counter App to Increment and Decrement stock</h3>

    <div className="App">
        <button id='b1' disabled={count===0} onClick={()=>{
          if(count>0){
            incdec(count-1)
          }
        }}>-</button>
        <p>{count}</p>
        <button id='b2' disabled={count===stock} onClick={()=>{
          if(count<stock){
            incdec(count+1)
          }
        }}>+</button>
    </div>
  </div>
  );

}





