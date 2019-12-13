import React, { useState, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(false);

  const Login = () => {
    //this is where you would handle login logic;
    setAuthed(true);
  };

  const Logout = () => {
    //this is where you would handle logout logic;
    setAuthed(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authed: authed,
        login: Login,
        logout: Logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function PrivateRoute({ component: PrivateComponent, ...rest }) {
  const context = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        context.authed === true ? (
          <PrivateComponent {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export { PrivateRoute, AuthProvider, AuthContext };
