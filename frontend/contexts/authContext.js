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
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    console.log("Calling prompt");
    async function handleCallbackResponse(response) {
      console.log(response);
    }
    window.onload = function () {
      console.log("loaded");
      if (window.google) {
        google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleCallbackResponse,
        });
        google.accounts.id.prompt();
      }
    };
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
