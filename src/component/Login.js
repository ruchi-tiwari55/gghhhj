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
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log('Logging in with email:', email, 'and password:', password); // Logging email and password
      
      const response = await axios.post('https://lzycrazy-backend.onrender.com/api/admins/login', {
        email,
        password,
      });
      
      console.log('Login response:', response.data);
      
      if (response.data && response.data.accessToken) {
        const token = response.data.accessToken;
        localStorage.setItem('authToken', token);
        
        setLoggedIn(true);
        props.loggedIn();
        navigate('/'); // Redirect to home page
        setError(null); // Clear previous errors if any
      } else {
        setError('Invalid Credentials'); // Display error message
      }
    } catch (error) {
      console.error('An error occurred during login:', error); // Log error details
      setError('An error occurred during login'); // Display error message
    }
  };

  if (loggedIn) {
    return <h1>Welcome {email}</h1>; // Show a welcome message if logged in
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
      <button onClick={handleLogin} className="login-button">Login</button>

      {error && <div className="error-message">{error}</div>} {/* Display the error message */}
    </div>
  );
}
