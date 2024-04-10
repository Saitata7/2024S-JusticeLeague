import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin';
import { useState } from 'react';
import ChatPage from './pages/ChatPage';

function App() {
  

  return (
    <Router>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<SigninPage />} />
  <Route path="/chat" element={<ChatPage />} />
</Routes>
    </Router>
  );
}

export default App;