import {
  LOAD_BOOKS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_BOOKS,
  UPDATE_FILTERS,
  FILTER_BOOKS,
} from '../utils/actions';

const filtersReducer = (state, action) => {
  switch (action.type) {
    case LOAD_BOOKS: {
      return {
        ...state,
        allBooks: [...action.payload],
        filteredBooks: [...action.payload],
      };
    }
    case SET_GRIDVIEW: {
      return {
        ...state,
        gridView: true,
      };
    }
    case SET_LISTVIEW: {
      return {
        ...state,
        gridView: false,
      };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default filtersReducer;
