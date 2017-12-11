import {DISMISS_EDITABLE_COMMENT, DISMISS_EDITABLE_POST, FETCH_COMMENT, FETCH_POST} from '../actions/actionTypes';


const initialState = {
    comment: {},
    post: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENT:
            return {
                ...state,
                comment: action.comment
            };

        case DISMISS_EDITABLE_COMMENT:
            return {
                ...state,
                comment: {}
            };

        case FETCH_POST:
            return {
                ...state,
                post: action.post
            };

        case DISMISS_EDITABLE_POST:
            return {
                ...state,
                post: {}
            };

        default:
            return state
    }
}