import React, { useContext } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

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

  return (
    <AuthContext.Provider
      value={{ user, loading, login, signInWithGoogle, createUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
