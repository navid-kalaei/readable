import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Moment from 'react-moment';
import PostFooter from './PostFooter';

class PostPreview extends Component {

    render() {
        const {id, title, body, author, category, timestamp, voteScore, commentCount} = this.props.post;
        return (
            <div>
                <div className="post-preview">
                    <NavLink to={`/${category}/${id}`}>
                        <h2 className="post-title">
                            {title}
                        </h2>
                        <h3 className="post-subtitle">
                            {body}
                        </h3>
                    </NavLink>
                    <div className="post-meta">Posted by{' '}
                        <span className="font-weight-bold font-italic">{author}</span>{' '}
                        on <span className="font-italic"><Moment format="MMM Do YYYY">{timestamp}</Moment></span>
                        <br/>
                        <br/>
                        <PostFooter
                            voteScore={voteScore}
                            postId={id}
                            category={category}
                            commentCount={commentCount}
                        />
                        <br/>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}


export default PostPreview;