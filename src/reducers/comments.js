import {FETCH_COMMENTS, UPDATE_COMMENT} from "../actions/comments";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                [action.postId]: action.comments
            };
        case UPDATE_COMMENT:
            return state;
        default:
            return state;
    }
}