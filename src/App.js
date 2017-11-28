import React, {Component} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import PostPreview from './components/PostPreview';

class App extends Component {

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

export default App;
