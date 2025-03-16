import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: '', email: '', password: '', cpassword: '' });
  let navigate = useNavigate();
  const host = "https://i-notebook-project-backend.onrender.com"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      //Save the authtoken and redirect
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Account Created Successfully", "success")
      navigate('/');
    }
    else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

const [passwordshow, setPasswordshow] = useState('password');
const showhide = () => {
  if(passwordshow==='password'){
 setPasswordshow('text');
  
}else{
 setPasswordshow('password');
}
}
  return (
    <div className='container mt-2'>
<h2 className='my-2'>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="name" className="form-label"><FaUser /> Username</label>
          <input type="name" className="form-control" name='name' id="name" onChange={onChange} value={credentials.name} aria-describedby="name" />  
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label"><MdEmail size={18}/> Email</label>
          <input type="email" className="form-control" name='email' id="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
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
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label"><MdOutlineWifiPassword size={18}/> Confirm Password</label>
          <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} value={credentials.cpassword} minLength={5} required />
        </div>
        <button type="submit" className="btn btn-primary" style={{width:'100px'}}>Submit</button>
      </form>
    </div>
  )
}

export default Signup;
