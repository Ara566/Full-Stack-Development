import React from "react"
import PropType from "prop-types"     //must import PropType
/*
npm install prop-types
PropTypes serves as the method you can use to ensure the correct datatype is passed for each prop,
*/

export default function Proptypeexample(){

    return <Chaildcomp name={10}/>
}



function Chaildcomp(props){

    return(
        <>
        <h2>hello {props.name}</h2>
        </>
    )
}


Chaildcomp.PropType={
    name:PropType.string
}


