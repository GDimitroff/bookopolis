import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_BOOK_LOADING,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
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
    case GET_BOOK_LOADING: {
      return {
        ...state,
        bookLoading: true,
        bookError: false,
      };
    }
    case GET_BOOK_SUCCESS: {
      return {
        ...state,
        bookLoading: false,
        book: action.payload,
      };
    }
    case GET_BOOK_ERROR: {
      return { ...state, bookLoading: false, bookError: true };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default booksReducer;
