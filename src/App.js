import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Category from './components/Category';
import Home from './components/Home';
import {fetchCategories} from './actions/categories';

class App extends Component {

    componentWillMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div>
                <Nav/>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/:category" component={Category}/>
                </Switch>

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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
