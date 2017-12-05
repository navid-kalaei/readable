import sortBy from 'sort-by';
import {ADD_POST, DELETE_POST, FETCH_POSTS, SORT_BY_DATE, UPDATE_POST} from "../actions/posts";


const initialState = [];

export default (posts = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.posts;

        case ADD_POST:
            return [...(posts || []), action.post];

        case DELETE_POST:
            return posts.filter((p) => p.id !== action.post.id);

        case UPDATE_POST:
            const updatedPost = action.post;

            return posts.map((p) => p.id === updatedPost.id ?
                {
                    ...p,
                    ...updatedPost
                } :
                p
            );

        case SORT_BY_DATE:
            const sortedPosts = [...posts];
            return sortedPosts.sort(sortBy('timestamp'));

        default:
            return posts;
    }
};