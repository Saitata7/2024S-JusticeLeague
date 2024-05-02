import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onChildAdded, push } from 'firebase/database';
import {
  ChatContainer,
  ChatMessages,
  ChatInputContainer,
  ChatInput,
  ChatButton
} from "./chatElement";

const ChatComponent = ({ user, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setMessages([])
    if (user && selectedUser) {
      const db = getDatabase();
      const senderMessagesRef = ref(db, `messages/${user.uid}/${selectedUser.id}`);
      const receiverMessagesRef = ref(db, `messages/${selectedUser.id}/${user.uid}`);

      const unsubscribeSender = onChildAdded(senderMessagesRef, (snapshot) => {
        const message = snapshot.val();
        // Add a flag to differentiate sender's messages
        message.senderIsUser = true;
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      const unsubscribeReceiver = onChildAdded(receiverMessagesRef, (snapshot) => {
        const message = snapshot.val();
        // Add a flag to differentiate receiver's messages
        message.senderIsUser = false;
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        unsubscribeSender();
        unsubscribeReceiver();
      };
    }
  }, [user, selectedUser]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && user && selectedUser) {
      const db = getDatabase();
      const messagesRef = ref(db, `messages/${user.uid}/${selectedUser.id}`);

      const newMessageData = {
        text: newMessage,
        senderId: user.uid,
        timestamp: Date.now(),
      };

      push(messagesRef, newMessageData)
        .then(() => {
          setNewMessage('');
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    }
  };

  return (
    <ChatContainer>
      <h3>Chat with {selectedUser.email}</h3>
      <ChatMessages>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.senderIsUser ? 'You' : selectedUser.email}</strong>: {message.text}
          </div>
        ))}
       </ChatMessages>
      <ChatInputContainer>
        <ChatInput
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <ChatButton onClick={handleSendMessage}>Send</ChatButton>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default ChatComponent;
