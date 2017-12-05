import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sortPostsByDate} from "../actions/posts";


class SortControl extends Component {

    sortPostsByDate = () => (this.props.sortPostsByDate());

    render() {
        return(
            <div className="d-flex justify-content-center btn-group" data-toggle="buttons">
                <label className="btn btn-secondary" onClick={this.sortPostsByDate}>
                    <input type="radio" name="options" id="sortByDate" autoComplete="off"/>By Date
                </label>
                <label className="btn btn-secondary">
                    <input type="radio" name="options" id="sortByVote" autoComplete="off"/> By Score
                </label>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => (
    bindActionCreators(
        {
            sortPostsByDate
        },
        dispatch
    )
);

const mapStateToPorps = (state) => ({});

export default connect(mapStateToPorps, mapDispatchToProps)(SortControl);