import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import GlobalStyle from "./Config";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import PostWriting from "./pages/postWriting/PostWriting";
import Main from "./pages/main/Main";
import EmailSignIn from "./pages/signIn/EmailSignIn";
import Password from "./pages/signIn/Password";

const Root: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/post/writing" component={PostWriting} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/emailSignIn" component={EmailSignIn} />
        <Route exact apth="/searchPassword" component={Password} />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Root;
