import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import {fetchCategories} from './actions/categories';

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
                            <Switch>
                                <Route exact path="/" component={PostList}/>
                            </Switch>
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
