import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();


  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/');
    }
  },[]);
  const handleLogin = async()=>{
    let result =await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.log(result);
    
    if(result.name){
      localStorage.setItem("user", JSON.stringify(result));
      navigate('/');
    }else{
      alert("Please enter connect details")
    }
  }
  return (
    <div className='login'>
        <h2>Login</h2>
        <input onChange={(e) => setEmail(e.target.value)} value={email} className='inputBox' type="text"  placeholder='Enter email'/>
        <input onChange={(e) => setPassword(e.target.value)} value={password} className='inputBox' type="text"  placeholder='Enter Password'
         
          />
          <button  onClick={handleLogin} className='signButton'>LOGIN</button>
        
    </div>
  )
}

export default Login