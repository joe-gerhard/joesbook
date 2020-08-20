import React from 'react';
import { StyledLogo } from './styles';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <StyledLogo src="/logo.png" alt="Joesbook" />
        </Link>
    );
};

export default Logo;
