import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {votePost, deletePost} from "../actions/posts";
import {fetchPost} from '../actions/editables';
import {deleteComments} from '../actions/comments';
import ThumpUpIcon from 'react-icons/lib/md/thumb-up'
import ThumpDownIcon from 'react-icons/lib/md/thumb-down'


class PostFooter extends Component {

    upVote = () => (this.props.votePost({id: this.props.postId, vote: 1}));
    downVote = () => (this.props.votePost({id: this.props.postId, vote: -1}));

    removePost = () => {
        this.props.deleteComments(this.props.postId);
        this.props.deletePost(this.props.postId);
    };

    addPostToEditables = () => (this.props.fetchPost(this.props.postId));

    render() {
        return (

            <span>
                <span className="d-flex justify-content-between">
                        <span>comments ({this.props.commentCount})</span>
                        <span>
                            <span style={{marginRight: "15px"}}>
                                <ThumpDownIcon onClick={this.downVote}/> {this.props.voteScore} <ThumpUpIcon onClick={this.upVote}/>
                            </span>
                            <button className="btn-sm btn-primary" data-toggle="modal" data-target="#editPostModal" onClick={this.addPostToEditables}>EDIT</button>
                            <button className="btn-sm btn-danger" onClick={this.removePost}>Remove</button>
                        </span>
                    </span>
                <span className="badge badge-pill badge-dark">{this.props.category}</span>
            </span>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            votePost,
            deletePost,
            fetchPost,
            deleteComments
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(PostFooter);