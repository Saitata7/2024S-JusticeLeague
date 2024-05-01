import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const NewsPostComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const newsData = {
        title,
        content,
        userId: user.uid,
        timestamp: new Date(),
      };

      try {
        const docRef = await addDoc(collection(db, 'news'), newsData);
        console.log('News posted successfully with ID:', docRef.id);
        
        // Retrieve the list of users and send email notifications
        // Code for retrieving users and sending emails goes here
        
        setTitle('');
        setContent('');
      } catch (error) {
        console.error('Error posting news:', error);
      }
    }
  };

  return (
    <div>
      <h3>Post News</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewsPostComponent;