import React, { useState } from 'react';
import {
    StyledPost,
    StyledContent,
    StyledHeader,
    StyledDivider,
    StyledInteractionButtons,
    StyledButton,
} from './styles';
import { IPost } from '../../../@types';
import PostUserDetails from '../../molecules/PostUserDetails';
import EditPostIcons from '../../molecules/EditPostIcons';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../store/selectors';
import PostStats from '../../molecules/PostStats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faCommentAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { getPosts } from '../../../store/actions/post/postActions';
import Avatar from '../../atoms/Avatar';
import Comment from '../../molecules/Comment';

interface PostProps {
    post: IPost;
}

const Post = ({ post }: PostProps) => {
    const [isAddCommentBarOpen, setIsAddCommentBarOpen] = useState<
        boolean
    >(false);

    const [comment, setComment] = useState<string | undefined>();
    const currentUser = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLikePost = async () => {
        await Axios.put(`post/${post._id}/like`);
        dispatch(getPosts());
    };

    const handleUnlikePost = async () => {
        await Axios.put(`post/${post._id}/unlike`);
        dispatch(getPosts());
    };

    const handlePostComment = async () => {
        await Axios.put(`post/${post._id}/comment`, {
            content: comment,
        });
        dispatch(getPosts());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const currentUserHasLikedPost = post.likes.includes(
        currentUser._id,
    );

    return (
        <StyledPost>
            <StyledHeader>
                <PostUserDetails post={post} />
                {currentUser._id === post.author._id && (
                    <EditPostIcons postId={post._id} />
                )}
            </StyledHeader>
            <StyledContent>{post.content}</StyledContent>
            <PostStats post={post} />
            <StyledDivider />
            <StyledInteractionButtons>
                <StyledButton
                    clicked={currentUserHasLikedPost}
                    onClick={
                        currentUserHasLikedPost
                            ? handleUnlikePost
                            : handleLikePost
                    }
                >
                    <FontAwesomeIcon
                        icon={
                            currentUserHasLikedPost
                                ? faThumbsUpSolid
                                : faThumbsUp
                        }
                    />
                    <span> Like</span>
                </StyledButton>
                <StyledButton
                    onClick={() => setIsAddCommentBarOpen(true)}
                >
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <span> Comment</span>
                </StyledButton>
            </StyledInteractionButtons>
            {isAddCommentBarOpen && (
                <div>
                    <div>
                        <Avatar user={currentUser} />
                        <input
                            type="textarea"
                            placeholder="Add a comment..."
                            onChange={handleChange}
                            value={comment}
                        />
                    </div>
                    <button onClick={handlePostComment}>post</button>
                </div>
            )}
            {post.comments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
            ))}
        </StyledPost>
    );
};

export default Post;
