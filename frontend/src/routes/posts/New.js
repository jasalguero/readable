import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createPost } from "../../actions";

import PostForm from "../../components/PostForm";

class NewPostRoute extends Component {
  savePost = post => {
    const { dispatch, history } = this.props;
    dispatch(createPost(post));
    history.push('/');
  };

  render() {
    const { categories } = this.props;
    return (
      <div className="home">
        <h1>New Post</h1>
        <PostForm categories={categories} onSavePost={this.savePost} />
      </div>
    );
  }
}

function mapStateToProps({ categories = [] }, { postId }) {
  return {
    categories
  };
}

export default withRouter(connect(mapStateToProps)(NewPostRoute));
