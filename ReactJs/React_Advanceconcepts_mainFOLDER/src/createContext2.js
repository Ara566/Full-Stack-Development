import React from "react";
import { useContext } from "react";
import { context } from "./createContext";

function CreateContext2(){

    let result=useContext(context);

    return(
        <>
            <h1>the final result: {result}</h1>
        </>
    )
}


export default CreateContext2;