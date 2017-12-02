import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CommentFooter from './CommentFooter';


class Comment extends Component {

    render() {
        const {id, author, body, timestamp, voteScore} = this.props.comment;

        return(
            <div className="col-lg-12 col-md-12 mx-auto bg-light rounded">
                <p>{body}</p>
                <CommentFooter
                    commentId={id}
                    author={author}
                    timestamp={timestamp}
                    voteScore={voteScore}
                />
            </div>
        );
    }
}



export default Comment;