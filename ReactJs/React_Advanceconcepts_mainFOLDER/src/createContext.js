import React from "react";
import { createContext } from "react";
import CreateContext2 from "./createContext2";


export let context= createContext()
/*
Props Drilling: 
--> To send the props from parent to child, grandchildren components like the entire process called Props drilling.
--> In each level we have to send props data to each component.
--> Where we have to use exactly there we can use it but other than that unnecessarily we are fetching props.
    to overcome this issue we have to use the useContext Hook.
--> We have one method in React which is---->(createContext).
    It returns an object. We have to store this object in one variable.
--> We have to write context. ---->(Provider) method. In that, 
    we have to give the child component name and send the variable using predefined --->(value) property in context. Provider method.
--> In child components where we can utilize this value. 
--> To utilize that value in the child component first we have to export that context object at the top level in the parent component.
--> After that we have to import that context in the child component.
-> Here we have to use the use context hook to utilize context in nested levels then assign it to one variable then we can use the value directly in nested levels.

*/

export default function CreateContext(){

    let result='true'

    return(
        <>
            <context.Provider value={result}>
                <CreateContext2></CreateContext2>
                {/*some component render */}
            </context.Provider>
        </>
    )
}