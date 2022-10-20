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

      const bookRef = doc(db, 'books', book.id);
      await updateDoc(bookRef, {
        addedBy: [...book.addedBy, id],
      });

      dispatch({ type: ADD_BOOK_SUCCESS, payload: { book, id } });
    } catch (error) {
      console.log(error);
    }
  };

  const removeBook = async (book) => {
    try {
      const { id } = user;
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        addedBooks: state.addedBooks.filter((b) => b.id !== book.id),
      });

      const bookRef = doc(db, 'books', book.id);
      await updateDoc(bookRef, {
        addedBy: book.addedBy.filter((e) => e !== id),
      });

      dispatch({ type: REMOVE_BOOK_SUCCESS, payload: { book, id } });
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

      const bookRef = doc(db, 'books', book.id);
      await updateDoc(bookRef, {
        favoriteBy: [...book.favoriteBy, id],
      });

      dispatch({ type: ADD_FAVORITE_BOOK_SUCCESS, payload: { book, id } });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavoriteBook = async (book) => {
    try {
      const { id } = user;
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        favoriteBooks: state.favoriteBooks.filter((b) => b.id !== book.id),
      });

      const bookRef = doc(db, 'books', book.id);
      await updateDoc(bookRef, {
        favoriteBy: book.favoriteBy.filter((e) => e !== id),
      });

      dispatch({ type: REMOVE_FAVORITE_BOOK_SUCCESS, payload: { book, id } });
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
        const books = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          addedBy: doc.data().addedBy || [],
          favoriteBy: doc.data().favoriteBy || [],
        }));

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
