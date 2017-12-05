import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editComment} from '../actions/comments';

class CommentEditModal extends Component {

    state = {
        body: ''
    };

    onChange = (ev) => {
        this.setState({body : ev.target.value})
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const id = this.props.id;
        const {body} = this.state;
        this.props.addPost({id, body});
        this.setState({body: ''});
    };

    componentDidMount() {
        this.setState({body: this.props.body})
    }

    render() {
        const {body} = this.state;
        console.log("constracted");
        return (
            <div>
                {/*<!-- Modal -->*/}
                <div className="modal fade" id="editCommentModal" tabIndex={-1} role="dialog" aria-labelledby="editCommentModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editCommentModalLabel">Edit Comment</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form method="POST" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="titleInput">Author</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            id="titleInput"
                                            placeholder="Title"
                                            value={this.props.author}
                                            disabled
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="postInput">Comment</label>
                                        <textarea
                                            type="text"
                                            name="body"
                                            className="form-control"
                                            id="commentInput"
                                            placeholder="Comment"
                                            onChange={this.onChange}
                                            value={body}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.onSubmit} data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            editComment
        },
        dispatch
    )
);

const mapStateToProps = (store, ownProps) => {
    return ownProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentEditModal);