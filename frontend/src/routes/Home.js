import React, { Component } from "react";
import CategoryList from "../components/CategoryList";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'


class HomeRoute extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <ul>
          <li>
            should list all of the posts ordered by voteScore (highest score
            first)
          </li>
          <li>
            should have a control for changing the sort method for the list,
            including at minimum, order by voteScore and order by timestamp
          </li>
          <li>should have a control for adding a new post</li>
        </ul>

        {/* CATEGORIES */}
        <CategoryList categories={this.props.categories} />
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  };
}

export default withRouter(connect(mapStateToProps)(HomeRoute));
