import React from 'react';
import ThumpUpIcon from 'react-icons/lib/md/thumb-up'
import ThumpDownIcon from 'react-icons/lib/md/thumb-down'

export default () => (
    <div>
        <div className="post-preview">
            <a href="post.html">
                <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                </h3>
            </a>
            <p className="post-meta">Posted by{' '}
                <a href="#">Start Bootstrap</a>{' '}
                on September 24, 2017
                <br/>
                <br/>
                <div className="d-flex justify-content-between">
                    <div>comments (15)</div>
                    <div><ThumpDownIcon/> like <ThumpUpIcon/></div>
                </div>
                <span className="badge badge-pill badge-dark">navid</span>
                <span className="badge badge-pill badge-dark">navid</span>
                <span className="badge badge-pill badge-dark">navid</span>
                <br/>
            </p>
        </div>
        <hr/>
    </div>
);