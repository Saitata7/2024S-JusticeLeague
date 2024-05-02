import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ButtonBasic } from "../ButtonElements";
import axios from 'axios';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { auth } from "../../firebase/config";
const TextareaContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  background-color: white;
  max-height: 200px; /* Adjust this value to set the maximum height */
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  overflow-y: auto; /* Add vertical scrollbar when content exceeds max-height */
`;

const GrowingTextarea = () => {
  const [value, setValue] = useState('');
  const [response, setResponse] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    adjustHeight();
  }, [value]);

  const adjustHeight = () => {
    if (textareaRef.current) {
      // Reset the height to auto to calculate the correct scrollHeight
      textareaRef.current.style.height = 'auto';
      // Set the height to the scrollHeight, capped at the maximum height
      const maxHeight = 200; // Adjust this value to set the maximum height
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px`;
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendDataToServer = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/process', { data: value });
      setResponse(response.data); 
      const db = getFirestore();
      const historyCollection = collection(db, 'history');

      await addDoc(historyCollection, {
        userId: auth.currentUser.uid,
        username: auth.currentUser.email,
        date: new Date().toISOString().slice(0, 10), // Format the date as 'YYYY-MM-DD'
        content: value,
        isTrue: response.data === 'This is an Actual News', // Adjust this based on the actual response format
      });
      console.log('History data stored successfully');
    } catch (error) {
      console.error('Error sending data to server:', error);
      setResponse('Error sending data to server');
    }
  };
 

  return (
    <div>
      <TextareaContainer>
        <Textarea value={value} onChange={handleChange} ref={textareaRef} rows={1} />
      </TextareaContainer>
      <div style={{ marginTop: '6px' }}>
        <ButtonBasic to="" primary="true" dark="true" className="mx-auto" onClick={sendDataToServer}>
          Verify News
        </ButtonBasic>
      </div>
      {response && (
        <div style={{ marginTop: '16px', fontWeight: 'bold',color:'white' }}>
           Result: {response}
        </div>
      )}
    </div>
  );
};

export default GrowingTextarea;