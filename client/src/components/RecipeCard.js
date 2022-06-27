import React, { useEffect, useState } from "react";
import RecipeCards from "./RecipeCards";

function RecipeCard({recipe}) {
  return (
    <div className="recipecard">
      <main className="grid">
        <article>
          <img src={recipe.img_url} alt={recipe.name}></img>
          <div class="title">
            <h3 name={recipe.name}>{recipe.name}</h3>
            <button>Go To Recipe</button>
          </div>
        </article>
      </main>
    </div>
  );
}

export default RecipeCard;
