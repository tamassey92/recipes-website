import React from 'react'

function RecipeCards({ name, image, link }) {
    return (
        <div className="recipecard">
        <main className="grid">
            <article>
                <img src={image} alt={name}></img>
                <div className="title">
                    <h3>{name}</h3>
                    <button>{link}</button>
                </div>
            </article>
        </main>
    </div>
  )
}

export default RecipeCards