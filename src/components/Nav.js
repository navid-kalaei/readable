import React, {Component} from 'react';
import {connect} from 'react-redux';


class Nav extends Component {

    render() {
        const { categories } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Home</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto flex-row-reverse">
                            <li className="nav-item">
                                <a className="nav-link" href="post.html">Add Post</a>
                            </li>
                            {categories && Array.isArray(categories) && categories.map((category) => (
                                <li key={category.path} className="nav-item">
                                    <a className="nav-link" href={category.path}>{category.name}</a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


const mapStateToProps = ({ categories }) => ({
    categories
});

export default connect(mapStateToProps)(Nav);
