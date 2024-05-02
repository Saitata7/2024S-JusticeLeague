import React from 'react';
import NewsPostComponent from '../components/newsPost/NewsPostComponent';
import NewsDisplayComponent from '../components/Newsdisplay/NewsDisplayComponent';
import Footer from "../components/footer";

const PostPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <NewsPostComponent />
      <NewsDisplayComponent />
      <Footer />
    </div>
  );
};

export default PostPage;