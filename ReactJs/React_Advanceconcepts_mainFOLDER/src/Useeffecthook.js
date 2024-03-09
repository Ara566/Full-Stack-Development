/*
useEffect() hook:
--> hook means one method
--> without useeffect also we can continue our work if it will use then we can resolve the issues
   a. Fetch data using api
   b. Any changes need to do in component after loading component
   c. To remove component from DOM
   d. To add event in dom
--> Syntax: useEffect(callback, [dependcies(optional)])
-> We have to import useEffect from React library.
--> Here useEffect will work in 3 types.
1. If second arugument will empty every time component will render automatically this use effect will call.
2. If second argument will have empty array only one time will appear after the component render.
3. If second argument will have a property in array then depend upon that particular value update the use effect will call.


The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)
*/

import { useEffect,useState} from "react";

export default function Useeffecthook(){

    let [count,setCount]=useState(0);


    useEffect(()=>{
        setInterval(()=>{
            setCount(count-1);
        },1000)
    })

    return(
        <>
            <h2>The count is incremented {count} times</h2>
        </>
    )
}



//for better understand refer Testeffect file



