import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    let navigate = useNavigate();
    const host = "https://i-notebook-project-backend.onrender.com"

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //Save the authtoken and redirect
            localStorage.setItem('token', json.authtoken);
           navigate('/');
           props.showAlert("Logged in successfully", "success")
 }
        else{
          props.showAlert("Invalid Details", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const [passwordshow, setPasswordshow] = useState('password');
    const showhide = () =>{
        if(passwordshow==='password'){
            setPasswordshow('text');
        }else{
            setPasswordshow('password');
        }
    }

    return (
        <div className='mt-3'>
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit} className='my-3'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><MdEmail size={18}/> Email</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                 <div className=" mb-3">
                         <label htmlFor="password" className="form-label"><FaLock /> Password</label>
                         <div className='d-flex '>
                         <input type={passwordshow} className="form-control" name='password' id="password"  onChange={onChange} value={credentials.password} minLength={5} required  /> 
                         <button type="button" className="btn showhide bg-primary text-white ms-2" onClick={showhide}> {passwordshow==="password" ? <IoIosEye size={18}/> : <FaEyeSlash size={18}/>}</button>
                         </div>
                         <div id="passwordHelp" className="form-text">We'll never share your password with anyone else.</div>
                       </div>
                <button type="submit" className="btn btn-primary" style={{width:'100px'}}>Submit</button>
            </form>
        </div>
    )
}

export default Login;
