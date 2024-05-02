import React, { useState, useEffect } from 'react';
import NewsPostComponent from '../components/newsPost/NewsPostComponent';
import NewsDisplayComponent from '../components/Newsdisplay/NewsDisplayComponent';
import Footer from "../components/footer";
import { auth } from "../components/firebase/config";

const PostPage = () => {
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setAuthInitialized(true);
    });

    // Unsubscribe from auth state changes when component unmounts
    return () => unsubscribe();
  }, []); 

  return (
    <div>
      {authInitialized && (  
        auth.currentUser && (
          <NewsPostComponent />
        )
      )}
      <NewsDisplayComponent />
      <Footer />
    </div>
  );
};

export default PostPage;
