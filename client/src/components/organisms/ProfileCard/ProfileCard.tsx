import React from 'react';
import { StyledProfileCard } from './styles';
import { IUser } from '../../../@types';
import ProfileBGImage from '../../atoms/ProfileBGImage';
import WhiteSpace from '../../atoms/WhiteSpace';

interface ProfileCardProps {
    user: IUser;
}
const ProfileCard = ({ user }: ProfileCardProps) => {
    const { name } = user;

    return (
        <StyledProfileCard>
            <ProfileBGImage user={user} />
            <WhiteSpace height="75px" />
            <h2>{name}</h2>
            <h4>About</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ut odio accusantium, quia nihil eius corporis
                magni sunt libero aliquid autem? Sint minima id
                voluptatibus. Velit quibusdam repudiandae numquam
                dolore rerum.
            </p>
        </StyledProfileCard>
    );
};

export default ProfileCard;
