import React from 'react';
import Avatar from '../../atoms/Avatar';
import { IPost } from '../../../@types';
import {
    StyledPostUserDetails,
    StyledDetailsContainer,
    StyledUserName,
    StyledDate,
} from './styles';

interface PostUserDetailsProps {
    post: IPost;
}

const PostUserDetails = ({ post }: PostUserDetailsProps) => {
    const date = new Date(post.updatedAt);
    return (
        <StyledPostUserDetails>
            <Avatar user={post.author} />
            <StyledDetailsContainer>
                <StyledUserName>{post.author.name}</StyledUserName>
                <StyledDate>{date.toLocaleString()}</StyledDate>
            </StyledDetailsContainer>
        </StyledPostUserDetails>
    );
};

export default PostUserDetails;
