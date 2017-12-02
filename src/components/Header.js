import React from 'react';
import Moment from 'react-moment';
import homeBackground from '../img/home-bg.jpg';
import postBackground from '../img/post-bg.jpg';

export default (props) => {

    // if it has a title so it's a post
    const isHome = !props.title;
    const isPost = !isHome;
    // convert milliseconds to seconds
    const timestamp = isPost ? props.timestamp / 1000 : null;

    const bgUrl = isPost ? postBackground : homeBackground;

    return (
        <header className="masthead" style={{backgroundImage: `url(${bgUrl})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {isHome &&
                        (<div className="site-heading">
                            <h1>Readable</h1>
                            <span className="subheading">A Blog by <span className="font-weight-bold font-italic">Navid</span></span>
                        </div>)
                        }
                        {isPost &&
                        (<div>
                            <div className="post-heading">
                                <h1>{props.title}</h1>
                                <span className="meta">
                                    Posted by{' '}<span className="font-weight-bold font-italic">{props.author}</span>{' '}
                                    on <span className="font-italic"><Moment unix format="MMM Do YYYY">{timestamp}</Moment></span>
                                </span>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};