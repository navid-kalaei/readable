import React from 'react';
import PostList from './PostList';
import Header from './Header';

const Category = ({match}) => {
    const {category} = match.params;

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="display-4 text-capitalize text-center">{category}</h1>
            <hr/>
            <PostList category={category}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;