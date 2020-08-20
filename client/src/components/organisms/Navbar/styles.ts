import styled, { css } from 'styled-components';
import { navbarHeight } from '../../../styles/constants';

interface StyledNavbarProps {
    background?: string | false;
}

export const StyledNavbar = styled.nav(
    ({ background }: StyledNavbarProps) => css`
        display: flex;
        align-items: center;
        background: ${background || '#557ead'};
        height: ${navbarHeight};
        padding: 0 30px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    `,
);
