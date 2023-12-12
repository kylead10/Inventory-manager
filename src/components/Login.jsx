// Login.js
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import './Login.css';

const Login = () => {
  const { signInWithPopup } = useAuth(); // Assuming you have a signInWithPopup function in your AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Use your authentication method here, for example, signInWithPopup
      await signInWithPopup();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        title='Enter a valid email address'
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
