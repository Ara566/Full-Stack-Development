
export default function Conditionalrendering(){

    let login=false;
    let homeactive=true;
    return(
        <>
            <div>
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Details</li>
                    {
                        login?<li>login</li>:<li>logout</li>
                    }
                </ul>
            </div>
            {
                homeactive&&<Home/>
            }
                    
        </>

    )
}

function Home(){
    return(
        <>
        <h1>this is admin page</h1>
        </>
    )
}