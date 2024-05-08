import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Your Firebase configuration object goes here
  apiKey: "AIzaSyA9HDUUwoH744uaNP21bO-gjWPGUzvZsss",
  authDomain: "challenge-30fd1.firebaseapp.com",
  databaseURL: "https://challenge-30fd1-default-rtdb.firebaseio.com",
  projectId: "challenge-30fd1",
  storageBucket: "challenge-30fd1.appspot.com",
  messagingSenderId: "1007890852867",
  appId: "1:1007890852867:web:ab6b38ece09c12bf893236",
  measurementId: "G-TN9TPPNFEV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };