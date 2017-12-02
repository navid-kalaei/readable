import React, {Component} from 'react';
import PostPreview from './PostPreview';
import {fetchPosts} from "../actions/posts";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PostList extends Component {

    fetchCategoryPosts(props = this.props) {
        this.props.fetchPosts(props.category);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.category !== this.props.category) {
            this.fetchCategoryPosts(nextProps);
        }
    }
    componentWillMount() {
        this.fetchCategoryPosts();
    }

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

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            fetchPosts
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);