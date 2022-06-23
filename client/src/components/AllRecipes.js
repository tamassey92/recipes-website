import React from "react";
import RecipeCard from "./RecipeCard"


function AllCards({recipes}) {

return (
    <main>
        
        <ul className="recipes">
            {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe} />
            }
          )
       }
        </ul>
    </main>
  )
}

export default AllCards