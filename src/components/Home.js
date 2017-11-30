import React, {Component} from 'react';
import PostList from './PostList';

class Home extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <PostList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;