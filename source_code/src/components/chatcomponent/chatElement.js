import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 3px;
  }
`;

export const ChatButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 3px 8px;
    font-size: 0.8rem;
  }
`;
