import sortBy from 'sort-by';
import {ADD_POST, DELETE_POST, FETCH_POSTS, SORT_BY_DATE, SORT_BY_VOTE, UPDATE_POST, FETCH_POST} from '../actions/actionTypes';


const initialState = [];

export default (posts = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.posts;

        case FETCH_POST:
            const newPosts = posts.filter((post) => (post.id !== action.post.id));
            newPosts.push(action.post);

            return newPosts;

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
            const sortedPostsByDate = [...posts];
            return sortedPostsByDate.sort(sortBy('-timestamp'));

        case SORT_BY_VOTE:
            const sortedPostsByVote = [...posts];
            return sortedPostsByVote.sort(sortBy('-voteScore'));

        default:
            return posts;
    }
};