import React from 'react';
import { StyledPostStats, StyledContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { IPost } from '../../../@types';

interface PostStatsProps {
    post: IPost;
}

const PostStats = ({ post }: PostStatsProps) => {
    const numComments = post.comments.length;

    return (
        <StyledPostStats>
            <StyledContainer>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span> {post.likes.length}</span>
            </StyledContainer>
            <StyledContainer>
                <span>{numComments}</span>
                <span>
                    {` Comment${numComments === 1 ? '' : 's'}`}
                </span>
            </StyledContainer>
        </StyledPostStats>
    );
};

export default PostStats;
