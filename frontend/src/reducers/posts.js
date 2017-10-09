import { ADD_POSTS, ADD_POST, UPDATE_POST, REMOVE_POST } from "../actions";

function postReducer(state = {}, action) {
  let post;
  let newState;
  switch (action.type) {
    case ADD_POSTS:
      const { posts } = action;
      return posts;
    case ADD_POST:
      post = action.post;
      newState = state.slice(0);
      newState.push(post);
      return newState;
    case UPDATE_POST:
      post = action.post;
      newState = state.slice(0);
      return newState.map(p => (p.id === post.id ? post : p));
    case REMOVE_POST:
      post = action.post;
      newState = state.slice(0);
      return newState.filter(p => p.id !== post.id);
    default:
      return state;
  }
}

export default postReducer;
