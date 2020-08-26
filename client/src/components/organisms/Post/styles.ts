import styled, { css } from 'styled-components';

export const StyledPost = styled.div`
    background: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 24px;
    margin: 20px 0;
    max-width: 600px;
    width: 100vw;
`;

export const StyledContent = styled.p`
    font-family: 'Roboto';
    font-size: 24px;
    color: #000000;
    margin: 15px 0;
`;

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledDivider = styled.div`
    border-top: 1px solid #9b9b9b;
    margin: 5px 0;
`;

export const StyledInteractionButtons = styled.div`
    display: flex;
`;

interface StyledButtonProps {
    clicked?: boolean;
}

export const StyledButton = styled.div(
    ({ clicked }: StyledButtonProps) => css`
        margin-right: 20px;
        color: ${clicked ? '#557EAD' : '#9b9b9b'};

        &:hover {
            cursor: pointer;
        }
    `,
);
