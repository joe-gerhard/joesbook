import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
    selectUserIsLoggedIn,
    selectUserIsLoading,
} from '../../store/selectors';
import { useCheckForUser } from '../../hooks';
import { cleanFacebookHash } from '../../util';

import Navbar from '../../components/organisms/Navbar';
import ProfilePage from '../ProfilePage';
import HomePage from '../LandingPage';
import LoginPage from '../LoginPage';
import error404Page from '../error404Page';
import LoadingPage from '../LoadingPage';
import { StyledApp } from './styles';
import FeedPage from '../FeedPage';

function App() {
    useCheckForUser();
    cleanFacebookHash();

    const location = useLocation();

    const isLoggedIn = useSelector(selectUserIsLoggedIn);
    const isLoading = useSelector(selectUserIsLoading);

    const isOnSplashPage = !isLoggedIn && location.pathname === '/';

    return (
        <StyledApp bgImage={isOnSplashPage}>
            <Navbar />
            <Switch>
                {isLoading && (
                    <Route path="/" component={LoadingPage} />
                )}

                {isLoggedIn && (
                    <Route path="/profile" component={ProfilePage} />
                )}
                <Route path="/login" component={LoginPage} />
                <Route
                    path="/"
                    exact
                    component={isLoggedIn ? FeedPage : HomePage}
                />
                <Route path="/" component={error404Page} />
            </Switch>
        </StyledApp>
    );
}

export default App;
