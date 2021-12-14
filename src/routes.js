import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import { isAuthenticated } from "./Services/authService";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>pagina inicial</h1>} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute
          path="/Home"
          component={() => (
            <>
              <Header /> <Home />
            </>
          )}
        />
        <PrivateRoute
          path="/Profile"
          component={() => (
            <>
              <Header /> <Profile />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
