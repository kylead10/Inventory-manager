import React, { useState } from 'react';
import './Login.css';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const { login } = useAuth(); // Destructure the login function from the useAuth hook

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({}); // Clear errors on input change
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Call the login function from the useAuth hook
    try {
      login(values.email, values.password);
      console.log('Login successful');
      navigate('/create-inventory');
    } catch (error) {
      setErrors({ general: 'Invalid email or password' });
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <button type='submit'>Login</button>
      </form>
      {errors.general && <p style={{ color: 'red' }}>{errors.general}</p>}
    </div>
  );
};

export default Login;
