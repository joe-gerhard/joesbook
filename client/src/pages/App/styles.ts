import styled, { css } from 'styled-components';

interface StyledAppProps {
    bgImage?: boolean;
}

export const StyledApp = styled.div(
    ({ bgImage }: StyledAppProps) => css`
        display: flex;
        flex-direction: column;
        background-image: ${bgImage ? "url('/bgImage.png')" : 'none'};
        background-size: cover;
        background-position: center;
    `,
);
