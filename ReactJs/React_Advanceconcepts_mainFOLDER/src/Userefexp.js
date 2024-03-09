import React from 'react';
import { useRef } from 'react';
/*The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
useRef in React:
1. useRef is a function(Hook). It is only available in functional components.
2. We can refer(access) the dom elements.
3. We can store the data even after component re-renders.
Syntax: let variablename = useRef(intilizevalue); 
Ex: let x = useRef(10);
4. Generally when we assign any value to a normal variable even its updates it will not affect DOM,
 but useRef is not like this. When we try to update it will change that value.
5. We can DOM Manipulations also using useRef Hook.
6. In which element do we have to refer to this the useRefhook value we have to use the "ref" prop in a particular element.
Syntax: <h1 ref={x}>This is first heading</h1>
7. For single elements only we have to use this ref attribute.
8. If we initialize any values (Numbers, strings) in the useRef function
 we can change those values but it will not affect the browser so through the useState hook 
 we can check that changes then we can display them in the browser.
  It means when we use useRef hook it will not rerender the entire component.
9. We can change the elements of inner HTML using the useRef Hook.
10. We can autofocus the input tag in form tags using the useRefhook.
11. We can change the classname, styles usiing useRef Hook.
12. We can work on multiple HTML elements also at a time using the useRefhook.*/


//how getElementById works in JS same like we can create functionality in React using useRef...



/*
export default function Userefexp(){


        let ele=useRef(10)
        //console.log(ele)
        let resultof_useRef=ele.current
    return(
        <div>

        <h1>now i am using useRef</h1>
        <h2>{resultof_useRef}</h2>

        </div>
    )
}

*/


//by using this we can change html content, 
//and result of useRef is used reference to another element,mean manipulate

export default function Userefexp(){


    let result=useRef(null)
    console.log(result.current)
    return(
    <>

    <h1 ref={result} className='active'>now i am using useRef</h1>
    
    <button onClick={()=>{
        console.dir(result.current)
        result.current.innerHTML="yes by using ref html content changed...."
        result.current.classList.toggle('active')
        result.current.classList.toggle('inactive')
      

    }}>click to change</button>
    

    </>
)
}