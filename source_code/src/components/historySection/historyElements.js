import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
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
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const Th = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  color: white;
  background-color: #32353e;
`;

export const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  border-radius: 10px;
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #ddd;
  background-color: ${({ isActive }) => (isActive ? '#16c1c7' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#010606')};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#010606' : '#f2f2f2')};
  }
`;

export const HistorySectionContainer = styled.div`
  padding: 20px;
  background-color: #f7f7f7;
`;

export const HistoryTitle = styled.h1`
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