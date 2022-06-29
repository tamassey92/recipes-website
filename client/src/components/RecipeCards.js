import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeCards({recipes, delete_recipe}) {

  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipeCard delete_recipe={delete_recipe} recipe={recipe} />;
      })}
    </div>
  );
}

export default RecipeCards;
