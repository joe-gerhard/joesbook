import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface StyledNavbarLinkProps {
    marginleft?: string;
}

export const StyledNavbarLink = styled(Link)(
    ({ marginleft }: StyledNavbarLinkProps) => css`
        text-decoration: none;
        color: white;
        margin: 10px;
        margin-left: ${marginleft || '10px'};
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
