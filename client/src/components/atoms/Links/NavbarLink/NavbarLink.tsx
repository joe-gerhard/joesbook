import React, { ReactNode } from 'react';
import { StyledNavbarLink } from '../styles';

interface NavbarLinkProps {
    to: string;
    children: ReactNode;
    marginleft?: string;
}

const NavbarLink = ({
    to,
    children,
    marginleft,
}: NavbarLinkProps) => {
    return (
        <StyledNavbarLink to={to} marginleft={marginleft}>
            {children}
        </StyledNavbarLink>
    );
};

export default NavbarLink;
