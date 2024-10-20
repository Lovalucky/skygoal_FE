import React, { useState } from 'react';
import logo from '../asserts/images.png';
import './login.css';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); 
  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await login(formData);  
      console.log('Login response:', response);
      setSuccess('Login Successfully...');
      setFormData({ email: '', password: '' });

      navigate('/users');  
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || err.message);  
    }
  };

  return (
    <div className="registration-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>  
        <div>
          <label htmlFor='email'>Email</label>
          <input 
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            type="password" 
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
}

export default Login;
