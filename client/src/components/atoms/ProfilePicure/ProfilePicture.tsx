import React from 'react';
import { StyledProfilePicture } from './styles';

interface ProfilePictureProps {
    src: string;
    alt: string;
}

const ProfilePicture = ({ src, alt }: ProfilePictureProps) => {
    return <StyledProfilePicture src={src} alt={alt} />;
};

export default ProfilePicture;
