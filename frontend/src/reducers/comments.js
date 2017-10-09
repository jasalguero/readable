import {
  ADD_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from "../actions";

function commentsReducer(state = {}, action) {
  let comment;
  let newState;
  switch (action.type) {
    case ADD_COMMENTS:
      let { comments } = action;
      return comments;
    case ADD_COMMENT:
      comment = action.comment;
      newState = state.slice(0);
      newState.push(comment);
      return newState;
    case UPDATE_COMMENT:
      comment = action.comment;
      newState = state.slice(0);
      return newState.map(c => (c.id === comment.id ? comment : c));
    case REMOVE_COMMENT:
      comment = action.comment;
      newState = state.slice(0);
      return newState.filter(c => c.id !== comment.id);
    default:
      return state;
  }
}

export default commentsReducer;
