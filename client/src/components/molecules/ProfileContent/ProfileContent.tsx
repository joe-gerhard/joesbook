import React, { useState } from 'react';
import { StyledProfileContent } from './styles';
import { IUser } from '../../../@types';
import Axios from 'axios';

interface ProfileContentProps {
    user: IUser;
}

const ProfileContent = ({ user }: ProfileContentProps) => {
    const { name, bio, _id } = user;

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [updatedBio, setUpdatedBio] = useState<string>(bio);

    const handleToggleIsEditing = () => {
        setIsEditing((prevState) => !prevState);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedBio(e.target.value);
    };

    const handleSubmit = async () => {
        await Axios.post(`/user/${_id}`, {
            bio: updatedBio,
        });

        setIsEditing((prevState) => !prevState);
    };

    return (
        <StyledProfileContent>
            <h2>{name}</h2>
            <div>
                <span>About</span>
                <button onClick={handleToggleIsEditing}>Edit</button>
            </div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="bio"
                        value={updatedBio}
                        placeholder={bio}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </>
            ) : (
                <p>{updatedBio}</p>
            )}
        </StyledProfileContent>
    );
};

export default ProfileContent;
