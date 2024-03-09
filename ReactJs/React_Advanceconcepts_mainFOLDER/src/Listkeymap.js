import React from "react";


/*
export default function Listkeymap(){
//Warning: Each child in a list should have a unique "key" prop.so
   let list=[1,2,3,4,5]   

    return(
        <>
        {
            list.map((e,index)=><li key={index}>{e}</li>)
        }
        </>
    )
}

*/


export default function Listkeymap(){
    //Warning: Each child in a list should have a unique "key" prop.so
       let list=[{id:1,name:"aravind"},{id:4,name:"durga"},{id:2,name:"Krishna"},{id:3,name:"Anji"}]   
     
        return(
            <>
        
            {
                list.map(
                    (e)=><li key={e.id}>{e.name}</li>
                    )
            }
            </>
        )
    }