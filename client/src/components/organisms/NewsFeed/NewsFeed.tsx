import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { getPosts } from '../../../store/actions/post/postActions';
import Post from '../Post';

const NewsFeed = () => {
    const posts = useSelector((state: RootState) => state.post.data);
    const isLoading = useSelector(
        (state: RootState) => state.post.isLoading,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (isLoading) return <div>loading...</div>;

    return (
        <div>
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
};

export default NewsFeed;
