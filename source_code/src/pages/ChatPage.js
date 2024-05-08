import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { ref, onChildAdded } from 'firebase/database';
import { database } from '../components/firebase/config';
import { Navbar } from './../components/navbar';
import { Sidebar } from './../components/sidebar';
import ChatComponent from '../components/chatcomponent/ChatComponent';
import './Chatdesign.css';

const ChatPage = () => {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const usersRef = ref(database, 'users');
    const unsubscribe = onChildAdded(usersRef, (snapshot) => {
      const userId = snapshot.key;
      const userData = snapshot.val();
      const userEmail = userData.email;

      if (userId !== user.uid) {
        setUsers((prevUsers) => [{ id: userId, email: userEmail }, ...prevUsers]);
      }
    });

    return () => unsubscribe();
  }, [user]);

  const handleSelectUser = (selectedUser) => {
    setSelectedUser(selectedUser);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h2>Chat</h2>
      <h2>Select a user to  a conversation.</h2>
      <center><h2>Choose a user to start conversation.</h2></center>
      <div className="user-search">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} onClick={() => handleSelectUser(user)}>
                <td>{user.email}</td>
                <td><button>Select</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chat-container">
        {selectedUser && (
          <ChatComponent user={user} selectedUser={selectedUser} />
        ) 
        
       }
      </div>
    </div>
  );
};

export default ChatPage;
