import React from 'react';
import NewsPostComponent from '../components/newsPost/NewsPostComponent';
import NewsDisplayComponent from '../components/Newsdisplay/NewsDisplayComponent';
import Footer from "../components/footer";
import { auth } from "../components/firebase/config";

const PostPage = () => {
  return (
    <div>
      {auth.currentUser && (
      <NewsPostComponent />
      )}
      <NewsDisplayComponent />
      <Footer />
    </div>
  );
};

export default PostPage;