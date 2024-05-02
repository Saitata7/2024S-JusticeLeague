import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NewsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const NewsTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const NewsGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const NewsCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
`;

export const NewsLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const NewsTitleText = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CommentsContainer = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

export const CommentsIcon = styled.span`
  margin-right: 5px;
`;

export const CommentsText = styled.span`
  margin-right: 10px;
`;

export const NewsContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
