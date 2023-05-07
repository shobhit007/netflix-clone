import React, { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase.config";

const INITIAL_STATE = {
  user: null,
};

export const AuthContext = createContext({
  user: INITIAL_STATE.user,
});

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "user":
      return { ...state, user: payload };
    case "isEmailExists":
      return { ...state, isEmailExists: !state.isEmailExists };
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { user } = state;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userSnapshot) => {
      // if (!userSnapshot) return;

      dispatch({ type: "user", payload: userSnapshot });
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
