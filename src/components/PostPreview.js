import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {votePost} from "../actions/posts";
import Moment from 'react-moment';
import ThumpUpIcon from 'react-icons/lib/md/thumb-up'
import ThumpDownIcon from 'react-icons/lib/md/thumb-down'

class PostPreview extends Component {

    upVote = () => (this.props.votePost({id:this.props.post.id, vote:1}));
    downVote = () => (this.props.votePost({id:this.props.post.id, vote:-1}));

    render() {
        const { title, body, author, category, timestamp, voteScore, commentCount } = this.props.post;

        return (
            <div>
                <div className="post-preview">
                    <a href="post.html">
                        <h2 className="post-title">
                            {title}
                        </h2>
                        <h3 className="post-subtitle">
                            {body}
                        </h3>
                    </a>
                    <p className="post-meta">Posted by{' '}
                        <span className="font-weight-bold font-italic">{author}</span>{' '}
                        on <span className="font-italic"><Moment format="MMM Do YYYY">{timestamp}</Moment></span>
                        <br/>
                        <br/>
                        <span className="d-flex justify-content-between">
                    <span>comments ({commentCount})</span>
                    <span>
                        <ThumpDownIcon onClick={this.downVote}/> {voteScore} <ThumpUpIcon onClick={this.upVote}/>
                    </span>
                </span>
                        <span className="badge badge-pill badge-dark">{category}</span>
                        <br/>
                    </p>
                </div>
                <hr/>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPreview);