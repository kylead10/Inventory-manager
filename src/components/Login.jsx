import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, set a dummy authentication status
    const isAuthenticated = true;
    if (isAuthenticated) {
      history.push('/');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
