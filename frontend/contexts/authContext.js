import React from "react";

const initialState = {
  user: null,
  accessToken: null,
  loginError: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

const AuthContext = React.createContext({
  state: initialState,
});

const AuthContextProvider = ({ children }) => {
  React.useEffect(() => {
    if (window.google) {
      !state.user && google.accounts.id.prompt();
    }
  }, []);
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
