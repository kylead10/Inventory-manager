import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if email and password meet your criteria for a valid combination
    if (isValidCombination(email, password)) {
      // Successful login, you can add your login logic here
      console.log('Login successful');
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  const isValidCombination = (enteredEmail, enteredPassword) => {
    // Implement your validation logic here
    // For example, you might check against a predefined email and password
    const validEmail = 'example@email.com';
    const validPassword = 'password123';

    return enteredEmail === validEmail && enteredPassword === validPassword;
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
