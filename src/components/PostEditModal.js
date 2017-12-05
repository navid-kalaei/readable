import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editPost} from '../actions/posts';
import {dismissEditablePost} from '../actions/editables';


class PostEditModal extends Component {

    state = {
        body: '',
        title: ''
    };

    onChange = (field) => (ev) => {
        this.setState({[field] : ev.target.value})
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const id = this.props.id;
        const {title, body} = this.state;
        this.props.editPost({id, title, body});
        this.props.dismissEditablePost(id);
        this.setState({body: '', title:''});
    };

    dismissPost = () => (this.props.dismissEditablePost(this.props.id));

    componentWillReceiveProps(nextProps) {
        this.setState({body: nextProps.body, title:nextProps.title})
    }

    render() {
        return (
            <div>
                {/*<!-- Modal -->*/}
                <div className="modal fade" id="editPostModal" tabIndex={-1} role="dialog" aria-labelledby="editPostModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editPostModalLabel">Edit Post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.dismissPost}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form method="POST" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="editPostTitleInput">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            id="editPostTitleInput"
                                            placeholder="Title"
                                            onChange={this.onChange('title')}
                                            value={this.state.title}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editPostInput">Post</label>
                                        <textarea
                                            type="text"
                                            name="body"
                                            className="form-control"
                                            id="editPostInput"
                                            placeholder="Comment"
                                            onChange={this.onChange('body')}
                                            value={this.state.body}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.dismissPost}>Close</button>
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
            editPost,
            dismissEditablePost
        },
        dispatch
    )
);

const mapStateToProps = (store) => {
    return {...store.editables.post};
};

export default connect(mapStateToProps, mapDispatchToProps)(PostEditModal);