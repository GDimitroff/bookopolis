import React, { useContext, useEffect, useReducer } from 'react';
import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { db, auth } from '../firebase';
import {
  ADD_BOOK_SUCCESS,
  BOOK_LOADING,
  USER_LOADING,
  USER_SIGN_IN,
  USER_SIGN_OUT,
} from '../utils/actions';
import autReducer from '../reducers/authReducer';

const initialState = {
  userLoading: true,
  user: null,
  bookLoading: false,
};

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(autReducer, initialState);

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const addBook = async (book) => {
    dispatch({ type: BOOK_LOADING });

    try {
      const userRef = doc(db, 'users', state.user.userId);
      await updateDoc(userRef, {
        addedBooks: [...state.user.addedBooks, book],
      });
      dispatch({ type: ADD_BOOK_SUCCESS, payload: book });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: USER_LOADING });

      if (user) {
        const { uid: id, email } = user;

        const fetchUser = async () => {
          const data = await getDocs(collection(db, 'users'));
          const users = data.docs.map((doc) => ({ ...doc.data() }));
          const existingUser = users.find((user) => user.userId === id);

          if (existingUser)
            dispatch({
              type: USER_SIGN_IN,
              payload: existingUser,
            });
          else {
            const userRef = doc(db, 'users', id);
            const newUser = {
              userId: id,
              email: email,
              addedBooks: [],
              favoriteBooks: [],
            };

            await setDoc(userRef, newUser);
            dispatch({
              type: USER_SIGN_IN,
              payload: newUser,
            });
          }
        };

        fetchUser();
      } else {
        dispatch({ type: USER_SIGN_OUT });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        signInWithGoogle,
        createUser,
        logout,
        addBook,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
