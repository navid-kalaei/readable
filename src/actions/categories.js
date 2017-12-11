import * as api from '../utils/api';

import {FETCH_CATEGORIES} from './actionTypes';

export const fetchCategories = () => (
    (dispatch) => (
        api.fetchCategories().then(({categories}) => (
            dispatch(
                {
                    type: FETCH_CATEGORIES,
                    categories
                }
            )
        ))
    )
);