import React, { useState, useEffect } from "react";
import Search from "./Search";
import RecipeCards from "./RecipeCards";

function Recipes({setRecipes, recipes}) {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  function handleRecSearch(e) {
    if (e.target.value !== undefined) {
      const filteredRec = recipes.filter((recipe) => {
        return (
          recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          recipe.link.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setFilteredRecipes(filteredRec);
    } else {
      setFilteredRecipes(recipes);
    }
  }

  const delete_recipe = function (recipe) {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      // DELETE does not need a response, in fact it seems to hate a response
      // .then((r) => r.json())
      .then(
        setRecipes([...recipes.filter((item) => item.name !== recipe.name)])
      );
  };

  return (
    <div>
      <h4>Recipes</h4>
      <Search handleRecSearch={handleRecSearch} />
      <RecipeCards delete_recipe={delete_recipe} recipes={filteredRecipes} />
    </div>
  );
}

export default Recipes;
