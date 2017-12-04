import React, {Component} from 'react';
import {addComment} from '../actions/comments';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class CommentForm extends Component {

    state = {author: "", body: ""};

    onChange = (field) => (ev) => {
        this.setState({[field]: ev.target.value})
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const {author, body} = this.state;
        const {postId} = this.props;
        this.props.addComment({postId, author, body});
        this.setState({author: "", body: ""});
    };

    render() {
        const {author, body} = this.state;
        return (
            <form method="POST" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="authorInput">Author</label>
                    <input
                        type="text"
                        name="author"
                        className="form-control"
                        id="authorInput"
                        placeholder="Author"
                        required
                        onChange={this.onChange('author')}
                        value={author}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="commentInput">Comment</label>
                    <textarea
                        type="text"
                        name="body"
                        className="form-control"
                        id="commentInput"
                        placeholder="Comment"
                        required
                        onChange={this.onChange('body')}
                        value={body}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            addComment
        },
        dispatch
    )
);

const mapStateToProps = (state, ownProps) => (ownProps);

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);