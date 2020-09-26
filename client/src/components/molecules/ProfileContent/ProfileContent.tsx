import React, { useState } from 'react';
import {
    StyledButton,
    StyledClickable,
    StyledDescription,
    StyledName,
    StyledProfileContent,
    StyledText,
    StyledTextArea,
} from './styles';
import { IUser } from '../../../@types';
import Axios from 'axios';
import Icon from '../../atoms/Icon/Icon';

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

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
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
            <StyledName>{name}</StyledName>
            <div>
                <StyledDescription>About</StyledDescription>
                <StyledClickable onClick={handleToggleIsEditing}>
                    <Icon type="edit" />
                </StyledClickable>
            </div>
            {isEditing ? (
                <>
                    <StyledTextArea
                        name="bio"
                        value={updatedBio}
                        placeholder={bio}
                        onChange={handleChange}
                    />
                    <StyledButton onClick={handleSubmit}>
                        Submit
                    </StyledButton>
                </>
            ) : (
                <StyledText>{updatedBio}</StyledText>
            )}
        </StyledProfileContent>
    );
};

export default ProfileContent;
