import { ADD_CATEGORIES } from "../actions";

function categoriesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CATEGORIES:
      const { categories } = action;
      return categories;

    default:
      return state;
  }
}

export default categoriesReducer;
