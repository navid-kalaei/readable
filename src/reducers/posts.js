import { FETCH_POSTS } from "../actions/posts";


const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.posts;
        default:
            return state;
    }
};