import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./Config";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import EmailSignUp from "./pages/signUp/EmailSignUp";
import postWriting from "./pages/postWriting/PostWriting";
//import for component test
import Card from "./components/card/Card";

function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signUp/email" component={EmailSignUp} />
        <Route exact path="/post/writing" component={postWriting} />
        <Route exact path="/test" component={Card} />
      </Switch>
    </Router>
  );
}

export default Routes;
