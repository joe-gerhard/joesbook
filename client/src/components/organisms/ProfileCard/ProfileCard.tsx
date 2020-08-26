import React from 'react';
import { StyledProfileCard } from './styles';
import { IUser } from '../../../@types';
import ProfileBGImage from '../../atoms/ProfileBGImage';
import WhiteSpace from '../../atoms/WhiteSpace';
import ProfileContent from '../../molecules/ProfileContent';

interface ProfileCardProps {
    user: IUser;
}
const ProfileCard = ({ user }: ProfileCardProps) => {
    return (
        <StyledProfileCard>
            <ProfileBGImage user={user} />
            <WhiteSpace height="75px" />
            <ProfileContent user={user} />
        </StyledProfileCard>
    );
};

export default ProfileCard;
