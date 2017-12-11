import {ADD_COMMENT, DELETE_COMMENT, DELETE_COMMENTS, FETCH_COMMENTS, UPDATE_COMMENT} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                [action.postId]: action.comments
            };

        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: [...(state[action.comment.parentId] || []), action.comment]
            };

        case DELETE_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: state[action.comment.parentId].filter((c) => c.id !== action.comment.id)
            };

        case DELETE_COMMENTS:
            const newState = Object.keys(state)
                .filter((postId) => (postId !== action.postId))
                .reduce((newState, postId) =>{
                    newState[postId] = state[postId];
                    return newState;
                }, {});

            newState[action.postId] = [];
            return newState;

        case UPDATE_COMMENT:
            const parentId = action.comment.parentId;
            const newComment = action.comment;
            return {
                ...state,
                [parentId]: state[parentId].map((c) => ( c.id !== newComment.id ? c : newComment))

            };
        default:
            return state;
    }
}