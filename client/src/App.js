import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Recipes from "./components/Recipes";
import Home from "./components/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });
  }, []);

  function logout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setCurrentUser(null);
    });
  }

  return (
    <div className="main">
      <Navbar currentUser={currentUser} logout={logout} />
      {!currentUser ? (
        <>
          <Login error={"please login"} setCurrentUser={setCurrentUser} />
          <br />
          <SignUp setCurrentUser={setCurrentUser} />
        </>
      ) : (
        <></>
      )}
      <Switch>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route index path="*">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
