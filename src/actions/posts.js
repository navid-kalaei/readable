import * as api from '../utils/api';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const fetchPosts = (category = null) => (dispatch) => (
    api.fetchPosts(category).then((posts) => {

        return dispatch({
            type: FETCH_POSTS,
            category,
            posts
        })
    })
);

export const addPost = ({title, body, author, category}) => (dispatch) => (
    api.addPost({title, body, author, category}).then((post) => {
        return dispatch({
            type: ADD_POST,
            post
        });
    }
));

export const votePost = ({ id, vote }) => (dispatch) => (
    api.votePost({id, vote}).then((post) =>
        dispatch(
            {
                type: UPDATE_POST,
                post
            }
        ))
);
