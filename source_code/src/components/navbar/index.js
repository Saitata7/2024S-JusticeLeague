import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { auth } from "../../firebase/config"; // Assuming you have imported auth from firebase/config
import { getAuth } from "firebase/auth"; // Import getAuth function
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImg,
  NavBarLink
} from "./NavbarElements";
import "./../../App.css";
import logo from "../../images/logo.png";

export const Navbar = ({ toggle }) => {
  const [loading, setLoading] = useState(true);
  const auth = getAuth(); // Initialize auth object using getAuth function
  const handleClick = () => {
    window.location.reload(); // Refresh the page
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Navigate to the desired page after successful logout
      window.location.href = '/'; // Replace '/' with the desired path
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return null; // Render nothing while loading
  }

  return (
    <Nav>
      <NavbarContainer>
        <NavImg src={logo} alt="" />
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="#">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="verifynews">Verify News</NavLinks>
          </NavItem>
          <NavItem>
          <NavBarLink to="/history">Search History</NavBarLink>
          </NavItem>
          <NavItem>
            <NavLinks to="about">About us</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          {auth.currentUser ? (
            <>
              <NavBtnLink to="/chat">Chat</NavBtnLink>
              <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
            </>
          ) : (
            <NavBtnLink to="/signin">Login</NavBtnLink>
          )}
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};