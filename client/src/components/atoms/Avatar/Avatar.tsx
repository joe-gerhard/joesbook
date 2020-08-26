import React from 'react';
import { IUser } from '../../../@types';
import { StyledAvatar } from './styles';

interface AvatarProps {
    user: IUser;
}

const Avatar = ({ user }: AvatarProps) => {
    return <StyledAvatar src={user.picture} alt={user.name} />;
};

export default Avatar;
