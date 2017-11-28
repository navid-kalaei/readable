import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import PostPreview from './components/PostPreview';
import { fetchCategories } from './actions/categories';

class App extends Component {

    componentWillMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div>
                <Nav/>

                <Header/>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">

                            <PostPreview/>
                            <PostPreview/>
                            <PostPreview/>
                            <PostPreview/>

                        </div>
                    </div>
                </div>

                <hr/>

                <Footer/>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            fetchCategories
        },
        dispatch
    )
);


export default connect(mapStateToProps, mapDispatchToProps)(App);
