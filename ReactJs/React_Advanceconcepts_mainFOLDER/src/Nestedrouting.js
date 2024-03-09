import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";  //mandatory to import 
{/*An <Outlet> should be used in parent route elements to render their child route elements. 
This allows nested UI to show up when child routes are rendered. 
If the parent route matched exactly,
 it will render a child index route or nothing if there is no index route. */}

export default function Nestedrouting(){
        return(
            <>
                <h2>its nested routing</h2>
                <button><Link to='Locations'>Location</Link></button><br/>
                <button><Link to='Blocks'>Blocks</Link></button>
                <Outlet/>
            </>
        )
}



export function Locations(){
    return(
        <p>under nested its Location</p>
    )
}


export function Blocks(){
    return(
        <p>under nested its blocks</p>
    )
}