import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/posts';
import PostList from './PostList';
import Header from './Header';


class Category extends Component {

    fetchCategoryPosts(category) {
        this.props.fetchPosts(category);
    }

    componentWillReceiveProps(nextProps) {
        const currentCategory = this.props.match.params.category;
        const newCategory = nextProps.match.params.category;

        if (currentCategory !== newCategory) {
            this.fetchCategoryPosts(newCategory);
        }
    }
    componentWillMount() {
        const category = this.props.match.params.category;
        this.fetchCategoryPosts(category);
    }

    render() {
        const {category} = this.props.match.params;
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <h1 className="display-4 text-capitalize text-center">{category}</h1>
                            <hr/>
                            <PostList/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            fetchPosts
        },
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(Category);