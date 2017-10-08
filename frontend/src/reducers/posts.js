import { ADD_POSTS } from "../actions";

function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_POSTS:
      const { posts } = action;
      return posts;

    default:
      return state;
  }
}

export default categoriesReducer;
