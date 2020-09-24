import axios from 'axios';

import { IUser } from '../../../@types';
import {
    ISetUserAction,
    ILogoutAction,
    ISetUserLoadingAction,
    ISetUserErrorAction,
    UserAction,
} from './userActionTypes';
import { ThunkAction } from 'redux-thunk';

export const setUser = (user: IUser): ISetUserAction => ({
    type: 'SET_USER',
    payload: user,
});

export const logout = (): ILogoutAction => ({
    type: 'LOGOUT',
});

export const setUserLoading = (): ISetUserLoadingAction => ({
    type: 'SET_USER_LOADING',
});

export const setUserError = (): ISetUserErrorAction => ({
    type: 'SET_USER_ERROR',
});

export const getUser = (): ThunkAction<
    Promise<UserAction>,
    {},
    {},
    UserAction
> => async (dispatch) => {
    dispatch(setUserLoading());

    try {
        const response = await axios.get('/user');

        const { _id, name, email, picture, bio } = response.data;

        if (
            typeof _id === 'string' &&
            typeof name === 'string' &&
            typeof email === 'string' &&
            typeof picture === 'string' &&
            typeof bio === 'string'
        ) {
            const user: IUser = {
                _id,
                name,
                email,
                picture,
                bio,
            };

            return dispatch(setUser(user));
        }

        return dispatch(setUserError());
    } catch (error) {
        return dispatch(setUserError());
    }
};
