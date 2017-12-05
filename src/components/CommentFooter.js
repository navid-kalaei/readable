import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {voteComment, deleteComment} from "../actions/comments";
import {fetchComment} from '../actions/editables';
import ThumpUpIcon from 'react-icons/lib/md/thumb-up'
import ThumpDownIcon from 'react-icons/lib/md/thumb-down'
import Moment from 'react-moment';


class PostFooter extends Component {

    upVote = () => (this.props.voteComment({id: this.props.commentId, vote: 1}));
    downVote = () => (this.props.voteComment({id: this.props.commentId, vote: -1}));
    deleteComment = () => (this.props.deleteComment(this.props.commentId));

    addCommentToEditableConcepts = () => (this.props.fetchComment(this.props.commentId));

    render() {
        const timestamp = this.props.timestamp / 1000;
        return (
            <span>
                <span className="d-flex justify-content-between">
                        <span>{this.props.author} on <Moment unix format="MMM Do YYYY">{timestamp}</Moment></span>
                        <span>
                            <span style={{marginRight: "15px"}}>
                                <ThumpDownIcon onClick={this.downVote}/> {this.props.voteScore} <ThumpUpIcon onClick={this.upVote}/>
                            </span>
                            <button className="btn-sm btn-primary" data-toggle="modal" data-target="#editCommentModal" onClick={this.addCommentToEditableConcepts}>EDIT</button>
                            <button
                                className="btn-sm btn-danger"
                                onClick={this.deleteComment}
                            >
                                Remove
                            </button>
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
            voteComment,
            deleteComment,
            fetchComment
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(PostFooter);