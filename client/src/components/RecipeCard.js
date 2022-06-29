import React, { useEffect, useState } from "react";
import RecipeCards from "./RecipeCards";

function RecipeCard({recipe, delete_recipe}) {
  return (
    <div className="recipecard">
      <main className="grid">
        <article>
          <button onClick={() => delete_recipe(recipe)}>Delete</button>
          <img src={recipe.img_url} alt={recipe.name}></img>
          <div className="title">
            <h3 name={recipe.name}>{recipe.name}</h3>
            <a href={recipe.link}>
            <button>Go To Recipe</button>
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}

export default RecipeCard;
