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

export function addPost(posts) {
  return {
    type: ADD_POST,
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
