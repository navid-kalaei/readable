import {FETCH_COMMENT} from '../actions/editables';


const initialState = {
    comment: {},
    post: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENT:
            return {
                ...state,
                comment: action.comment
            };

        default:
            return state
    }
}