import React, { useContext, useEffect, useReducer } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';
import { USER_LOADING, USER_SIGN_IN, USER_SIGN_OUT } from '../utils/actions';
import autReducer from '../reducers/authReducer';

const initialState = {
  loading: true,
  user: null,
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: USER_LOADING });

      if (user) {
        const { uid: id, email } = user;
        dispatch({
          type: USER_SIGN_IN,
          payload: { id, email },
        });
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
