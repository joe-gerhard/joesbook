import React from 'react';
import { StyledFullLogo } from './styles';
import Logo from '../../atoms/Logo';
import MainLogoLink from '../../atoms/Links/MainLogoLink/MainLogoLink';

const FullLogo = () => {
    return (
        <StyledFullLogo>
            <Logo />
            <MainLogoLink />
        </StyledFullLogo>
    );
};

export default FullLogo;
