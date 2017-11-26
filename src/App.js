import React, {Component} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>

                <Header/>

                {/*Main Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Man must explore, and this is exploration at its greatest
                                    </h2>
                                    <h3 className="post-subtitle">
                                        Problems look mighty small from 150 miles up
                                    </h3>
                                </a>
                                <p className="post-meta">Posted by
                                    <a href="#">Start Bootstrap</a>
                                    on September 24, 2017</p>
                            </div>
                            <hr/>
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        I believe every human has a finite number of heartbeats. I don't intend to
                                        waste any of mine.
                                    </h2>
                                </a>
                                <p className="post-meta">Posted by
                                    <a href="#">Start Bootstrap</a>
                                    on September 18, 2017</p>
                            </div>
                            <hr/>
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Science has not yet mastered prophecy
                                    </h2>
                                    <h3 className="post-subtitle">
                                        We predict too much for the next year and yet far too little for the
                                        next ten.
                                    </h3>
                                </a>
                                <p className="post-meta">Posted by
                                    <a href="#">Start Bootstrap</a>
                                    on August 24, 2017</p>
                            </div>
                            <hr/>
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Failure is not an option
                                    </h2>
                                    <h3 className="post-subtitle">
                                        Many say exploration is part of our destiny, but it’s actually our
                                        duty to future generations.
                                    </h3>
                                </a>
                                <p className="post-meta">Posted by
                                    <a href="#">Start Bootstrap</a>
                                    on July 8, 2017</p>
                            </div>
                            <hr/>
                            {/*Pager*/}
                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                {/*Footer*/}
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="#">
                  <span className="fa-stack fa-lg">
                    <span className="fa fa-circle fa-stack-2x"></span>
                    <span className="fa fa-twitter fa-stack-1x fa-inverse"></span>
                  </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                  <span className="fa-stack fa-lg">
                    <span className="fa fa-circle fa-stack-2x"></span>
                    <span className="fa fa-facebook fa-stack-1x fa-inverse"></span>
                  </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                  <span className="fa-stack fa-lg">
                    <span className="fa fa-circle fa-stack-2x"></span>
                    <span className="fa fa-github fa-stack-1x fa-inverse"></span>
                  </span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted">Copyright &copy; Your Website 2017</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
