
import React, { useState } from 'react'

import './App.css'


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        alert('your email is ' + email)
        alert('your email is ' + pass) 
    }

  return (
    <div className='auth-form-container'>
        <form className='login-form' onSubmit={handleSubmit}>
            <label  htmlFor="email">Email</label>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder='youremail@gmail.com' 
                id='email' 
                name='email'
            />
            <label htmlFor="password">Password</label>
            <input 
                onChange={(e) => setPass(e.target.value)}
                value={pass} 
                type="password" 
                placeholder='********' 
                id='password' 
                name='password'
            />
            <button type="submit">
                LOG In
            </button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
    
  )
}

export default Login;
