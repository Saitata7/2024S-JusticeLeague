import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
  Button,
  CloseLink,
} from "./SigninElements";

const Signin = () => {
  const loginForm = useRef();
  const registerForm = useRef();
  const [emailError, setEmailError] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);
  const [activeForm, setActiveForm] = useState('login');

  const toggleForm = (formId) => {
    setActiveForm(formId);
    setEmailError('');
    setMessageSent(false);
  };

  return (
    <SigninContainer id="signin">
      <SigninWrapper className="py-5 px-5">
      <CloseLink href='/'>Close</CloseLink>
        <div className="my-auto">
          {activeForm === 'login' && (
            <div id="login">
              
              <h3 className="center-align mb-5">Login</h3>
              <form>
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                <SigninP>Email</SigninP>
                <SigninInput type="email" placeholder="Enter your Email..." name="email"/>
                <SigninP>Password</SigninP>
                <SigninInput type="password" placeholder="Enter password..." name="password"/>
                <SigninInput
                  type="submit"
                  value="Login"
                  className="mt-5 mb-3"
                  style={{ backgroundColor: '#010606', color: '#fff', borderRadius: '50px' }}
                />
              </form>
              {isMessageSent && (
                <p style={{ color: 'green' }} className="center-align">
                  Email or Password is incorrect
                </p>
              )}
              <p className="center-align">
                New User? <Button onClick={() => toggleForm('register')}>Register</Button>
              </p>
            </div>
          )}

          {activeForm === 'register' && (
            <div id="register">
              <h3 className="center-align mb-5">Register</h3>
              <form>
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                <SigninP>First Name</SigninP>
                <SigninInput type="text" placeholder="Enter first name" name="fname"/>
                <SigninP>Last Name</SigninP>
                <SigninInput type="text" placeholder="Enter last name" name="lname"/>
                <SigninP>Email</SigninP>
                <SigninInput type="email" placeholder="Enter email" name="email"/>
                <SigninP>Password</SigninP>
                <SigninInput type="password" placeholder="Enter password" name="password"/>
                <SigninInput
                  type="submit"
                  value="Register"
                  className="mt-5 mb-3"
                  style={{ backgroundColor: '#010606', color: '#fff', borderRadius: '50px' }}
                />
              </form>
              {isMessageSent && (
                <p style={{ color: 'green' }} className="center-align">
                  Email or Password already exist
                </p>
              )}
              <p className="center-align">
                <p>
                  Registered Already?{' '}
                  <Button onClick={() => toggleForm('login')}>Login</Button>
                </p>
              </p>
            </div>
          )}
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default Signin;
