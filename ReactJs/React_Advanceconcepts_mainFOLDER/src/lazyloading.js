/*Whenever we required a particular component at that time only we have to load in DOM.
This concept is called Lazy loading.
We can implement lazyloading in 2 ways.
1. Conditional rendering
2. With routing



//React Suspense allows you to postpone rendering until the data is available,  */

import React, { useState } from "react";
//import Formexample from "./Formhandling";      its directly rendered so need lazy import
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy ,Suspense} from "react";

let Formexample=lazy(  ()=> import('./Formhandling'))





export default function Lazyloadingexp(){

    let [show,setShow]=useState(false)    //if show true then only show the conetent


    return(
        <>
        <div className="text-center">
            <h2 className="mt-2 p-2 text-primary">Lazy Loading Example</h2>
            <button className="btn btn-info text-center"
            onClick={
                ()=>{
                    setShow(true)
                }
            }>click to login</button>
            
        </div>


        {
            show===true&&(
                <Suspense>
                    <Formexample/>
                </Suspense>
            )
        }
        </>
    )
}