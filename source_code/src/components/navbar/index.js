import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { auth } from "../../firebase/config";
import { getAuth } from "firebase/auth";
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
} from "./NavbarElements";
import "./../../App.css";
import logo from "../../images/logo.png";

export const Navbar = ({ toggle }) => {
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const handleClick = () => {
    window.location.reload();
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
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return null;
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
            <NavLinks to="signin">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Verify News</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Search History</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">About us</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">Contact</NavLinks>
          </NavItem>
          {auth.currentUser && (
            <NavItem>
              <NavBtnLink to="/post">Post</NavBtnLink>
            </NavItem>
          )}
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