import React from 'react';
import MainBody from '../../organisms/MainBody';
import Button from '../../atoms/Button';
import H1 from '../../atoms/Headers';

const LandingPageLayout = () => {
    return (
        <MainBody>
            <H1>Connect with the people you love.</H1>
            <Button to="/login">Sign Up</Button>
        </MainBody>
    );
};

export default LandingPageLayout;
