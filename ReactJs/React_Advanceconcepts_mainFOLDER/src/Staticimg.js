import React from "react";
import demoimg from "./demo.jpeg"; //if import from within same folder use ./


export default function Staticimg(){


    return(
        <>
        <img src="/sample.jpeg" alt="this is img"></img>  {/*its from public */}

        <img src={demoimg} alt="this is img" width="40%" height="40%"></img>   
        </>
    )
}