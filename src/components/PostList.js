import React, {Component} from 'react';
import PostPreview from './PostPreview';
import {connect} from 'react-redux';

class PostList extends Component {

    render() {

        const { posts } = this.props || [];

        return (
            <div>
                {posts && Array.isArray(posts) && posts.map((post) => (
                    <PostPreview
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        );
    }
}


const mapStateToProps = ({posts}) => (
    {
        posts
    }
);



export default connect(mapStateToProps)(PostList);