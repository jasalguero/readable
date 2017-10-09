import {
  ADD_POSTS,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  SET_POST_COMMENTS_COUNT
} from "../actions";

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
    case SET_POST_COMMENTS_COUNT:
      const { postId, numComments } = action;
      newState = state.slice(0);
      return newState.map(p => (p.id !== postId ? p : { ...p, numComments }));
    default:
      return state;
  }
}

export default postReducer;
