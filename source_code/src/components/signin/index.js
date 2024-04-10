import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, set, onValue } from 'firebase/database';
import { auth, database } from '../../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
  Button,
  CloseLink,
} from "./SigninElements";
import ResetPasswordForm from "../resetpassword/ResetPasswordForm";

const Signin = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginerror,setloginError]=useState('')
  const [signupSuccess, setSignupSuccess] = useState(false); // New state for signup success
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User credential:', userCredential); 
        const user = userCredential.user;
        const userRef = ref(database, `users/${user.uid}`);
        onValue(userRef, (snapshot) => {
          if (!snapshot.exists()) {
            set(userRef, {
              email: user.email,
            })
              .then(() => {
                console.log('logged in');
                // Update state to close the login popup or perform any other action
                setActiveForm('login'); // Set active form to login
                
       
              })
              .catch((error) => {
                setError('Error storing user data: ' + error.message);
              });
            
            } 
          else {
            // Update state to close the login popup or perform any other action
            setActiveForm('login'); // Set active form to login
          }
        })
        navigate('/');
      })
      .catch((error) => {
        setloginError('Login error: ' + error.message);
      });
  };
  

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userRef = ref(database, `users/${user.uid}`);
        set(userRef, {
          email: user.email,
        })
          .then(() => {
            console.log('User data stored in the database');
            setSignupSuccess(true); // Set signup success
          })
          .catch((error) => {
            setError('Error storing user data: ' + error.message);
          });
      })
      .catch((error) => {
        setError('Signup error: ' + error.message);
      });
  };

  const handleFormToggle = () => {
    setActiveForm(activeForm === 'login' ? 'register' : 'login');
    setError(''); // Clear any previous errors when toggling form
  };
  const handleForgetPasswordClick = () => {
    setActiveForm('forgetPassword');
  };
  const resetPassword=(e1)=>{
    if(e1=='linkclicked'){
    setActiveForm('ResetPasswordForm')}
    else{
      setActiveForm('login')
    }
  }
  return (
    <SigninContainer id="signin">
      <SigninWrapper className="py-5 px-5">
        <CloseLink href='/'>Close</CloseLink>
        <div className="my-auto">
          {activeForm === 'login' && (
            <div id="login">
              <h3 className="center-align mb-5">Login</h3>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <form onSubmit={handleLogin}>
                <SigninP>Email</SigninP>
                <SigninInput
                  type="email"
                  placeholder="Enter your Email..."
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <SigninP>Password</SigninP>
                <SigninInput
                  type="password"
                  placeholder="Enter password..."
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <SigninInput
                  type="submit"
                  value="Login"
                  className="mt-5 mb-3"
                  style={{ backgroundColor: '#010606', color: '#fff', borderRadius: '50px' }}
                />
              
              </form>
              {loginerror && (
              <p className="center-align">
                <a href="#" onClick={() => resetPassword('linkclicked')}>Forgot Password?</a>
              </p>
            )}
              <p className="center-align">
                New User? <Button onClick={handleFormToggle}>Register</Button>
              </p>
            </div>
          )}

          {activeForm === 'register' && (
            <div id="register">
              <h3 className="center-align mb-5">Register</h3>
              <form onSubmit={handleSignup}>
                {signupSuccess ? (
                  <p style={{ color: 'green' }}>Signup successful! Please login.</p>
                ) : (
                  <>
                    <SigninP>Email</SigninP>
                    <SigninInput
                      type="email"
                      placeholder="Enter your Email..."
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <SigninP>Password</SigninP>
                    <SigninInput
                      type="password"
                      placeholder="Enter password..."
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Register</Button>
                  </>
                )}
              </form>
              <p className="center-align">
                Registered Already?{' '}
                <Button onClick={handleFormToggle}>Login</Button>
              </p>
            </div>
          )}
          {activeForm === 'ResetPasswordForm' && (
            <div id="register">
              <h3 className="center-align mb-5">Reset Password</h3>
             <ResetPasswordForm resetPassword={resetPassword}/>
            </div>
          )}

        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
