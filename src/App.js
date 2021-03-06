import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogIn from "./containers/LogIn";
import SignUp from "./containers/SignUp";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faClock,
  faBell,
  faEye
} from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Publish from "./containers/Publish";
library.add(faUser, faClock, faBell, faEye, faSearch);

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [user, setUser] = useState(newState);
  return (
    <>
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/publish">
            <Publish />
          </Route>
          <Route path="/log_in">
            <LogIn setUser={setUser} />
          </Route>
          <Route path="/sign_up">
            <SignUp setUser={setUser} />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>{" "}
        <Footer />
      </Router>
    </>
  );
}

export default App;
