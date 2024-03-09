/*

Overall topic:
1. Redux is a Javascript library.
2. This is mainly used for state management of whole application.
3. We have 4 terms here for Redux.
---> Store: Mentain data
---> Reducer: Manipulations of state logic function based upon action.
---> Dispatch: It is a function we have to send input data.
---> Action: We are sending the input through the dispatch function.


how to install?   npm install redux

used for complex data like objects and array

*/

import React from "react";
import { createStore } from "redux";   // by using createStore we can map reducer fun and objects


let initialstate={
    balance:0,
    fullname:"",
    mobile:null
};

function Reducerfun(prev=initialstate,action){    //action or input
    if(action.type==='deposite') 
        return {...prev,balance:prev.balance+action.payload}
    else 
        return prev 

}

let store=createStore(Reducerfun)
console.log(store.getState())
store.dispatch({type:'deposite',payload:20000});

console.log(store.getState())
store.dispatch({type:'deposite',payload:10000});
console.log(store.getState())