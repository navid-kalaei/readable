import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editComment} from '../actions/comments';
import {dismissEditableComment} from '../actions/editables';

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
        this.props.editComment({id, body});
        this.porps.dismissEditableComment(id);
        this.setState({body: ''});
    };

    dismissComment = () => (this.props.dismissEditableComment(this.props.id));

    componentWillReceiveProps(nextProps) {
        this.setState({body: nextProps.body})
    }

    render() {
        return (
            <div>
                {/*<!-- Modal -->*/}
                <div className="modal fade" id="editCommentModal" tabIndex={-1} role="dialog" aria-labelledby="editCommentModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editCommentModalLabel">Edit Comment</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.dismissComment}>
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
                                            value={this.state.body}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.dismissComment}>Close</button>
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
            editComment,
            dismissEditableComment
        },
        dispatch
    )
);

const mapStateToProps = (store) => {
    return {...store.editables.comment};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentEditModal);