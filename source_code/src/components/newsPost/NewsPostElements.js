import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1rem; 
    position: sticky;
    padding: 40px;
    top: -1px;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    background-color: black;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavItem = styled.div`
  height: 80px;  
  margin-right: 20px;
`;

export const NavLink = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
transition: all 0.2s ease-in-out;

&.active {
    border-bottom: 3px solid #16c1c7;
}

&:hover {
    color: #16c1c7;
}
`;
export const NavImg = styled.img`
max-width: 40px;
padding-top: 15px;
height: -1px;

`
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    text-decoration: none;
    background: #16c1c7;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 900;
    display: flex;
  justify-content: center;
  align-items: center;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #16c1c7;
    }

`
export const BtnLink = styled.button`
border-radius: 50px;
text-decoration: none;
background: #16c1c7;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 1rem;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
font-weight: 900;
display: flex;
justify-content: center; /* Center horizontally */
align-items: center; /* Center vertically */

&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #16c1c7; }

`
export const ButContainer = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }

`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }

`

export const PageTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  margin-top: 70px;
`;

export const HomeButton = styled(LinkR)`
  color: #007bff;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 20px;
  align-self: flex-start;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

export const FormContainer = styled.div`
  background-color: #000000;
  border-radius: 10px;
  max-width: 50%;
  padding: 20px;
  margin: 0 auto; 
  margin-top: 5px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    max-width: 80%; /* Adjust max-width for smaller screens */
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    max-width: 90%; /* Adjust max-width for even smaller screens */
    padding: 10px;
  }

`;


export const Postinput = styled.input`
border: 1px solid #ccc;
border-radius: 4px;
overflow: hidden;
background-color: white;
padding: 5px;
width: 100%;
box-sizing: border-box;
overflow-y: auto;
`;

export const Posttextarea = styled.textarea`
width: 100%;
border: none;
resize: none;
outline: none;
padding: 8px;
font-size: 16px;
line-height: 1.5;
box-sizing: border-box;
overflow-y: auto;
margin-top: 2px;
height: 120px;
`;