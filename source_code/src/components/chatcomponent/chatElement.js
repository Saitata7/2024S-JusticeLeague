import styled from "styled-components";

export const ChatContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh; /* Adjust height as needed */
    position: relative;
    z-index: 1;
`;

export const ChatMessages = styled.div`
    margin-top: 20px;
    max-height: 70vh; /* Adjust max-height as needed */
    overflow-y: auto;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    color: white;

    div {
        margin-bottom: 10px;
    }

    strong {
        color: #00ff00; /* Green color for sender name */
    }
`;

export const ChatInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const ChatInput = styled.input`
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
`;

export const ChatButton = styled.button`
    padding: 10px 20px;
    background: #007bff; /* Blue color for button background */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #0056b3; /* Darker blue color on hover */
    }
`;
