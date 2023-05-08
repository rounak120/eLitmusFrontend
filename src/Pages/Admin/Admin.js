import React, { useState } from 'react';
import './Admin.css'
import { useNavigate } from 'react-router-dom';
function Admin() {
    const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin@gmail.com' && password === 'password') {
      // Login successful
      navigate('./Dashboard')
      console.log('Login successful');
    } else {
      // Login failed
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='adminform'>
      <div className='admindiv'>
        <label htmlFor="email" className='adminlabel'>Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className='admindiv'>
        <label htmlFor="password" className='adminlabel'>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default Admin;
