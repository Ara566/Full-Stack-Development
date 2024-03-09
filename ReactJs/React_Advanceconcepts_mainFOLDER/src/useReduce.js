/*
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
The useReducer Hook is used to store and update states, just like the useState Hook. 
It accepts a reducer function as its first parameter and the initial state as the second.
useReducer returns an array that holds the current state value and
a dispatch function to which you can pass an action and later invoke it. 

const [state, dispatch] = useReducer(reducerfunction, initialArg, init?)

*/
import React from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from "react";


function counterreduce(prevstate,action){    //here prevstate === counter   action ===whatver we pass
    /*
    if(action.type==='dec') return prevstate-action.payload;
    else if(action.type==='inc') return prevstate+1;
    else if(action.type==='reset') return 0;
    else return prevstate;
    */

    switch(action.type){
        case 'dec' : return prevstate-1;
        case 'inc' : return prevstate+1;
        case 'reset': return 0;
        default: return prevstate;
    }
}

export default function Usereduce(){



    let [counter,dispatch]=useReducer(counterreduce,0)  //here counterreduce is function


    return(
        <>
        <div className="d-flex mt-5 w-10">
            <button className="btn btn-primary m-3 " onClick={
                ()=>{dispatch({type:'dec',payload:3})}
                }>-</button>
            <div className="m-3">Counter:{counter}</div>
            <button className="btn btn-primary m-3" onClick={
                ()=>{dispatch({type:'inc'})}
            }>+</button>

        <button className="btn btn-danger m-3" onClick={
                ()=>{dispatch({type:'reset'})}
            }>Reset</button>
        </div>
        
        </>
    )
}