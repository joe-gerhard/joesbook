import { UserAction } from './user/userActionTypes';
import { uiAction } from './ui/uiActions';
import { PostAction } from './post/postActionTypes';

export type AnyAction = UserAction | uiAction | PostAction;
