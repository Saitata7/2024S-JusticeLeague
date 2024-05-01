import React, { useState, useEffect } from 'react';
import Pagination from './pagination';
import { auth, database } from '../../firebase/config';
import { HistorySectionContainer,
   HistoryTitle,
   Nav,
   NavItem,
   NavLink,
   NavImg,
   } from './historyElements';
import logo from "../../images/logo.png";


const HistorySection = () => {
  const [historyData, setHistoryData] = useState([]);
  const [ setLoading] = useState(true);
  const itemsPerPage = 3;  //Per page 

  const historyData2 = [
    { sNo: 1, username: 'sai', date: '2024-04-30', content: 'Info1', isTrue: true },
    { sNo: 2, username: 'sai', date: '2024-04-29', content: 'Info2', isTrue: false },
    { sNo: 3, username: 'sai', date: '2024-04-30', content: 'Info3', isTrue: true },
    { sNo: 4, username: 'sai', date: '2024-04-29', content: 'Info4', isTrue: false },
    { sNo: 5, username: 'sai', date: '2024-04-30', content: 'Info5', isTrue: true },
    { sNo: 6, username: 'sai', date: '2024-04-29', content: 'Info6', isTrue: false },
    // Add more items as needed
  ];
//After Adding values in Firebase
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const historyRef = database.collection('history'); 
  //       const snapshot = await historyRef.get();
  //       const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //       setHistoryData(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching history data:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <>
      <Nav>
      <NavImg src={logo} alt="" />
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">Search History Page</NavLink>
        </NavItem>
      </Nav>
      <HistorySectionContainer>
        <HistoryTitle>Search History Page</HistoryTitle>
          <Pagination data={historyData2} itemsPerPage={itemsPerPage} />
      </HistorySectionContainer>
    </>
  );
};

export default HistorySection;
