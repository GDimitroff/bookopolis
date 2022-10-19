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
import autReducer from '../reducers/authReducer';

const initialState = {
  userLoading: true,
  userError: false,
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
      console.log(user);
    });

    return () => unsubscribe();
  }, []);

  // TODO:
  // useEffect(() => {
  //   if (!user) return;

  //   const fetchUser = async () => {
  //     try {
  //       const data = await getDocs(collection(db, 'users'));
  //       const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  //       const existingUser = users.find((user) => user.userId === user.uid);

  //       if (existingUser) {
  //         setUserInfo(existingUser);
  //       } else {
  //         const userRef = doc(db, 'users', user.uid);
  //         await setDoc(userRef, {
  //           userId: user.uid,
  //           email: user.email,
  //           addedBooks: [],
  //           favoriteBooks: [],
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchUser();
  // }, [user]);

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
