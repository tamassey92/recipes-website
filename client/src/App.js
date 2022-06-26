import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import RecipeList from './components/RecipeList'
import Login from './components/Login'
import "./App.css"

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const [formData, setFormData] = useState([])
  const [errors, setErrors] = useState(false)

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });

    // fetch('/recipes')
    // .then(res => res.json())
    // .then(setRecipes);

  },[]);


  // Reroute user to <Login /> Component if not authenticated
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    <div>
      <Navbar setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
      <RecipeList />

      {/* <RecipeCard /> */}
      
      {/* {filteredRecipes.map((recipe) => { 
        return <RecipeCard delete_recipe={delete_recipe} recipe={recipe} />;
      })} */}
      <div className="main">

      </div>
    </div>
  )
}

export default App;

