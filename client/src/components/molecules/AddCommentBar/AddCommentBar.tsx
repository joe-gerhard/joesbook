import React, { useState } from 'react';
import {
    StyledAddCommentBar,
    StyledTextArea,
    StyledInputGroup,
    StyledPostButton,
} from './styles';
import Avatar from '../../atoms/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../../store/actions/post/postActions';
import Axios from 'axios';
import { selectUser } from '../../../store/selectors';
import { IPost } from '../../../@types';

interface AddCommentBarProps {
    post: IPost;
}

const AddCommentBar = ({ post }: AddCommentBarProps) => {
    const [comment, setComment] = useState<string | undefined>();
    const dispatch = useDispatch();
    const currentUser = useSelector(selectUser);

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setComment(e.target.value);
    };

    const handlePostComment = async () => {
        await Axios.put(`post/${post._id}/comment`, {
            content: comment,
        });
        dispatch(getPosts());
    };

    return (
        <StyledAddCommentBar>
            <StyledInputGroup>
                <Avatar user={currentUser} />
                <StyledTextArea
                    placeholder="Add a comment..."
                    onChange={handleChange}
                    value={comment}
                />
            </StyledInputGroup>
            <StyledPostButton onClick={handlePostComment}>
                Post
            </StyledPostButton>
        </StyledAddCommentBar>
    );
};

export default AddCommentBar;
