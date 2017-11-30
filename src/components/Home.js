import React from 'react';
import Header from './Header';
import PostList from './PostList';

const Home = () => (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <PostList/>
                </div>
            </div>
        </div>
    </div>
);

export default Home;