import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
// import RecipeList from "./components/RecipeList";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
// import Search from "./components/Search";
import RecipeCard from "./components/RecipeCard";
// import { TextField } from "@mui/material";
// import {Route, Switch} from "react-router-dom"
import "./App.css";

const App = () => {
  console.log("Testing")
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });

    fetch("/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  function handleRecSearch(e) {
    if (e.target.value !== undefined) {
      const filteredRec = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) 
          ||
          recipe.link.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setFilteredRecipes(filteredRec);
    }
    else {
      setFilteredRecipes(recipes);
    }
  }
  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  // Reroute user to <Login /> Component if not authenticated
  if (!currentUser)
    return (
      <>
        <Login error={"please login"} setCurrentUser={setCurrentUser} />

        <SignUp setCurrentUser={setCurrentUser} />
      </>
    );

  return (
    <div className="main">
      <Navbar setCurrentUser={setCurrentUser} />
      {/* <Switch>
        <Route path="/allRecipes">
          <RecipeList/>
        </Route> */}
      {/* <Search handleRecSearch={handleRecSearch} /> */}
      {/* <RecipeList /> */}
      {filteredRecipes.map((recipe, i) => { 
        return <RecipeCard recipe={recipe} key={i} />;
      })}
{/* </Switch> */}
    </div>
  );
};

export default App;


{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar setCurrentUser={setCurrentUser}/>}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
    </Route>
  </Route>
</Routes>
</BrowserRouter> */}