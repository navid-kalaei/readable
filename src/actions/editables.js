import * as api from '../utils/api';


export const FETCH_COMMENT ='FETCH_COMMENT';
export const DISMISS_EDITABLE_COMMENT = 'DISMISS_EDITABLE_COMMENT';
export const FETCH_POST = 'FETCH_POST';
export const DISMISS_EDITABLE_POST = 'DISMISS_EDITABLE_POST';

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