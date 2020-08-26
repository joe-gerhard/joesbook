interface SetModalOpenAction {
    readonly type: 'SET_MODAL_OPEN';
    payload: boolean;
}

interface SetShouldReloadPostsAction {
    readonly type: 'SET_SHOULD_RELOAD_POSTS';
    payload: boolean;
}

export type uiAction =
    | SetModalOpenAction
    | SetShouldReloadPostsAction;
