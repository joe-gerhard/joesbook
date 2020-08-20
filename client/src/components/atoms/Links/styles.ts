import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledNavbarLinkProps {
    marginLeft?: string;
}

export const StyledNavbarLink = styled(Link)(
    ({ marginLeft }: StyledNavbarLinkProps) => css`
        text-decoration: none;
        color: white;
        margin: 10px;
        margin-left: ${marginLeft || '10px'};
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }
    `,
);

export const StyledMainLogoLink = styled(StyledNavbarLink)`
    margin: 2px;
    font-size: 20px;
`;
