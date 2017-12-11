import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/posts';
import {fetchComments} from "../actions/comments";
import Header from './Header';
import PostFooter from './PostFooter';
import Comment from './Comment';
import CommentForm from './CommentForm';


class Post extends Component {

    componentDidMount() {
        if(!this.props.id){
            this.props.fetchPost(this.props.match.params.postId);
        }
        else {
            this.props.fetchComments(this.props.id)
        }
    }

    componentWillReceiveProps(nextProps){
        if(!nextProps.comments){
            nextProps.fetchComments(nextProps.id);
        }
    }

    render() {
        const commentCount = !!this.props.comments ? this.props.comments.length : 0;
        return(
            <div>
                <Header
                    title={this.props.title}
                    author={this.props.author}
                    timestamp={this.props.timestamp}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>
                                {this.props.body}
                            </p>
                            <PostFooter
                                commentCount={commentCount}
                                voteScore={this.props.voteScore}
                                category={this.props.category}
                                postId={this.props.id}
                            />
                            <hr/>
                            {this.props.comments && this.props.comments.map((comment) => (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                />
                            ))}
                            <hr/>
                            <CommentForm postId={this.props.id}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({posts, comments}, ownProps) => {
    const postId = ownProps.match.params.postId;
    const post = posts.filter((p) => (p.id === postId))[0];

    return {
        ...post,
        comments: comments[postId]
    }
};


const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            fetchPost,
            fetchComments
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(Post);