import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import PostFooter from './PostFooter';

class Post extends Component {

    render() {
        return(
            <div>
                <Header
                    title={this.props.title}
                    author={this.props.author}
                    timestamp={this.props.timestamp}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p>
                                {this.props.body}
                            </p>
                            <PostFooter
                                commentCount={this.props.commentCount}
                                voteScore={this.props.voteScore}
                                category={this.props.category}
                                postId={this.props.id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    const postId = ownProps.match.params.postId;
    // TODO: hard coded index 0
    // TODO: if the post was not added to store before an error raises, like refreshing a post page
    return posts.filter((p) => (p.id === postId))[0];
};

export default connect(mapStateToProps)(Post);