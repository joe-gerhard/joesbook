import React from 'react';
import { StyledProfileContent } from './styles';
import { IUser } from '../../../@types';

interface ProfileContentProps {
    user: IUser;
}

const ProfileContent = ({ user }: ProfileContentProps) => {
    const { name } = user;
    return (
        <StyledProfileContent>
            <h2>{name}</h2>
            <h4>About</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut odio accusantium, quia nihil eius corporis
                magni sunt libero aliquid autem? Sint minima id
                voluptatibus. Velit quibusdam repudiandae numquam
                dolore rerum.
            </p>
        </StyledProfileContent>
    );
};

export default ProfileContent;
