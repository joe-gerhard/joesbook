import React from 'react';
import { StyledEditPostIcons, StyledIcon } from './styles';
import {
    faTrashAlt,
    // faEdit,
} from '@fortawesome/free-regular-svg-icons';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../store/actions/post/postActions';

interface EditPostIconsProps {
    postId: string;
}

const EditPostIcons = ({ postId }: EditPostIconsProps) => {
    const dispatch = useDispatch();

    const handleDeletePost = async () => {
        await Axios.delete(`/post/${postId}`);

        dispatch(getPosts());
    };

    return (
        <StyledEditPostIcons>
            <StyledIcon
                icon={faTrashAlt}
                onClick={handleDeletePost}
            />
            {/* <StyledIcon icon={faEdit} /> */}
        </StyledEditPostIcons>
    );
};

export default EditPostIcons;
