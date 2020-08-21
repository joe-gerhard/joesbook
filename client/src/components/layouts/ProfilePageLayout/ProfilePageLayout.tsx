import React from 'react';
import MainBody from '../../organisms/MainBody';
import { IUser } from '../../../@types';
import ProfileCard from '../../organisms/ProfileCard';

interface ProfilePageLayoutProps {
    user: IUser;
}

const ProfilePageLayout = ({ user }: ProfilePageLayoutProps) => {
    return (
        <MainBody>
            <ProfileCard user={user} />
        </MainBody>
    );
};

export default ProfilePageLayout;
