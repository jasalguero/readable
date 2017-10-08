/**
 * API to the local dev server
 */
const API = `http://localhost:3001`;

/**
 * Bogus authorization
 */
const headers = {
  Accept: "application/json",
  Authorization: "123"
};

/**
 * Retrieve all the categories
 */
export function fetchCategories() {
  return fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
}

/**
 * Retrieve all the posts
 */
export function fetchPosts() {
  return fetch(`${API}/posts`, { headers }).then(res => res.json());
}

/**
 * Retrieve all the posts of a category
 * @param {String} category 
 */
export function fetchPostsByCategory(category) {
  return fetch(`${API}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts);
}

/**
 * Retrieve an individual post
 * @param {String} postId 
 */
export function fetchPost(postId) {
  return fetch(`${API}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data.post);
}
