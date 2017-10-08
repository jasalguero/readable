import { ADD_POSTS } from "../actions";

function postReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POSTS:
      const { posts } = action;
      return posts;
    default:
      return state;
  }
}

export default postReducer;
