import React, { Component } from "react";
import { connect } from "react-redux";
import { savePost } from "../../actions";
import { withRouter } from "react-router";

import PostForm from "../../components/PostForm";

class EditPostRoute extends Component {
  savePost = post => {
    const { dispatch, history } = this.props;
    dispatch(savePost(post));
    history.push("/");
  };

  render() {
    const { post, categories } = this.props;
    return (
      <div className="home">
        <h1>Edit Post {post.id}</h1>
        <PostForm
          post={post}
          categories={categories}
          onSavePost={this.savePost}
        />
      </div>
    );
  }
}

function mapStateToProps({ posts = [], categories = [] }, { postId }) {
  return {
    post: posts.find(post => post.id === postId) || {},
    categories
  };
}

export default withRouter(connect(mapStateToProps)(EditPostRoute));
