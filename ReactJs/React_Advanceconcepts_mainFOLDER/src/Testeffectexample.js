import React from "react";
import { useEffect } from "react";

//implementing useEffect in 3 ways
function Testeffectexample(){

    useEffect(()=>{
        console.log("inside UseEffect")
    })


        return(
            <>
                <h1>open console and see after rendering ,useEffect displaying info or not</h1>
                {console.log("inside component")}
                {/* actually when there is no defendencies for rendering Component every time
                 CALL the UseEffect method*/}
            </>
        )
}
export default Testeffectexample