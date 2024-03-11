import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom"
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";

const Signin = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
  if (!emailRegex.test(e.target.email.value)) {
    setEmailError('Please enter a valid email address.');
    return;
  }
  setEmailError('');
  console.log(form.current);
    emailjs.sendForm('service_6vy0qjs', 'template_d3qyfun', form.current, 'sxMP4F-UHWtVRUWL6')
      .then((result) => {
          console.log(result.text);
          setMessageSent(true);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setMessageSent(false);
          console.log(form.current);
      });
    };

  return (
    <SigninContainer id="signin">
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          {/* login form for user to check history of searched news */}
          <h3 className="center-align mb-5">Login</h3>
          <form ref={form} onSubmit={sendEmail}>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <SigninP>Email</SigninP>
            <SigninInput type="email" placeholder="Enter your Email..." name="email"/>
            <SigninP>Password</SigninP>
            <SigninInput type="password" placeholder="Enter password..." name="password"/>
            <SigninInput type="submit" value="Login" className="mt-5 mb-3" style={{backgroundColor:"#010606",color:"#fff",borderRadius: '50px'}}/>
          </form>
          {isMessageSent && <p style={{ color: 'green' }} className="center-align">Email or Password is incorrect</p>}
          <p className="center-align">
             New User?  <a href="/">Register</a>
          </p>
        </div>
        {/* Registeration form for user if user is new to the webiste */}
        <div className="my-auto">
          <h3 className="center-align mb-5">Register</h3>
          <form ref={form} onSubmit={sendEmail}>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            <SigninP>Frist Name</SigninP>
            <SigninInput type="text" placeholder="Enter first name" name="fname"/>
            <SigninP>Last Name</SigninP>
            <SigninInput type="text" placeholder="Enter last name" name="lname"/>
            <SigninP>Email</SigninP>
            <SigninInput type="email" placeholder="Enter email" name="email"/>
            <SigninP>Password</SigninP>
            <SigninInput type="password" placeholder="Enter password" name="password"/>
            <SigninInput type="submit" value="Register" className="mt-5 mb-3" style={{backgroundColor:"#010606",color:"#fff",borderRadius: '50px'}}/>
          </form>
          {isMessageSent && <p style={{ color: 'green' }} className="center-align">Email or Password already exist</p>}
          <p className="center-align">
          <p>Registered Already? <Link to="/">Login</Link></p>
          </p>
        </div>
      </SigninWrapper>
    </SigninContainer>



   
  );
};

export default Signin;
