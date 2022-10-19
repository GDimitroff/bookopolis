import React, { useContext, useEffect, useReducer } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

import { useAuthContext } from './AuthContext';
import booksReducer from '../reducers/booksReducer';
import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  ADD_BOOK_LOADING,
  ADD_BOOK_SUCCESS,
  ADD_FAVORITE_BOOK_SUCCES,
} from '../utils/actions';

const initialState = {
  booksLoading: true,
  booksError: false,
  books: [],
  addBookLoading: true,
  addedBooks: [],
  favoriteBooks: [],
};

const BooksContext = React.createContext();

const BooksProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [state, dispatch] = useReducer(booksReducer, initialState);

  const addBook = async (bookId) => {
    dispatch({ type: ADD_BOOK_LOADING });

    try {
      const book = state.books.find((b) => b.id === bookId);
      const bookRef = doc(db, 'books', bookId);
      await updateDoc(bookRef, { added: user.uid });
      dispatch({ type: ADD_BOOK_SUCCESS, payload: book });
    } catch (error) {}
  };

  const addFavoriteBook = () => {
    console.log('add favorite book');
  };

  useEffect(() => {
    if (!user) return;

    const fetchBooks = async () => {
      dispatch({ type: GET_BOOKS_LOADING });

      try {
        const data = await getDocs(collection(db, 'books'));
        const books = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        dispatch({
          type: GET_BOOKS_SUCCESS,
          payload: { userId: user.uid, books },
        });
      } catch (error) {
        dispatch({ type: GET_BOOKS_ERROR });
      }
    };

    fetchBooks();
  }, [user]);

  return (
    <BooksContext.Provider value={{ ...state, addBook, addFavoriteBook }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksProvider;
