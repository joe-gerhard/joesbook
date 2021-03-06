import { RootState } from '../reducers';
import { IUser } from '../../@types';

export const selectUser = (state: RootState): IUser => ({
    _id: state.user._id,
    name: state.user.name,
    email: state.user.email,
    picture: state.user.picture,
    bio: state.user.bio,
});
export const selectUserIsLoggedIn = (state: RootState) =>
    state.user.isLoggedIn;

export const selectUserIsLoading = (state: RootState) =>
    state.user.isLoading;
