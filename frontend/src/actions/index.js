import {
  fetchCategories,
  fetchPosts,
  fetchPost,
  fetchComments
} from "../utils/api";

export const LOAD_CATEGORIES_AND_POSTS = "LOAD_CATEGORIES_AND_POSTS";
export const LOAD_POST = "LOAD_POST";
export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const ADD_POST = "ADD_POST";
export const ADD_POSTS = "ADD_POSTS";
export const ADD_COMMENTS = "ADD_COMMENTS";

export function loadCategoriesAndPosts() {
  return dispatch => {
    return Promise.all([fetchCategories(), fetchPosts()]).then(data => {
      dispatch(addCategories(data[0]));
      dispatch(addPosts(data[1]));
    });
  };
}

export function loadPost(postId) {
  return dispatch => {
    fetchPost(postId).then(post => {
      dispatch(addPost(post));
    });
  };
}

export function loadComments(postId) {
  return dispatch => {
    fetchComments(postId).then(comments => {
      dispatch(addComments(comments));
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
