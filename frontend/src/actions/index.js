import { fetchCategories, fetchPosts } from "../utils/api";

export const FETCH_CATEGORIES_AND_POSTS = "FETCH_CATEGORIES_AND_POSTS";
export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const ADD_POSTS = "ADD_POSTS";

export function fetchCategoriesAndPosts() {
  return dispatch => {
    return Promise.all([fetchCategories(), fetchPosts()]).then(data => {
      dispatch(addCategories(data[0]));
      dispatch(addPosts(data[1]));
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
