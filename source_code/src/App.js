import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin';
import ChatPage from './pages/ChatPage';
import PostPage from './pages/PostPage';
import NewsPostDetailsComponent from './components/newsPost/NewsPostDetails'
import History from './pages/history';

function App() {
  

  return (
    <Router>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<SigninPage />} />
  <Route path="/chat" element={<ChatPage />} />
  <Route path="/post" element={<PostPage />} />
  <Route path="/post/:postId" element={<NewsPostDetailsComponent />} />
  <Route path="/history" element={<History />} />
</Routes>
    </Router>
  );
}

export default App;