import { ADD_COMMENTS } from "../actions";

function commentsReducer(state = {}, action) {
  switch (action.type) {
    case ADD_COMMENTS:
      const { comments } = action;
      return comments;
    default:
      return state;
  }
}

export default commentsReducer;
