import * as api from '../utils/api';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';

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

