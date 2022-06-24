import React, {useEffect, useState} from "react"
import RecipeCards from "./RecipeCards"


function RecipeList () {
  const [recipe, setRecipe]=useState([])

  useEffect(()=>{
    fetch(`/recipes/`)
    .then((r)=>r.json())
    .then((data)=>setRecipe(data))
  }, [])

  return (
    <div>
        {
        recipe.map((recipe)=>(
          <RecipeCards
          key={recipe.id}
          name={recipe.name}
          image={recipe.img_url}
          link={recipe.link}
          />
        ))}
    </div>)
}

export default RecipeList
