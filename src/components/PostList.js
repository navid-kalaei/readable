import React, {Component} from 'react';
import PostPreview from './PostPreview';


class PostList extends Component {

    render() {
        return (
            <div>
                <PostPreview/>
                <PostPreview/>
                <PostPreview/>
            </div>
        );
    }
}

export default PostList;