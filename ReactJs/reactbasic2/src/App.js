import {React,useEffect,useState} from "react";
import props from "prop-types";

/*  // useState
function App(){
    const [currentstate,setChange]=useState("normal");   //change,setChange 2 attributes

    return(
        <div>
            <button onClick={()=>setChange(!currentstate)}>Click to change</button>
            <h2>initially state will be { currentstate}</h2>

            {(currentstate)?<h1>welcome</h1>:<h1>bye dear</h1>}
        </div>
    )
}
export default App  */



//useEffect


/*
function App(){
    useEffect(()=>{
        console.log("loading messages......")
    });


    
   return(
    <div>
        <h1>welcome......</h1>
    </div>
   )
}

export default App    */



//prop-Type

/*
const Example=((props)=>{
    return(
        <h1>{props.data}</h1>
    )
})

function App(){
    const [change,setChange]=useState(true);

    return(
        <div>
            <button onClick={()=>setChange(!change)}>click me</button>

            {!change? <Example data='welcome.....'></Example>:
                       <Example data='bye.....'></Example>
            }
        </div>
    )
}

export default App


*/


function App(){
    let [count,setCount]=useState(0)


    return(
        <div>

        <h1>number of times you clicked {count} the button</h1>
        <button onClick={()=>setCount(count+1)}>click to increment</button>{' '}
        <button onClick={()=>setCount(count-1)}>click to decrement</button>

        </div>
    )
}

export default App