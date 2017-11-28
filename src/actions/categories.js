import * as api from '../utils/api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

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