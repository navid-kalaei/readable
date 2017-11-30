import {FETCH_POSTS, UPDATE_POST} from "../actions/posts";


const initialState = {};

export default (posts = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.posts;

        case UPDATE_POST:
            const updatedPost = action.post;

            return posts.map((p) => p.id === updatedPost.id ?
                {
                    ...p,
                    ...updatedPost
                } :
                p
            );

        default:
            return posts;
    }
};