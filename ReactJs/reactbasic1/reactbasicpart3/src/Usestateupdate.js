import React, { useState } from 'react';


/*
export default function Usestateupdate(){
    let [count,incdnc]=useState(0)

    //2nd part
    let [product,productchange]=useState("mobile")

    return(
        <React.Fragment>
            <h3>button to click increment and decrement {count} times</h3>
            <button onClick={()=>incdnc(++count)} style={{width:40,background:'gray', margin:50}}>+</button>{'\n'}
            <button onClick={()=>incdnc(--count)} style={{width:40,background:'gray', margin:50}}>-</button>
            <br/>
            ..................................................
            this will make difficult if need to update 10 variable so use pass object to useState
            <h4>Product is:{product}</h4>
            
            <input id="typeproduct" type='text'/>
            <button onClick={()=>{
                let proname=document.getElementById("typeproduct").value;
                productchange((prev)=>{    //added prev value
                    return prev+" "+proname;
                })

            }}>Click to change product</button>
            <br/>
            ....................................................


        </React.Fragment>
        
    )


}

*/

//update 10 variable so use pass object to useState
export default function Usestateupdate(){
    let [product,productchange]=useState({
        productname:'mobile',
        productprice:28000
    })


    return(
        <>
        <h3>productname is:{product.productname}</h3>
        <h3>productprice is:{product.productprice}</h3>
        <h3>{JSON.stringify(product)}</h3>


        product name:<input type='text' id="pname"/>
        new price:<input type='text' id="pprice"/>
        <button onClick={()=>{
            let pname=document.getElementById("pname").value;
            let pprice=document.getElementById("pprice").value;
            productchange({
                //productname:pname,
                //productprice:product.productprice
                //or
                ...product,
                productname:pname,    //used change even single value too coding point of view
                productprice:pprice
            })
        }}>Click to change</button>
        </>
    )
}