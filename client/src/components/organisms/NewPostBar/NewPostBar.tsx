import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../store/actions/post/postActions';
import {
    StyledNewPostBar,
    StyledCreateNewPostText,
    StyledNewPostControls,
    StyledNewPostHeader,
    StyledTextarea,
    StyledSubmitButton,
    StyledIcon,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NewPostWidget = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmitNewPost = async () => {
        setContent('');
        setIsOpen(false);

        await Axios.post('/post', {
            content,
        });
        dispatch(getPosts());
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        setContent(e.target.value);
    };

    return (
        <StyledNewPostBar>
            {isOpen ? (
                <StyledNewPostControls>
                    <StyledNewPostHeader>
                        <span>New Post</span>
                        <StyledIcon
                            icon={faTimes}
                            onClick={() => setIsOpen(false)}
                        />
                    </StyledNewPostHeader>
                    <StyledTextarea
                        onChange={handleChange}
                        value={content}
                    />
                    <StyledSubmitButton onClick={handleSubmitNewPost}>
                        Submit
                    </StyledSubmitButton>
                </StyledNewPostControls>
            ) : (
                <StyledCreateNewPostText
                    onClick={() => setIsOpen(true)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                    <span> Create New Post</span>
                </StyledCreateNewPostText>
            )}
        </StyledNewPostBar>
    );
};

export default NewPostWidget;
