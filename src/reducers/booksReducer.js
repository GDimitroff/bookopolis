import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ADD_BOOK_SUCCESS,
  ADD_FAVORITE_BOOK_SUCCESS,
  USER_LOADING,
  LOAD_USER_BOOKS,
  REMOVE_BOOK_SUCCESS,
  REMOVE_FAVORITE_BOOK_SUCCESS,
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
      const { book, id } = action.payload;
      const newBook = { ...book, addedBy: [...book.addedBy, id] };

      const newBooks = state.books.map((b) => {
        if (b.id === book.id) {
          return { ...b, addedBy: [...b.addedBy, id] };
        } else {
          return b;
        }
      });

      return {
        ...state,
        books: newBooks,
        addedBooks: [...state.addedBooks, newBook],
      };
    }
    case REMOVE_BOOK_SUCCESS: {
      const { book, id } = action.payload;

      const newBooks = state.books.map((b) => {
        if (b.id === book.id) {
          return { ...b, addedBy: b.addedBy.filter((userId) => userId !== id) };
        } else {
          return b;
        }
      });
      const newAddedBooks = state.addedBooks.filter((b) => b.id !== book.id);

      return {
        ...state,
        books: newBooks,
        addedBooks: newAddedBooks,
      };
    }
    case ADD_FAVORITE_BOOK_SUCCESS: {
      const { book, id } = action.payload;
      const newBook = { ...book, favoriteBy: [...book.favoriteBy, id] };

      const newBooks = state.books.map((b) => {
        if (b.id === book.id) {
          return { ...b, favoriteBy: [...b.favoriteBy, id] };
        } else {
          return b;
        }
      });

      return {
        ...state,
        books: newBooks,
        favoriteBooks: [...state.favoriteBooks, newBook],
      };
    }
    case REMOVE_FAVORITE_BOOK_SUCCESS: {
      const { book, id } = action.payload;

      const newBooks = state.books.map((b) => {
        if (b.id === book.id) {
          return {
            ...b,
            favoriteBy: b.favoriteBy.filter((userId) => userId !== id),
          };
        } else {
          return b;
        }
      });
      const newFavoriteBooks = state.favoriteBooks.filter(
        (b) => b.id !== book.id
      );

      return {
        ...state,
        books: newBooks,
        favoriteBooks: newFavoriteBooks,
      };
    }
    default: {
      throw new Error(`No matching action type: "${action.type}"`);
    }
  }
};

export default booksReducer;
