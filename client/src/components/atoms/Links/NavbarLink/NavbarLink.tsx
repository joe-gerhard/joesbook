import React, { ReactNode } from 'react';
import { StyledNavbarLink } from '../styles';

interface NavbarLinkProps {
    to: string;
    children: ReactNode;
    marginLeft?: string;
}

const NavbarLink = ({
    to,
    children,
    marginLeft,
}: NavbarLinkProps) => {
    return (
        <StyledNavbarLink to={to} marginLeft={marginLeft}>
            {children}
        </StyledNavbarLink>
    );
};

export default NavbarLink;
