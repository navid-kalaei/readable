import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './components/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
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

                <Home/>

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
