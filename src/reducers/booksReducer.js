import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ADD_BOOK_SUCCESS,
  ADD_FAVORITE_BOOK_SUCCESS,
  USER_LOADING,
  LOAD_USER_BOOKS,
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
    case USER_LOADING: {
      return { ...state, userLoading: true };
    }
    case LOAD_USER_BOOKS: {
      const { addedBooks, favoriteBooks } = action.payload;
      return { ...state, addedBooks, favoriteBooks, userLoading: false };
    }
    case ADD_BOOK_SUCCESS: {
      return {
        ...state,
        addedBooks: [...state.addedBooks, action.payload],
      };
    }
    case ADD_FAVORITE_BOOK_SUCCESS: {
      return {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.payload],
      };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default booksReducer;
