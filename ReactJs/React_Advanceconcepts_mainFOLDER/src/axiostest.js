import React from "react";
import { useEffect } from "react";
import axios from "axios";
//import { json } from "react-router-dom";



/*
export default function fetchtest(){

    useEffect(
        ()=>{
                samplefetch();
        },[]
    )


async function  samplefetch(){

   let res= await fetch('https://fakestoreapi.com/products/1')
   //Using await pauses the execution of its surrounding async function until the promise is settled
   //no need to use 2 times then keyword, bcz await the promise result is stored in variable res
   let data=await res.json();
    console.log(data)
    }

    return(
        <>
            <h1>API integration with fetch</h1>
        </>
    )
    
}

*/


export default function Axiostest(){

    useEffect(
        ()=>{
                samplefetch();
        },[]
    )



    async function samplefetch(){
        let res=await axios.get('https://fakestoreapi.com/products');
        console.log(res.data)
    }




    return(
        <>
        <h3>api integration using axios</h3>
        </>
    )
    

}