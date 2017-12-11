import * as api from '../utils/api';

import {FETCH_COMMENTS, FETCH_COMMENT, UPDATE_COMMENT, ADD_COMMENT, DELETE_COMMENT, DELETE_COMMENTS} from './actionTypes';

export const fetchComments = (postId = null) => (dispatch) => (
    api.fetchComments(postId).then((comments) => (
        dispatch(
            {
                type: FETCH_COMMENTS,
                comments,
                postId
            }
        )
    ))
);

export const fetchComment = (commentId) => (dispatch) => (
    api.fetchComment(commentId).then((comment) => (
        dispatch({
            type: FETCH_COMMENT,
            comment
        })
    ))
);

export const addComment = ({postId, author, body}) => (dispatch) => (
    api.addComment({postId, author, body}).then((comment) => (
            dispatch({
                type: ADD_COMMENT,
                comment
            })
        )
    )
);


export const deleteComment = (id) => (dispatch) => (
    api.deleteComment(id).then((comment) => (
        dispatch({
            type: DELETE_COMMENT,
            comment
        })
    ))
);

export const deleteComments = (postId) => (dispatch) => (
    dispatch({
        type: DELETE_COMMENTS,
        postId
    })
);

export const editComment = ({id, body}) => (dispatch) => (
    api.editComment({id, body}).then((comment) => (
        dispatch({
            type: UPDATE_COMMENT,
            comment
        })
    ))
);

export const voteComment = ({id, vote}) => (dispatch) => (
    api.voteComment({id, vote}).then((comment) => (
            dispatch({
                type: UPDATE_COMMENT,
                comment
            })
        )
    )
);