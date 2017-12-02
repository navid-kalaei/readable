import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ContentFooter from './ContentFooter';


class Comment extends Component {

    render() {
        return(
            <div>
                <p>{this.props.body}</p>
            </div>
        );
    }
}



export default Comment;