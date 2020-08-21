import React from 'react';
import { StyledProfileBGImage } from './styles';
import ProfilePicture from '../ProfilePicure';
import { IUser } from '../../../@types';

interface ProfileBGImageProps {
    user: IUser;
}

const ProfileBGImage = ({ user }: ProfileBGImageProps) => {
    const { picture, name } = user;
    return (
        <StyledProfileBGImage>
            <ProfilePicture src={picture} alt={name} />
        </StyledProfileBGImage>
    );
};

export default ProfileBGImage;
