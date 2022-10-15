import React, { useContext, useEffect, useReducer } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import booksReducer from '../reducers/booksReducer';
import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
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

  const fetchBooks = async () => {
    dispatch({ type: GET_BOOKS_LOADING });

    try {
      const data = await getDocs(collection(db, 'books'));
      const books = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      dispatch({ type: GET_BOOKS_SUCCESS, payload: books });
    } catch (error) {
      dispatch({ type: GET_BOOKS_ERROR });
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
