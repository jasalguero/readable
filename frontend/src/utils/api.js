/**
 * API to the local dev server
 */
const API = `http://localhost:3001`;

/**
 * Bogus authorization
 */
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "123"
};

/**
 * Generate uuid-like string
 */
const generateUUID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
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
  return fetch(`${API}/${category}/posts`, { headers }).then(res => res.json());
}

/**
 * Retrieve an individual post
 * @param {String} postId 
 */
export function fetchPost(postId) {
  return fetch(`${API}/posts/${postId}`, { headers }).then(res => res.json());
}

/**
 * Retrieve an individual post
 * @param {String} postId 
 */
export function fetchComments(postId) {
  return fetch(`${API}/posts/${postId}/comments`, { headers }).then(res =>
    res.json()
  );
}

/**
 * Create a new comment
 * @param {String} comment 
 */
export function createComment(comment) {
  const payload = {
    ...comment,
    timestamp: Date.parse(new Date()),
    id: generateUUID()
  };

  return fetch(`${API}/comments`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers
  }).then(res => res.json());
}

/**
 * Updates a comment object
 * @param {String} comment 
 */
export function updateComment(comment) {
  const payload = {
    ...comment,
    timestamp: Date.parse(new Date())
  };
  return fetch(`${API}/comments/${comment.id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers
  }).then(res => res.json());
}

/**
 * Deletes a comment object
 * @param {String} comment 
 */
export function deleteComment(comment) {
  return fetch(`${API}/comments/${comment.id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());
}

/**
 * Create a new post
 * @param {String} post 
 */
export function createPost(post) {
  const payload = {
    ...post,
    timestamp: Date.parse(new Date()),
    id: generateUUID()
  };

  return fetch(`${API}/posts`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers
  }).then(res => res.json());
}

/**
 * Updates a post object
 * @param {String} post 
 */
export function updatePost(post) {
  const payload = {
    ...post,
    timestamp: Date.parse(new Date())
  };
  return fetch(`${API}/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers
  }).then(res => res.json());
}

/**
 * Deletes a post object
 * @param {String} post 
 */
export function deletePost(post) {
  return fetch(`${API}/posts/${post.id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());
}

/**
 * Votes for a post
 * @param {String} post 
 */
export function votePost(post, option) {
  return fetch(`${API}/posts/${post.id}`, {
    method: "POST",
    body: JSON.stringify({option: option}),
    headers
  }).then(res => res.json());
}
