import * as api from '../utils/api';

import {FETCH_POSTS, FETCH_POST, ADD_POST, UPDATE_POST, DELETE_POST, SORT_BY_VOTE, SORT_BY_DATE} from './actionTypes';


export const fetchPosts = (category = null) => (dispatch) => (
    api.fetchPosts(category).then((posts) => {

        return dispatch({
            type: FETCH_POSTS,
            category,
            posts
        })
    })
);

export const fetchPost = (id) => (dispatch) => (
    api.fetchPost(id).then((post) => (
        dispatch({
            type: FETCH_POST,
            post
        })
    ))
);

export const addPost = ({title, body, author, category}) => (dispatch) => (
    api.addPost({title, body, author, category}).then((post) => {
        return dispatch({
            type: ADD_POST,
            post
        });
    }
));

export const editPost = ({id, title, body}) => (dispatch) => (
    api.editPost({id, title, body}).then((post) =>
        dispatch({
            type: UPDATE_POST,
            post
        })
    )
);

export const deletePost = (id) => (dispatch) => (
    api.deletePost(id).then((post) => (
        dispatch({
            type: DELETE_POST,
            post
        })
    ))
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

export const sortPostsByDate = () => (dispatch) => (
    dispatch({
        type: SORT_BY_DATE
    })
);

export const sortPostsByVote = () => (dispatch) => (
    dispatch({
        type: SORT_BY_VOTE
    })
);