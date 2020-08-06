import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Homepage from "./pages/Homepage/Homepage";
import Album from "./pages/Album/Album";
import Tracks from "./pages/Tracks/Tracks";
import Artists from "./pages/Artists/Artists";
import Profile from "./pages/Profile/Profile";
import SigninSignup from "./pages/Signin-Signup/SigninSignup";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/tracks" component={Tracks} />
        <Route path="/albums" component={Album} />
        <Route path="/artists" component={Artists} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={SigninSignup} />
      </Switch>
    </Router>
  );
}

export default App;
