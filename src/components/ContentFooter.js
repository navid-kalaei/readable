import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {votePost} from "../actions/posts";
import ThumpUpIcon from 'react-icons/lib/md/thumb-up'
import ThumpDownIcon from 'react-icons/lib/md/thumb-down'

class PostFooter extends Component {

    upVote = () => (this.props.votePost({id: this.props.postId, vote: 1}));
    downVote = () => (this.props.votePost({id: this.props.postId, vote: -1}));

    render() {
        return (

            <span>
                <span className="d-flex justify-content-between">
                        <span>comments ({this.props.commentCount})</span>
                        <span>
                            <span style={{marginRight: "15px"}}>
                                <ThumpDownIcon onClick={this.downVote}/> {this.props.voteScore} <ThumpUpIcon onClick={this.upVote}/>
                            </span>
                            <button className="btn-sm btn-primary">EDIT</button>
                            <button className="btn-sm btn-danger">Remove</button>
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
            votePost
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(PostFooter);