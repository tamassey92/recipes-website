import React from 'react'

const RecipeCard = () => {
  return (
    <div className="recipecard">
        <main className="grid">
            <article>
                <img src="https://girlwiththeironcast.com/wp-content/uploads/2021/02/118A3704.jpg" alt="Vegetable Lo-Mein"></img>
                <div class="title">
                    <h3>Card 1</h3>
                    <button>Go To Recipe</button>
                </div>
            </article>

            <article>
                <img src="https://peasandcrayons.com/wp-content/uploads/2017/04/spicy-sriracha-shrimp-tacos-cilantro-lime-slaw-recipe-peasandcrayons-blog2x-0305.jpg" alt="Spicy Sriracha Shrimp Tacos"></img>
                <div class="title">
                    <h3>Card 2</h3>
                    <button>Go To Recipe</button>
                </div>
            </article>

            <article>
                <img src="https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg" alt="Mushroom Stroganoff"></img>
                <div class="title">
                    <h3>Card 3</h3>
                    <button>Go To Recipe</button>
                </div>
            </article>
        </main>
    </div>
  )
}

export default RecipeCard;