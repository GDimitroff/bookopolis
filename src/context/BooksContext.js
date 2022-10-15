import React, { useContext, useReducer } from 'react';

import booksReducer from '../reducers/booksReducer';
import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_BOOK_LOADING,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
} from '../utils/actions';

const initialState = {
  booksLoading: true,
  booksError: false,
  books: [],
  bookLoading: true,
  bookError: false,
  book: {},
};

const BooksContext = React.createContext();

const BooksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  return (
    <BooksContext.Provider value={{ ...state }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksProvider;
