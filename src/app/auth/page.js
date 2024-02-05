"use client";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import usePublicAxios from "@/components/hooks/usePublicAxios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const axiosPublic = usePublicAxios();
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // const profile = (name, photo) => {
  //   return updateProfile(auth.currentUser, {
  //     photoURL: photo,
  //     displayName: name,
  //   });
  // };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     if (currentUser) {
  //       // get token and store client
  //       const userInfo = { email: currentUser.email };
  //       axiosPublic.post("/jwt", userInfo).then((res) => {
  //         if (res.data.token) {
  //           localStorage.setItem("access-token", res.data.token);
  //           setLoading(false);
  //         }
  //       });
  //     } else {
  //       // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
  //       localStorage.removeItem("access-token");
  //       setLoading(false);
  //     }
  //   });
  //   return () => {
  //     return unsubscribe();
  //   };
  // }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    // profile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
