import React from 'react';
import {
    StyledComment,
    StyledContent,
    StyledAuthorName,
} from './styles';
import Avatar from '../../atoms/Avatar';
import { IComment } from '../../../@types';

interface CommentProps {
    comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
    return (
        <StyledComment>
            <Avatar user={comment.author} />
            <StyledContent>
                <StyledAuthorName>
                    {comment.author.name}
                </StyledAuthorName>
                <p>{comment.content}</p>
            </StyledContent>
        </StyledComment>
    );
};

export default Comment;
