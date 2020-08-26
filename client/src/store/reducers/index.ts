import { combineReducers } from 'redux';

import userReducer from './userReducer';
import uiReducer from './uiReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer,
    post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
