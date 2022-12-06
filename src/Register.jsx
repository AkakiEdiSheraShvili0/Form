import React from 'react'
import { ReactDOM } from 'react';
import { useState } from 'react';
import './App.css'

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        alert('your name is ' + name)
        alert('your email is ' + email)
        alert('your password is ' + pass)
    }

  return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    name='name' 
                    id='name' 
                    placeholder='Fullname' 
                />
                <label htmlFor="email">Email</label>
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
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        
        </div>
        
  )
}


export default Register;
