import React from 'react';
import Moment from 'react-moment';
import ThumpUpIcon from 'react-icons/lib/md/thumb-up'
import ThumpDownIcon from 'react-icons/lib/md/thumb-down'

export default ({ props }) => (
    <div>
        <div className="post-preview">
            <a href="post.html">
                <h2 className="post-title">
                    {props.title}
                </h2>
                <h3 className="post-subtitle">
                    {props.body}
                </h3>
            </a>
            <p className="post-meta">Posted by{' '}
                <span className="font-weight-bold font-italic">{props.author}</span>{' '}
                on <span className="font-italic"><Moment format="MMM Do YYYY">{props.timestamp}</Moment></span>
                <br/>
                <br/>
                <span className="d-flex justify-content-between">
                    <span>comments ({props.commentCount})</span>
                    <span><ThumpDownIcon/> {props.voteScore} <ThumpUpIcon/></span>
                </span>
                <span className="badge badge-pill badge-dark">{props.category}</span>
                <br/>
            </p>
        </div>
        <hr/>
    </div>
);