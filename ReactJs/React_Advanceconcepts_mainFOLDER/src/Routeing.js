/* 
for implementing Routing we need to
1)npm install react-router-dom
2)configure Routes
3)create navigation links

*/



import React from "react";
//i used all pges within single file ,,else need to import
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";  //import necessary components
//implemented nested routing
import Nestedrouting,{ Locations,Blocks } from "./Nestedrouting";

/*
here i also implemented Route parameters on logout component*/
import { useLocation, useParams } from "react-router-dom";


function Header(){
    return(
        <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Contact">Contact</Link></li>
            <li><Link to="Logout">Logout</Link></li>   
            <li><Link to="Nested">Nested</Link>
            </li>
        </ul>
        </>
    )
}



function Routeing(){
        return(
            <>
                <h4>outside BrowserRouter this line Common to all pages</h4>
                <BrowserRouter>
                <h4>outside Routes this line common to all pages</h4>
                <Header/>
                    <Routes>
                        {/*only inside Routes path based component change */}
                        <Route path="/" element={<Home/>}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/Contact" element={<Contact/>}/>
                        <Route path="/Logout/:id/:name" element={<Logout/>}/>
                        <Route path="/Nested" element={<Nestedrouting/>}>
                            <Route path="Locations" element={<Locations/>}/>
                            <Route path="Blocks" element={<Blocks/>}/>
                        </Route>
                        <Route path="*" element={<Errorpage/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        )

}

export default Routeing

function Home(){
    return(
        <h1>this is Home page</h1>
    )
}

function About(){
    return(
        <h1>this is about my company</h1>
    )
}

function Contact(){
    return(
        <h1>Contact us +91 939021575636363</h1>
    )
}


function Errorpage(){
    return(
        <>
        <h5>page not found...408 error</h5>
        </>
    )
}






//useParams hook for Route param
//useLocation hook for query param

//bcz of route param something modified actual routing .....if you enter id then only render data
function Logout(){

    //let Routeparam=useParams()
    //console.log(Routeparam)

    let {id,name}=useParams();

    return(

       <>
        <h1>ho noo your logouted</h1>

        <h5>here Route param implemented</h5>
        <h5>id is:{id}</h5>
        <h5>name is:{name}</h5>
       </>
    )
}
