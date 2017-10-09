import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadComments,
  createComment,
  saveComment,
  deleteComment,
  voteComment,
  deletePost,
  votePost
} from "../../actions";
import { withRouter } from "react-router-dom";
import { Button, Confirm } from "semantic-ui-react";

import PostDetails from "../../components/PostDetails";
import CommentList from "../../components/CommentList";
import CommentModal from "../../components/CommentModal";

class PostRoute extends Component {
  state = {
    isCommentModalOpen: false,
    isDeleteCommentConfirmOpen: false,
    selectedComment: undefined,
    isDeletePostConfirmOpen: false
  };

  componentWillMount() {
    const { dispatch, postId } = this.props;

    dispatch(loadComments(postId));
  }

  deletePost = () => {
    const { dispatch, post, history } = this.props;
    dispatch(deletePost(post));
    this.cancelDeletePost();
    history.push("/");
  };

  cancelDeletePost = () => {
    this.setState({
      isDeletePostConfirmOpen: false
    });
  };

  handleDeletePost = () => {
    this.setState({
      isDeletePostConfirmOpen: true
    });
  };

  handleVotePost = option => {
    const { dispatch, post } = this.props;
    dispatch(votePost(post, option));
  };

  saveComment = comment => {
    const { dispatch, postId } = this.props;
    if (comment.id) {
      dispatch(saveComment(comment));
    } else {
      dispatch(
        createComment({
          ...comment,
          parentId: postId
        })
      );
    }

    this.closeModal();
  };

  deleteComment = () => {
    const { dispatch } = this.props;
    const { selectedComment } = this.state;

    dispatch(deleteComment(selectedComment));
    this.setState({
      isDeleteCommentConfirmOpen: false,
      selectedComment: undefined
    });
  };

  closeModal() {
    this.setState({ isCommentModalOpen: false, selectedComment: undefined });
  }

  handleEditComment = comment => {
    this.setState({ selectedComment: comment, isCommentModalOpen: true });
  };

  handleDeleteComment = comment => {
    this.setState({
      isDeleteCommentConfirmOpen: true,
      selectedComment: comment
    });
  };

  cancelDeleteComment = comment => {
    this.setState({
      isDeleteCommentConfirmOpen: false,
      selectedComment: undefined
    });
  };

  handleVoteComment = (comment, option) => {
    const { dispatch } = this.props;
    dispatch(voteComment(comment, option));
  };

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        <h1>Post {post.id}</h1>

        {/* POST DETAILS */}
        <PostDetails
          post={post}
          onDeletePost={this.handleDeletePost}
          onVotePost={this.handleVotePost}
        />

        {/* COMMENT LIST */}
        <CommentList
          comments={comments}
          onEditComment={this.handleEditComment}
          onDeleteComment={this.handleDeleteComment}
          onVoteComment={this.handleVoteComment}
        />

        {/* ADD COMMENT*/}
        <div className="controls-row">
          <Button
            primary
            onClick={() =>
              this.setState({
                isCommentModalOpen: true,
                selectedComment: undefined
              })}
          >
            Create Comment
          </Button>
        </div>

        {/* COMMENT FORM MODAL  */}
        <CommentModal
          isOpen={this.state.isCommentModalOpen}
          comment={this.state.selectedComment}
          onSaveComment={this.saveComment}
          onRequestClose={() => this.closeModal()}
        />

        {/* DELETE COMMENT CONFIRMATION  */}
        <Confirm
          open={this.state.isDeleteCommentConfirmOpen}
          onCancel={this.cancelDeleteComment}
          onConfirm={this.deleteComment}
        />

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

function mapStateToProps({ posts = [], comments = [] }, { postId }) {
  return {
    post: posts.find(post => post.id === postId) || {},
    comments: comments
      .filter(c => !c.deleted)
      .sort((c1, c2) => c2.voteScore - c1.voteScore)
  };
}

export default withRouter(connect(mapStateToProps)(PostRoute));
