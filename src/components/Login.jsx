import React, { useState } from 'react';
// import { useAuth } from '../AuthContext';
import './Login.css';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      // Use Firebase Authentication to sign in with email and password
      await auth.signInWithEmailAndPassword(email, password);

      // Handle successful login
      console.log('Login successful');
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        placeholder='Email'
        value={values.email}
        onChange={handleChange}
        // pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        // title='Enter a valid email address'
      />
      <input
        type='password'
        placeholder='Password'
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
