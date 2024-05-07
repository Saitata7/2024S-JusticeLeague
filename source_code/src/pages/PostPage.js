import React from 'react';
import NewsPostComponent from '../components/newsPost/NewsPostComponent';
import NewsDisplayComponent from '../components/Newsdisplay/NewsDisplayComponent';
import Footer from "../components/footer";

const PostPage = () => {

  return (
    <div>
      <NewsPostComponent />
      <NewsDisplayComponent />
      <Footer />
    </div>
  );
};

export default PostPage;
