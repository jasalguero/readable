import React, { Component } from "react";
import { connect } from "react-redux";
import { loadComments } from "../../actions";
import { Button } from "semantic-ui-react";

import PostDetails from "../../components/PostDetails";
import CommentList from "../../components/CommentList";
import NewCommentModal from "../../components/NewCommentModal";

class PostRoute extends Component {
  state = {
    isNewCommentModalOpen: false
  };

  componentWillMount() {
    const { dispatch, postId } = this.props;

    dispatch(loadComments(postId));
  }

  saveComment(comment) {
    console.log("create comment", comment);
  }

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        <h1>Post {post.id}</h1>
        <ul>
          <li>should have controls to edit or delete the post</li>
          <li>should have a control to add a new comment.</li>
          <li>implement comment form however you want (inline, modal, etc.)</li>
          <li>comments should also have controls for editing or deleting</li>
        </ul>

        {/* POST DETAILS */}
        <PostDetails post={post} />

        {/* COMMENT LIST */}
        <CommentList comments={comments} />

        {/* ADD COMMENT*/}
        <Button primary
          onClick={() =>
            this.setState({
              isNewCommentModalOpen: true
            })}
        >
          Create Comment
        </Button>

        <NewCommentModal
          isOpen={this.state.isNewCommentModalOpen}
          onCreateComment={this.saveComment}
          onRequestClose={() =>
            this.setState({
              isNewCommentModalOpen: false
            })}
        />
      </div>
    );
  }
}

function mapStateToProps({ posts = [], comments = [] }, { postId }) {
  return {
    post: posts.find(post => post.id === postId) || {},
    comments: comments.sort((c1, c2) => c1 - c2)
  };
}

export default connect(mapStateToProps)(PostRoute);
