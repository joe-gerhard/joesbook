import { IPost } from '../../@types';
import { Reducer } from 'redux';
import { PostAction } from '../actions/post/postActionTypes';

interface PostState {
    data: IPost[];
    isLoading: boolean;
    error: string;
}

const initialState: PostState = {
    data: [],
    isLoading: false,
    error: '',
};

const postReducer: Reducer<PostState, PostAction> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case 'SET_POSTS_ERROR':
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case 'SET_POSTS_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
