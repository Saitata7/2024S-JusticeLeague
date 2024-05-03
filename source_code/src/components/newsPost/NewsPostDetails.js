import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import logo from '../../images/logo.png';
import {
  PostContainer,
  PostTitle,
  PostContent,
  Nav,
  NavItem,
  NavLink,
  NavImg,
  CommentsContainer,
  CommentText,
  CommentAuthor,
  CommentInput,
  CommentWrapper,
  SubmitButton
} from './NewsPostElements';

const NewsPostDetailsComponent = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const db = getFirestore();

    // Fetch the post details
    const postRef = doc(db, 'news', postId);
    getDoc(postRef).then((snapshot) => {
      if (snapshot.exists()) {
        setPost({ id: snapshot.id, ...snapshot.data() });
      }
    });

    // Fetch the comments for the post
    const commentsRef = collection(db, 'news', postId, 'comments');
    const q = query(commentsRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, [postId]);

  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      const db = getFirestore();
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const commentsRef = collection(db, 'news', postId, 'comments');
        addDoc(commentsRef, {
          text: commentText,
          author: user.email,
          timestamp: new Date(),
        })
          .then(() => {
            setCommentText('');
          })
          .catch((error) => {
            console.error('Error adding comment: ', error);
          });
      }
    }
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
      </Nav>

      {/* Comment Logic */}
    <PostContainer>
      {post ? (
        <div>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          <div>
            <CommentInput
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
            />
            <SubmitButton onClick={handleCommentSubmit}>Submit Comment</SubmitButton>
          </div>
          <h4 style={{ marginTop: '10px' }}>Comments:</h4>
          <CommentsContainer>
            {comments.map((comment) => (
              <CommentWrapper key={comment.id}>
                <CommentAuthor>By: {comment.author}</CommentAuthor>
                <CommentText>{comment.text}</CommentText>
              </CommentWrapper>
            ))}
          </CommentsContainer>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </PostContainer>
    </div>
  );
};

export default NewsPostDetailsComponent;