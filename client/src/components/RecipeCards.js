import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeCards() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/recipes`)
      .then((r) => r.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
}

export default RecipeCards;
