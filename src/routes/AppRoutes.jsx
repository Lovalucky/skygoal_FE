// src/routes/AppRoutes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="" element={<Login/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
