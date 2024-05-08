import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { ref, onChildAdded } from 'firebase/database';
import { database } from '../components/firebase/config';
import UserSearch from '../components/usersearch/UserSearch';
import { Navbar } from './../components/navbar';
import { Sidebar } from './../components/sidebar';
import ChatComponent from '../components/chatcomponent/ChatComponent';
import styled from 'styled-components';
const ChatPageContainer = styled.div`
display: flex;
height: calc(100vh - 60px); 
margin-top: 60px;
`;



const UserSearchContainer = styled.div`
width: 300px;
padding: 20px;
background-color: #f0f0f0;
overflow-y: auto;
`;

const ChatContainer = styled.div`
flex: 1;
padding: 20px;
`;

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
    <ChatPageContainer>
      <UserSearchContainer>
        <UserSearch users={users} onSelectUser={handleSelectUser} />
      </UserSearchContainer>
      <ChatContainer>
        {selectedUser ? (
          <ChatComponent user={user} selectedUser={selectedUser} />
        ) : (
          <p>Select a user to start chatting.</p>
        )}
      </ChatContainer>
    </ChatPageContainer>
  </div>
);

};

export default ChatPage;
