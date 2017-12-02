import * as api from '../utils/api';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

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

export const voteComment = ({id, vote}) => (dispatch) => (
    api.voteComment({id, vote}).then((comment) => (
            dispatch({
                type: UPDATE_COMMENT,
                comment
            })
        )
    )
);