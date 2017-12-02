import React, {Component} from 'react';
import Header from './Header';

class Post extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>
                                harchi k mikhay mizari inja
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;