import React, { useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../../store/actions/post/postActions';

const NewPostWidget = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmitNewPost = async () => {
        setContent('');

        await Axios.post('/post', {
            content,
        });
        dispatch(getPosts());
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    return (
        <div>
            <input
                type="textarea"
                onChange={handleChange}
                value={content}
            />
            <button onClick={handleSubmitNewPost}>submit</button>
        </div>
    );
};

export default NewPostWidget;
