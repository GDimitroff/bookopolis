import React, { useContext, useEffect, useReducer } from 'react';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../firebase';

import { useAuthContext } from './AuthContext';
import booksReducer from '../reducers/booksReducer';
import {
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  USER_LOADING,
  LOAD_USER_BOOKS,
  ADD_BOOK_SUCCESS,
  REMOVE_BOOK_SUCCESS,
  ADD_FAVORITE_BOOK_SUCCESS,
  REMOVE_FAVORITE_BOOK_SUCCESS,
} from '../utils/actions';

const initialState = {
  booksLoading: true,
  booksError: false,
  books: [],
  userLoading: true,
  addedBooks: [],
  favoriteBooks: [],
};

const BooksContext = React.createContext();

const BooksProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [state, dispatch] = useReducer(booksReducer, initialState);

  const addBook = async (book) => {
    try {
      const { id } = user;
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        addedBooks: [...state.addedBooks, book],
      });
      dispatch({ type: ADD_BOOK_SUCCESS, payload: book });
    } catch (error) {
      console.log(error);
    }
  };

  const removeBook = async (bookId) => {
    try {
      const { id } = user;
      const userRef = doc(db, 'users', id);
      const newBooks = state.addedBooks.filter((b) => b.id !== bookId);
      await updateDoc(userRef, {
        addedBooks: newBooks,
      });
      dispatch({ type: REMOVE_BOOK_SUCCESS, payload: bookId });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavoriteBook = async (book) => {
    try {
      const { id } = user;
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        favoriteBooks: [...state.favoriteBooks, book],
      });
      dispatch({ type: ADD_FAVORITE_BOOK_SUCCESS, payload: book });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavoriteBook = async (bookId) => {
    try {
      const { id } = user;
      const userRef = doc(db, 'users', id);
      const newFavoriteBooks = state.favoriteBooks.filter(
        (b) => b.id !== bookId
      );
      await updateDoc(userRef, {
        favoriteBooks: newFavoriteBooks,
      });
      dispatch({ type: REMOVE_FAVORITE_BOOK_SUCCESS, payload: bookId });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) return;

    const fetchUser = async () => {
      dispatch({ type: USER_LOADING });

      const data = await getDocs(collection(db, 'users'));
      const users = data.docs.map((doc) => ({ ...doc.data() }));
      const existingUser = users.find((u) => u.id === user.id);

      if (existingUser)
        dispatch({
          type: LOAD_USER_BOOKS,
          payload: {
            ...existingUser,
            addedBooks: existingUser.addedBooks || [],
            favoriteBooks: existingUser.favoriteBooks || [],
          },
        });
      else {
        const userRef = doc(db, 'users', user.id);
        const newUser = {
          id: user.id,
          email: user.email,
          addedBooks: [],
          favoriteBooks: [],
        };

        await setDoc(userRef, newUser);
        dispatch({
          type: LOAD_USER_BOOKS,
          payload: newUser,
        });
      }
    };

    fetchUser();
  }, [user]);

  useEffect(() => {
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

    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        ...state,
        addBook,
        removeBook,
        addFavoriteBook,
        removeFavoriteBook,
      }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksProvider;
