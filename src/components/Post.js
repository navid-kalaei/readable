import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchComments} from "../actions/comments";
import Header from './Header';
import ContentFooter from './ContentFooter';
import Comment from './Comment';

class Post extends Component {

    componentDidMount() {
        this.props.fetchComments(this.props.id);
    }

    render() {
        console.log(this.props);
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
                            <ContentFooter
                                commentCount={this.props.commentCount}
                                voteScore={this.props.voteScore}
                                category={this.props.category}
                                postId={this.props.id}
                            />
                            {this.props.comments && this.props.comments.map((comment) => (
                                <Comment
                                    key={comment.id}
                                    body={comment.body}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({posts, comments}, ownProps) => {
    const postId = ownProps.match.params.postId;
    // TODO: hard coded index 0
    // TODO: if the post was not added to store before an error raises, like refreshing a post page
    const post = posts.filter((p) => (p.id === postId))[0];

    return {
        ...post,
        comments: comments[postId]
    }
};


const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            fetchComments
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(Post);