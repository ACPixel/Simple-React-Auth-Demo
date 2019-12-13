import React, { useContext } from "react";
import { AuthContext, PrivateRoute } from "../AuthContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Private() {
  return <div>This is private</div>;
}

export default function Index() {
  const context = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Login state: {context.authed ? "logged in" : "logged out"}</div>
          <div>
            <button
              onClick={() => {
                context.login();
              }}
            >
              Log in
            </button>
            <button
              onClick={() => {
                context.logout();
              }}
            >
              Log out
            </button>
          </div>
          <div>
            <Link to="/private">Try to get private route.</Link>
          </div>
        </Route>
        <PrivateRoute path="/private" component={Private} />
      </Switch>
    </Router>
  );
}
