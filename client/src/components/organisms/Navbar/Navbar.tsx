import React from 'react';

import { StyledNavbar } from './styles';
import { NavbarLink, LogoutLink } from '../../atoms/Links';
import { useSelector } from 'react-redux';
import {
    selectUserIsLoggedIn,
    selectUserIsLoading,
} from '../../../store/selectors';
import Logo from '../../atoms/Logo';
import FullLogo from '../../molecules/FullLogo';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isLoggedIn = useSelector(selectUserIsLoggedIn);
    const isLoading = useSelector(selectUserIsLoading);
    const isOnSplashPage =
        !isLoading && !isLoggedIn && location.pathname === '/';
    const isOnLoginPage = location.pathname === '/login';

    return (
        <StyledNavbar background={isOnSplashPage && 'transparent'}>
            {isOnSplashPage || isOnLoginPage ? (
                <FullLogo />
            ) : (
                <>
                    <Logo />
                    <NavbarLink to="/">Home</NavbarLink>
                </>
            )}

            {isLoggedIn ? (
                <>
                    <NavbarLink marginleft="auto" to="/profile">
                        Profile
                    </NavbarLink>
                    <LogoutLink />
                </>
            ) : (
                <NavbarLink marginleft="auto" to="/login">
                    Login
                </NavbarLink>
            )}
        </StyledNavbar>
    );
};

export default Navbar;
