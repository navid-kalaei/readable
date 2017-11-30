import React, {Component} from 'react';
import PostPreview from './PostPreview';
import {fetchPosts} from "../actions/posts";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PostList extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {

        const { posts } = this.props || [];
 ;
        return (
            <div>
                {/*<PostPreview/>*/}
                {posts && Array.isArray(posts) && posts.map((post) => (
                    <PostPreview
                        key={post.id}
                        props={post}
                    />
                ))}
            </div>
        );
    }
}


const mapStateToProps = ({posts, comments}) => (
    {
        posts,
        comments
    }
);

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            fetchPosts
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);