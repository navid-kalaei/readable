import React from 'react';

export default () => (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                        <li className="list-inline-item">
                            <a href="https://twitter.com">
                  <span className="fa-stack fa-lg">
                    <span className="fa fa-circle fa-stack-2x"/>
                    <span className="fa fa-twitter fa-stack-1x fa-inverse"/>
                  </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://facebook.com">
                  <span className="fa-stack fa-lg">
                    <span className="fa fa-circle fa-stack-2x"/>
                    <span className="fa fa-facebook fa-stack-1x fa-inverse"/>
                  </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/navid-kalaei">
                  <span className="fa-stack fa-lg">
                    <span className="fa fa-circle fa-stack-2x"/>
                    <span className="fa fa-github fa-stack-1x fa-inverse"/>
                  </span>
                            </a>
                        </li>
                    </ul>
                    <p className="copyright text-muted">Copyright &copy; Your Website 2017</p>
                </div>
            </div>
        </div>
    </footer>
);