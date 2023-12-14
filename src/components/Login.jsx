import React, { useState } from 'react';
// import { useAuth } from '../AuthContext';
import './Login.css';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    validation(values);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type='text'
        name='email'
        placeholder='Email'
        value={values.email}
        onChange={handleChange}
        // pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        // title='Enter a valid email address'
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={values.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
