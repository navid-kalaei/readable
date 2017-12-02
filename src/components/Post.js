import React, {Component} from 'react';
import Header from './Header';
import * as api from '../utils/api';

class Post extends Component {

    state = {};

    componentWillMount() {
        const { postId } = this.props.match.params;
        api.fetchPost(postId).then((post) => this.setState(post))
    }

    render() {
        console.log(this.state);
        return(
            <div>
                <Header
                    title={this.state.title}
                    author={this.state.author}
                    timestamp={this.state.timestamp}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>
                                {this.state.body}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;