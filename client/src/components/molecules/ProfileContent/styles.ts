import styled from 'styled-components';
import { StyledPostButton } from '../AddCommentBar/styles';

export const StyledProfileContent = styled.div`
    margin: 20px;
    font-family: 'Roboto';
`;

export const StyledName = styled.h2`
    font-weight: normal;
    font-size: 36px;
    margin-bottom: 20px;
`;

export const StyledDescription = styled.span`
    font-weight: normal;
    font-size: 18px;
`;

export const StyledClickable = styled.button`
    border: none;
    background: transparent;
    margin: 0 5px;
    color: #aaa;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }
`;

export const StyledText = styled.p`
    font-family: 'Roboto';
    font-weight: normal;
    font-size: 14px;
    color: #555;
    margin: 5px 0;
    white-space: pre-wrap;
`;

export const StyledTextArea = styled.textarea`
    font-family: 'Roboto';
    font-weight: normal;
    font-size: 14px;
    color: #555;
    width: 100%;
    height: 150px;
    display: block;
    padding: 10px;
`;

export const StyledButton = styled(StyledPostButton)`
    margin-left: 0;
`;
