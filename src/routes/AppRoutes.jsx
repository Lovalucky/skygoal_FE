
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';
import Users from '../users/Users';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="" element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="users" element={<Users/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
