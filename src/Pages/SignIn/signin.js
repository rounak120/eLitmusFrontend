import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Home from "../Home/Home";
import Admin from "../Admin/Admin";
import './signin.css'
function SignIn(){
    const navigate=useNavigate()
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
    const Admin = () =>{
        navigate('/Admin')
    }

return (
    <div>
        
        {value?<Home/>:
        <div className="signinpage">
        <img  src="https://rare-gallery.com/uploads/posts/864784-Candy-Treasure-chest-coffer-Jug-container.jpg" alt="treasure image"/>
            <div className="heading" >
                <button  className="Adminbutton" onClick={Admin}>Admin Login</button>
                <h1>Welcome to Treasure Hunt!!</h1>
                <button className="button" onClick={handleClick}>Signin With Google</button>
            </div>
        </div>
        
        }
    </div>
);
}
export default SignIn;