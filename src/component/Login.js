import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../../src/assest/loginlog.png';
import './Login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const Spinner = () => (
    <div className="spinner">
      <div className="loading-circle"></div>
    </div>
  );

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Logging in with email:', email, 'and password:', password); 
      
      const response = await axios.post('https://lzycrazy-backend.onrender.com/api/admins/login', {
        email,
        password,
      });
      
      console.log('Login response:', response.data);
      
      if (response.data && response.data.accessToken) {
        const token = response.data.accessToken;
        localStorage.setItem('authToken', token);
        
        setLoggedIn(true);
        setIsLoading(false);

        props.loggedIn();
        navigate('/'); 
        setError(null); 
      } else {
        setError('Invalid Credentials'); 
      }
    } catch (error) {
      console.error('An error occurred during login:', error); 
      setError('An error occurred during login'); 
    }
  };

  if (loggedIn) {
    return <h1>Welcome {email}</h1>; 
  }

  return (
    <div className="login-container">
      <img src={Logo} alt="logo" className="logo" />
      <h3 className="login-heading">Login</h3>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* <button onClick={handleLogin} className="login-button">Login</button> */}
      <button onClick={handleLogin} className="login-button" disabled={isLoading}>
      {isLoading ? <Spinner /> : "Login"}
    </button>

      {error && <div className="error-message">{error}</div>} 
    </div>
  );
}


