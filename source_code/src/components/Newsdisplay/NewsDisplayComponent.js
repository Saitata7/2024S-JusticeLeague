import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const NewsDisplayComponent = () => {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, 'news'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNewsPosts(posts);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>News Posts</h3>
      <div className="news-grid">
        {newsPosts.map((post) => (
          <div key={post.id} className="news-card">
            <Link to={`/post/${post.id}`}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsDisplayComponent;