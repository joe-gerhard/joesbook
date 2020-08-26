import React from 'react';
import {
    StyledComment,
    StyledContent,
    StyledAuthorName,
    StyledCommentHeader,
    StyledCommentAge,
} from './styles';
import Avatar from '../../atoms/Avatar';
import { IComment } from '../../../@types';
import { calculateCommentAge } from '../../../util';

interface CommentProps {
    comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
    const commentAge = calculateCommentAge(comment.createdAt);

    return (
        <StyledComment>
            <Avatar user={comment.author} />
            <StyledContent>
                <StyledCommentHeader>
                    <StyledAuthorName>
                        {comment.author.name}
                    </StyledAuthorName>
                    <StyledCommentAge>{commentAge}</StyledCommentAge>
                </StyledCommentHeader>
                <p>{comment.content}</p>
            </StyledContent>
        </StyledComment>
    );
};

export default Comment;
