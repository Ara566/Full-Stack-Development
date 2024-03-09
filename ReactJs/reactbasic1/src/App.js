
import React from 'react'
//import Jsx from './components/Jsx.js'
//import BasicExample from './components/BasicExample.js';
//import Message from './components/Message';
//import Jsx from './components/Jsx_attribute_exp';
//import { Propsexp } from './components/Propsexp';



//with map() need to create list/array and contain object like structure like json formater
let students=[
    {
        id:1,
        name:'Aravind',
        roll:'520'
    },
    {
        id:2,
        name:'gopi',
        roll:'520'
    },
    {
        id:3,
        name:'srinu',
        roll:'520'
    },
    {
        id:4,
        name:'srilatha',
        roll:'520'
    },
]



//main function
export default function App(){
    return(
        <div className='App'>
{/*
        <Jsx name={'kumar'}/>
        <BasicExample/>
        <Message/>
        <Jsx/>

*/}


        Props utilization and without map and with map
        
{/*props utilization,APP() its parrent components,in parent chaild component going to call
        using props we can share data from parent to chaild and result return here
        without map 
        
*/}


        <Propsexp name1='Aravind' rollnum='520'></Propsexp>
        <Propsexp name1='gopal' rollnum='521'></Propsexp>
        <Propsexp name1='zhdj' rollnum='522'></Propsexp>
        ................................................................................................
       { 
            students.map(
                (i)=>{
                    return <Propsexp key={i.id} id={i.id} name1={i.name} rollnum={i.roll}/>
                }
            )
        }


        </div> 






    );
};
