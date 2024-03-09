import React,{useState} from "react";
//npm install react-bootstrap bootstra
import 'bootstrap/dist/css/bootstrap.min.css';

function Formhandling() {

    let [email, setEmail] = useState('');    //controlled way
    let [password, setPassword] = useState('')
    //let password=useRef()



    //initally no error
    let [errors,setErrors]=useState({
        email:'',
        password:''
    })

    let emailpattern=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;





    //for email validation
    function handleSubmit() {
        if(email.trim()===""){
            setErrors((errors)=>({...errors,email:"enter email address"}))
        }
        else if(!emailpattern.test(email)){
            setErrors((errors)=>({...errors,email:"enter valid address"}))
        }
        else{
            setErrors((errors)=>({...errors,email:''}))
        }

        //password error handling
        if(password.trim()===""){
            setErrors((errors)=>({...errors,password:"enter password required"}))
        }
        else if(password.length<8){
            setErrors((errors)=>({...errors,password:"password must be 8 or above characters"}))
        }
        else{
            setErrors((errors)=>({...errors,password:''}))
        }

    }


    


    return (
        <React.Fragment>
            <div className="border w-25 mt-5 m-auto p-4">
                <h2 className="text-primary">Login Form</h2>
                <div className="m-3">
                    <label>Email</label>
                    <input type="text" className="form-control" value={email}
                    onChange={(e) =>
                        {
                            setEmail(e.target.value);
                        }} />

                        {errors.email&&<span className="text-danger">{errors.email}</span>}
                </div>

                <div className="m-3">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password}
                    onChange={(e) =>
                        {
                            setPassword(e.target.value);
                        }} />
                        {errors.password&&<span className="text-danger">{errors.password}</span>}
                </div>








                <div className="m-3">
                    <button className="form-control btn btn-primary" onClick={handleSubmit}>login</button>

                </div>
            </div>

        </React.Fragment>
    )

}

export default Formhandling;