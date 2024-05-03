import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import logo from '../../images/logo.png';
import {
  FormContainer,
  Postinput,
  Posttextarea,
  NavBtn,
  Nav,
  NavItem,
  NavLink,
  NavImg,
  NavBtnLink,
  BtnLink
} from './NewsPostElements';

const NewsPostComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showForm, setShowForm] = useState(false);

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
        setShowForm(false); // Hide the form after successful submission
      } catch (error) {
        console.error('Error posting news:', error);
      }
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Nav>
        <NavImg src={logo} alt="" />
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/post">Blog Page</NavLink>
        </NavItem>
        <NavBtn>
        {/* New Post Logic */}
        <NavBtnLink onClick={toggleForm}>New Post</NavBtnLink>
        </NavBtn>
      </Nav>
      {showForm && (
        <FormContainer>
              <h3 style={{ color: 'white' }}>Upload Post</h3>
          <form onSubmit={handleSubmit}>
            <Postinput
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <Posttextarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              required
            ></Posttextarea>
            <BtnLink type="submit">Post</BtnLink>
          </form>
          </FormContainer>
        )}
        
    </div>
  );
};

export default NewsPostComponent;
