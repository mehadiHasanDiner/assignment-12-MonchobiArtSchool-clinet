import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const loggedInByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // update user profile
  const updateLoggedInUser = (user, data) => {
    setLoading(true);
    return updateProfile(user, data);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    createUser,
    signInUser,
    loading,
    logOut,
    loggedInByGoogle,
    updateLoggedInUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
