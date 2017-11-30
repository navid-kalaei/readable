import React from 'react';
import PostList from './PostList';

const Category = ({match}) => {
    const {category} = match.params;

    return (
        <div>
            <h1 className="display-4 text-capitalize text-center">{category}</h1>
            <hr/>
            <PostList category={category}/>
        </div>
    );
};

export default Category;