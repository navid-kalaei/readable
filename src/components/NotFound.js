import React from 'react';
import Header from './Header';


export default () => (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    <p className="text-uppercase text-center display-1">404</p>
                    <p className="text-uppercase text-center display-1">Not Found</p>
                </div>
            </div>
        </div>
    </div>
);