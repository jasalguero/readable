import * as API from "../utils/api";

export const LOAD_CATEGORIES_AND_POSTS = "LOAD_CATEGORIES_AND_POSTS";
export const LOAD_POST = "LOAD_POST";
export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const ADD_POST = "ADD_POST";
export const ADD_POSTS = "ADD_POSTS";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const UPDATE_POST = "UPDATE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const VOTE_POST = "VOTE_POST";
export const VOTE_COMMENT = "VOTE_COMMENT";

export function loadCategoriesAndPosts() {
  return dispatch => {
    return Promise.all([API.fetchCategories(), API.fetchPosts()]).then(data => {
      dispatch(addCategories(data[0]));
      dispatch(addPosts(data[1]));
    });
  };
}

export function loadPost(postId) {
  return dispatch => {
    API.fetchPost(postId).then(post => {
      dispatch(addPost(post));
    });
  };
}

export function loadComments(postId) {
  return dispatch => {
    API.fetchComments(postId).then(comments => {
      dispatch(addComments(comments));
    });
  };
}

export function createComment(comment) {
  return dispatch => {
    API.createComment(comment).then(data => {
      dispatch(addComment(data));
    });
  };
}

export function saveComment(comment) {
  return dispatch => {
    API.updateComment(comment).then(data => {
      dispatch(updateComment(data));
    });
  };
}

export function deleteComment(comment) {
  return dispatch => {
    API.deleteComment(comment).then(() => {
      dispatch(removeComment(comment));
    });
  };
}

export function createPost(post) {
  return dispatch => {
    API.createPost(post).then(data => {
      dispatch(addPost(data));
    });
  };
}

export function savePost(post) {
  return dispatch => {
    API.updatePost(post).then(data => {
      dispatch(updatePost(data));
    });
  };
}

export function deletePost(post) {
  return dispatch => {
    API.deletePost(post).then(() => {
      dispatch(removePost(post));
    });
  };
}

export function votePost(post, option) {
  return dispatch => {
    API.votePost(post, option).then((updatedPost) => {
      dispatch(updatePost(updatedPost));
    });
  };
}

export function voteComment(comment, option) {
  return dispatch => {
    API.voteComment(comment, option).then((updatedComment) => {
      dispatch(updateComment(updatedComment));
    });
  };
}

export function addCategories(categories) {
  return {
    type: ADD_CATEGORIES,
    categories
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts
  };
}

export function addComments(comments) {
  return {
    type: ADD_COMMENTS,
    comments
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}

export function removeComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function removePost(post) {
  return {
    type: REMOVE_POST,
    post
  };
}
