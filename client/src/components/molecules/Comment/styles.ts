import styled from 'styled-components';

export const StyledComment = styled.div`
    display: flex;
    margin: 8px 0;
`;

export const StyledContent = styled.div`
    padding: 12px;
    width: 100%;
    margin-left: 7px;
    background: #f3f3f3;
    min-height: 60px;
    border-radius: 10px;
    font-family: 'Roboto';
`;

export const StyledAuthorName = styled.h4`
    font-family: 'Roboto';
    font-size: 18px;
    margin-bottom: 6px;
`;

export const StyledCommentHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledCommentAge = styled.span`
    color: #9b9b9b;
    font-family: 'Roboto';
    font-size: 14px;
`;
