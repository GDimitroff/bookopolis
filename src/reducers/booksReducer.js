import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ADD_BOOK_LOADING,
  ADD_BOOK_SUCCESS,
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
      const { userId, books } = action.payload;
      const addedBooks = books.filter((book) => book.added?.includes(userId));

      return {
        ...state,
        booksLoading: false,
        books,
        addedBooks,
      };
    }
    case GET_BOOKS_ERROR: {
      return { ...state, booksLoading: false, booksError: true };
    }
    case ADD_BOOK_LOADING: {
      return {
        ...state,
        addBookLoading: true,
      };
    }
    case ADD_BOOK_SUCCESS: {
      return {
        ...state,
        addBookLoading: false,
        addedBooks: [...state.addedBooks, action.payload],
      };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default booksReducer;
