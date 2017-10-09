import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button, Confirm } from "semantic-ui-react";
import { deletePost } from "../actions";

import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";

class HomeRoute extends Component {
  state = {
    isDeletePostConfirmOpen: false,
    selectedPost: undefined
  };

  deletePost = () => {
    const { dispatch } = this.props;
    dispatch(deletePost(this.state.selectedPost));
    this.cancelDeletePost();
  }

  cancelDeletePost = () => {
    this.setState({
      isDeletePostConfirmOpen: false,
      selectedPost: undefined
    });
  };

  handleDeletePost = post => {
    this.setState({
      isDeletePostConfirmOpen: true,
      selectedPost: post
    });
  };

  render() {
    return (
      <div className="home">
        <h1>Home</h1>

        {/* CATEGORIES */}
        <CategoryList categories={this.props.categories} />

        {/* POST LIST */}
        <PostList
          posts={this.props.posts}
          onDeletePost={this.handleDeletePost}
        />

        {/* ADD POST*/}
        <Button primary>
          <Link to="posts/new">Create Post</Link>
        </Button>

        {/* DELETE POST CONFIRMATION  */}
        <Confirm
          open={this.state.isDeletePostConfirmOpen}
          onCancel={this.cancelDeletePost}
          onConfirm={this.deletePost}
        />
      </div>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  };
}

export default withRouter(connect(mapStateToProps)(HomeRoute));
