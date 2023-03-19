import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SingUp.css"

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() =>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }

  },[])
  

  const getData = async() =>{
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/users",{
      method: 'POST',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    // data store to local storage
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/")
  }
  return (
    <>
     
      <div className='register'>
          <h2>Register</h2>
          <input className='inputBox' type="text"  placeholder='Enter Name'
          value={name} onChange={(e) => setName(e.target.value)}
          />
          <input className='inputBox' type="text"  placeholder='Enter Email'
          value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <input className='inputBox' type="text"  placeholder='Enter Password'
          value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={getData} className='signButton'>Sign Up</button>
      </div>
    </>

  )
}

export default SignUp