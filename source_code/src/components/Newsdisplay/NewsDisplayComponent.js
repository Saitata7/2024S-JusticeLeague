import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { NewsContainer, NewsTitle, NewsGrid, NewsCard, NewsLink, NewsTitleText, NewsContent, CommentsContainer, CommentsIcon, CommentsText } from './NewsDisplayElements';

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
    <NewsContainer>
      <NewsTitle>News Posts</NewsTitle>
      <NewsGrid>
        {newsPosts.map((post) => (
          <NewsCard key={post.id}>
            <NewsLink to={`/post/${post.id}`}>
              <NewsTitleText>{post.title}</NewsTitleText>
              <NewsContent>{post.content}</NewsContent>
            </NewsLink>
            <CommentsContainer>
              <CommentsIcon>💬</CommentsIcon>
              <CommentsText>
                {post.comments ? post.comments.length : 0} Comments
              </CommentsText>
            </CommentsContainer>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

export default NewsDisplayComponent;