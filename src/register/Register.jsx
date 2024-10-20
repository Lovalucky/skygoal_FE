import React, { useState } from 'react';
import './register.css';
import { registerUser } from '../services/api';
import logo from '../asserts/images.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await registerUser(formData);
      console.log('Registration response:', response);
      setSuccess('Registration Successfully...');
      setFormData({ username: '', email: '', password: '' });
      navigate('/login');  
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message);
    }
  };
  

  return (
    <div className="registration-container">
       <img src={logo} alt="Logo" className="logo" />
      <h1>Registration Page</h1>
     
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input 
            type="text" 
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <p>
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
