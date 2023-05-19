import React, { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase.config";

const INITIAL_STATE = {
  user: null,
  errorMessage: "",
};

export const AuthContext = createContext({
  user: INITIAL_STATE.user,
  errorMessage: "",
  setErrorMessage: () => {},
});

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "user":
      return { ...state, user: payload };
    case "errorMessage":
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { user, errorMessage } = state;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userSnapshot) => {
      // if (!userSnapshot) return;

      dispatch({ type: "user", payload: userSnapshot });
    });

    return unsubscribe;
  }, []);

  const setErrorMessage = (error) =>
    dispatch({ type: "errorMessage", payload: error });

  const value = {
    user,
    errorMessage,
    setErrorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
