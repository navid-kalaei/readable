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
            const parentId = action.comment.parentId;
            const newComment = action.comment;
            return {
                ...state,
                [parentId]: state[parentId].map((c) => ( c.id != newComment.id ? c : newComment))

            };
        default:
            return state;
    }
}