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
import { getRole } from "../hooks/utils/useApi";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    if (user) {
      getRole(user?.email).then((data) => setRole(data));
    }
  }, [user]);

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
    setLoading,
    logOut,
    loggedInByGoogle,
    updateLoggedInUser,
    role,
    setRole,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
