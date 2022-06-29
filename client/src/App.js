import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import Search from "./components/Search";
import "./App.css";
import RecipeCards from "./components/RecipeCards";

const App = () => {
  // console.log(id)
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

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

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

  const delete_recipe = function(recipe) {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      // DELETE does not need a response, in fact it seems to hate a response
      // .then((r) => r.json())
      .then(setRecipes([...recipes.filter((item) => item.name !== recipe.name)]))
  }


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
      <Search handleRecSearch={handleRecSearch} />
      <RecipeCards delete_recipe={delete_recipe} recipes={filteredRecipes}/>

    </div>
  );
};

export default App;
