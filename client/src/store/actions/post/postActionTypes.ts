import { IPost } from '../../../@types';

interface SetPostsAction {
    readonly type: 'SET_POSTS';
    payload: IPost[];
}

interface SetPostsLoadingAction {
    readonly type: 'SET_POSTS_LOADING';
    payload: boolean;
}

interface SetPostsErrorAction {
    readonly type: 'SET_POSTS_ERROR';
    payload: string;
}

export type PostAction =
    | SetPostsAction
    | SetPostsLoadingAction
    | SetPostsErrorAction;
