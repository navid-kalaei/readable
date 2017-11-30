import * as api from '../utils/api';
import { fetchComments } from './comments';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const fetchPosts = (category = null) => (dispatch) => (
    api.fetchPosts(category).then((posts) => {
        //fetch comments of each post to use it's number on homepage and later usages
        posts.map((post) =>(fetchComments(post.id)(dispatch)));

        return dispatch({
            type: FETCH_POSTS,
            category,
            posts
        })
    })
);

export const votePost = ({ id, vote }) => (dispatch) => (
    api.votePost({id, vote}).then((post) =>
        dispatch(
            {
                type: UPDATE_POST,
                post
            }
        ))
);
