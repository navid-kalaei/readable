import * as api from '../utils/api';


import {FETCH_COMMENT, DISMISS_EDITABLE_COMMENT, FETCH_POST, DISMISS_EDITABLE_POST} from './actionTypes';

export const fetchComment = (id) => (dispatch) => (
    api.fetchComment(id).then((comment) => (
        dispatch({
            type: FETCH_COMMENT,
            comment
        })
    ))
);

export const dismissEditableComment = (id) => (dispatch) => (
    dispatch({
        type: DISMISS_EDITABLE_COMMENT,
        id
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

export const dismissEditablePost = (id) => (dispatch) => (
    dispatch({
        type: DISMISS_EDITABLE_POST,
        id
    })
);