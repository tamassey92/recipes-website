import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import RecipeCard from "./components/RecipeCard";
import "./App.css";
import RecipeCards from "./components/RecipeCards";

const App = () => {
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
      {/* <Search handleRecSearch={handleRecSearch} /> */}
      {/* <RecipeList /> */}
      {/* {filteredRecipes.map((recipe) => { 
        return <RecipeCard recipe={recipe} />;
      })} */}
      <RecipeCards/>

    </div>
  );
};

export default App;
