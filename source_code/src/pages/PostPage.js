import React from 'react';
import NewsPostComponent from '../components/newsPost/NewsPostComponent';
import NewsDisplayComponent from '../components/Newsdisplay/NewsDisplayComponent';

const PostPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <NewsPostComponent />
      <NewsDisplayComponent />
    </div>
  );
};

export default PostPage;