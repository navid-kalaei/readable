import * as api from '../utils/api';


export const FETCH_COMMENT ='FETCH_COMMENT';

export const fetchComment = (id) => (dispatch) => (
    api.fetchComment(id).then((comment) => (
        dispatch({
            type: FETCH_COMMENT,
            comment
        })
    ))
);