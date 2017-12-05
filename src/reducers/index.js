import { combineReducers } from 'redux';

import categories from './categories';
import posts from './posts';
import comments from './comments';
import editables from './editables';

export default combineReducers(
    {
        categories,
        comments,
        posts,
        editables
    }
);