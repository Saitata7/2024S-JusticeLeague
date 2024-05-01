import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <h4>Comments:</h4>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <p>By: {comment.author}</p>
            </div>
          ))}
          <div>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
            />
            <button onClick={handleCommentSubmit}>Submit Comment</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsPostDetailsComponent;