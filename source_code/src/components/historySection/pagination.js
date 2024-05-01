import React, { useState } from 'react';
import { Table, Th, Td, PaginationContainer, PageButton } from './historyElements';

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <div>
          <Table>
            <thead>
              <tr>
                <Th>s.no</Th>
                <Th>Username</Th>
                <Th>Date</Th>
                <Th>Content</Th>
                <Th>True/False</Th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <Td>{item.sNo}</Td>
                  <Td>{item.username}</Td>
                  <Td>{item.date}</Td>
                  <Td>{item.content}</Td>
                  <Td>{item.isTrue ? 'True' : 'False'}</Td>
                </tr>
              ))}
            </tbody>
          </Table>

          <PaginationContainer>
            {data.length > itemsPerPage &&
              Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                <PageButton
                  key={i}
                  isActive={i + 1 === currentPage}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </PageButton>
              ))}
          </PaginationContainer>
        </div>
      )}
    </div>
  );
};

export default Pagination;
