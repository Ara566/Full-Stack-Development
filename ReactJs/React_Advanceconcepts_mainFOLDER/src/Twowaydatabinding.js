import { useState } from "react";
/*
Whatever we store the information or data in another place we have to show that data.
 It is called Data binding.It is 2 types.
1. One-way data binding:
-> We have to show the data in DOM/HTML after storing it in the Js file 
or update the value in js when we update the value in HTML.
2. Two-way data binding:
-> When we update in js it should be effect in html 
or if we update the value in html it should be update in js also.

--> Using the state concept we can achieve the one-way data binding.
--> State concept is compulsory to achieve the one-way data binding.
-> In React by default it is not possible to update the javascript value when we update the value in html.
--> We have to update the state value to achieve two-way data binding.



Update input field will update the Js variable
*/
export default function Twowaydatabinding(){

    let [num,updateState]=useState(520);

    return(
        <>
            <h1>Two way databinding:</h1>
            <h3>product price:{num}</h3>
            <input type="text" onChange={
                (e)=>{
                    let temp=e.target.value
                    updateState(temp)
                }
            }/>
            <button onClick={()=>{
                updateState(600)
            }}>click</button>
        
        </>
    )


}