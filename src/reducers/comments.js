import { FETCH_COMMENTS } from "../actions/comments";

const initialState = {};

export default (state = initialState, action) => {
    switch (action.typeof) {
        case FETCH_COMMENTS:
            return {
                ...state,
                [action.postId]: action.comments
            };
        default:
            return state;
    }
}