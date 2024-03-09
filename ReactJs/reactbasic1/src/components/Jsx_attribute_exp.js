import React from "react";


let number=parseInt(prompt("enter number:"))
function Jsx(){
    
    return(
        <div>
        <h1 id="sampletext" className='text'>Hello</h1>
        Name:<input type="text"/> <br/>

        <label htmlFor='infor'>are you ok</label>
        <input type="checkbox" id='infor'/> {/* this will only pointed only when click checkbox */}
        <br/>


        <>expression evaluation</>
        <h3>I am really good in CS {2*2}times better than my friend</h3>
        <h3>your entered :{number}</h3>
        
        <h4>outside function return sum: {Sumof(10,20)}</h4>
        
        
       
        </div>
    )
}


function Sumof(a,b){
    return a+b
}

export default Jsx;

