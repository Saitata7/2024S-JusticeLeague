import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin';
import { useState } from 'react';
import ChatPage from './pages/ChatPage';
import PostPage from './pages/PostPage';
import NewsPostDetailsComponent from './components/NewsPostDetailsComponent/NewsPostDetails'
function App() {
  

  return (
    <Router>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<SigninPage />} />
  <Route path="/chat" element={<ChatPage />} />
  <Route path="/post" element={<PostPage />} />
  <Route path="/post/:postId" element={<NewsPostDetailsComponent />} />
</Routes>
    </Router>
  );
}

export default App;