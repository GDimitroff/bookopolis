import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
} from '../utils/actions';

const booksReducer = (state, action) => {
  switch (action.type) {
    case GET_BOOKS_LOADING: {
      return {
        ...state,
        booksLoading: true,
      };
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        booksLoading: false,
        books: action.payload,
      };
    }
    case GET_BOOKS_ERROR: {
      return { ...state, booksLoading: false, booksError: true };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default booksReducer;
