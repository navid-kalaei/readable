import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addPost} from '../actions/posts';

class PostAdd extends Component {

    state = {
        author: '',
        body: '',
        title: '',
        category: ''
    };

    onChange = (field) => (ev) => {
        this.setState({[field]: ev.target.value})
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        const {author, body, title, category} = this.state;
        this.props.addPost({title, body, author, category});
        this.setState(
            {
                author: '',
                body: '',
                title: '',
                category: ''
            }
        );
    };


    componentDidMount() {
        const categories = this.props.categories;
        const initCategory = Array.isArray(categories) && categories.length ? categories[0] : 'uncategorized';
        this.setState({category: this.props.categories})
    }


    render() {
        const {author, body, title, category} = this.state;
        const storeCategories = this.props.categories;

        return (
            <div>
                {/*<!-- Modal -->*/}
                <div className="modal fade" id="postAddModal" tabIndex={-1} role="dialog" aria-labelledby="postAddModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="postAddModalLabel">Add A Post</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form method="POST" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="titleInput">Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            id="titleInput"
                                            placeholder="Title"
                                            required
                                            onChange={this.onChange('title')}
                                            value={title}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="postInput">Post</label>
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
                                    <div className="form-row">
                                        <div className="form-group col-6">
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
                                        <div className="form-group col-6">
                                            <label htmlFor="categoryInput">Category</label>
                                            <select
                                                id="categoryInput"
                                                className="form-control text-capitalize"
                                                onChange={this.onChange('category')}
                                                value={category}
                                                required
                                                aria-required="true"
                                            >
                                                <option value="">Choose One</option>
                                                {storeCategories && storeCategories.map((c) => (
                                                    <option key={`postModal/${c}`} value={c} className="text-capitalize">{c}</option>
                                                ))}
                                            </select>
                                        </div>
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
            addPost
        },
        dispatch
    )
);

const mapStateToProps = ({categories}) => {
    return {
        categories: categories.reduce((categories, category) => {
            categories.push(category.name);
            return categories;
        }, [])
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);