import { FETCH_CATEGORIES } from '../actions/actionTypes';


const initialState = [];

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_CATEGORIES: {
            return [...action.categories]
        }
        default: {
            return state;
        }
    }
}