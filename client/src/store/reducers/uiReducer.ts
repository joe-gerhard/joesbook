import { uiAction } from '../actions/ui/uiActions';

export interface IuiState {
    modalOpen: boolean;
    shouldReloadPosts: boolean;
}

const initialState: IuiState = {
    modalOpen: false,
    shouldReloadPosts: true,
};

const uiReducer = (state = initialState, action: uiAction) => {
    switch (action.type) {
        case 'SET_MODAL_OPEN':
            return {
                ...state,
                modalOpen: action.payload,
            };
        case 'SET_SHOULD_RELOAD_POSTS':
            return {
                ...state,
                shouldReloadPosts: action.payload,
            };
        default:
            return state;
    }
};

export default uiReducer;
