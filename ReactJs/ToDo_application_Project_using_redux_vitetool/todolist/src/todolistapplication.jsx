import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from './actions';
import Todolists from './TODOLISTS';
//npm i bootstrap redux react-redux

function Todo(){


    let [todotitle,settodotitle]=useState("")


    let dispatch=useDispatch();

    let handletodo=()=>{

        if(todotitle.trim()){
            let newtodo={
                title:todotitle,
            };
            dispatch(addtodo(newtodo));
            settodotitle("");
        }

    }
    return(
        <>
        <div className='container w-50'>
            <h4 className='text-primary '>ToDo Application with Redux and React</h4>
            <div className='text-center input-group'>
                <input type="text" className="form-control  mt-3 me-3"  value={todotitle}
                onChange={(e)=>settodotitle(e.target.value)}/>
                <button className='text-primary mt-3 ' onClick={()=>handletodo()}>Add</button>
            </div>
            <Todolists/>
        </div>
        </>
    )
}

export default Todo;