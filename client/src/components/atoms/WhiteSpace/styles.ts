import styled, { css } from 'styled-components';

interface StyledWhiteSpaceProps {
    height: string;
}

export const StyledWhiteSpace = styled.div(
    ({ height }: StyledWhiteSpaceProps) => css`
        min-height: ${height || 0};
    `,
);
