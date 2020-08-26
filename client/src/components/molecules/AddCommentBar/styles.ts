import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const StyledAddCommentBar = styled.div`
    margin-top: 7px;
`;

export const StyledInputGroup = styled.div`
    display: flex;
`;

export const StyledTextArea = styled(TextareaAutosize)`
    border: 1px solid black;
    border-radius: 30px;
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
`;

export const StyledPostButton = styled.button`
    color: white;
    background: #557ead;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    width: 160px;
    height: 40px;
    margin-left: 60px;
    margin-top: 7px;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 18px;

    &:hover {
        cursor: pointer;
    }
`;
