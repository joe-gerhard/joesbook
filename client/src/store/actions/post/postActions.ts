import { ThunkAction } from 'redux-thunk';
import { IPost } from '../../../@types';
import { PostAction } from './postActionTypes';
import Axios from 'axios';

export const setPosts = (posts: IPost[]): PostAction => ({
    type: 'SET_POSTS',
    payload: posts,
});

export const setPostsLoading = (isLoading: boolean): PostAction => ({
    type: 'SET_POSTS_LOADING',
    payload: isLoading,
});

export const setPostsError = (error: string): PostAction => ({
    type: 'SET_POSTS_ERROR',
    payload: error,
});

export const getPosts = (): ThunkAction<
    Promise<PostAction>,
    {},
    {},
    PostAction
> => async (dispatch) => {
    dispatch(setPostsLoading(true));

    try {
        const response = await Axios.get('/post');

        const posts: IPost[] = response.data;

        return dispatch(setPosts(posts));
    } catch (error) {
        return dispatch(setPostsError(error));
    }
};
