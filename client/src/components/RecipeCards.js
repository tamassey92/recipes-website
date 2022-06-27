import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipeCards({recipes}) {

  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
}

export default RecipeCards;
