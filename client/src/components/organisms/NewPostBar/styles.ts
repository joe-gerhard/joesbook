import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledNewPostBar = styled.div`
    background: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 24px;
    margin: 20px 0;
    max-width: 600px;
    width: 95vw;
`;

export const StyledCreateNewPostText = styled.div`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 18px;
    user-select: none;
    padding: 10px;
    border-radius: 10px;

    color: #000000;

    &:hover {
        background: #f3f3f3;
        cursor: pointer;
    }
`;

export const StyledNewPostControls = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledNewPostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 18px;
`;

export const StyledTextarea = styled(TextareaAutosize)`
    border: 1px solid black;
    margin: 10px 0;
    border-radius: 10px;
    min-height: 60px;
    height: 60px;
    width: 100%;
    resize: none;

    padding: 14px 20px;
    margin-left: 7px;

    font-size: 24px;
    font-family: 'Roboto';

    &:focus {
        outline: none;
    }

    ::placeholder {
        color: #9b9b9b;
    }
`;

export const StyledSubmitButton = styled.button`
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    width: 158px;
    height: 50px;

    color: #ffffff;
    background: #557ead;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    &:hover {
        cursor: pointer;
    }
`;
