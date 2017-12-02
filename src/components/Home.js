import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/posts";
import Header from './Header';
import PostList from './PostList';

class Home extends Component
{

    componentWillMount() {
        this.props.fetchPosts();
    }

    render()
    {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <PostList/>
                        </div>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);