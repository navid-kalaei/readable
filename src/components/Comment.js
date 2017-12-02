import React from 'react';
import CommentFooter from './CommentFooter';


export default Comment = (props) => {

    const {id, author, body, timestamp, voteScore} = props.comment;

    return (
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