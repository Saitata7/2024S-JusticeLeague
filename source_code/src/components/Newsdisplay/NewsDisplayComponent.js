import React, { useEffect, useState } from 'react';
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from 'firebase/firestore';
import {
  NewsContainer,
  NewsTitle,
  NewsGrid,
  NewsCard,
  NewsLink,
  NewsTitleText,
  NewsContent,
  CommentsContainer,
  CommentsIcon,
  CommentsText,
} from './NewsDisplayElements';

const NewsDisplayComponent = () => {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, 'news'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const posts = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const commentsSnapshot = await getDocs(collection(db, 'news', doc.id, 'comments'));
          const commentsCount = commentsSnapshot.size;
          return {
            id: doc.id,
            ...doc.data(),
            commentsCount,
          };
        })
      );
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
              <CommentsText>{post.commentsCount} Comments</CommentsText>
            </CommentsContainer>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
};

export default NewsDisplayComponent;