import React from 'react'


const RecipeCard = () => {
  return (
    <div className="recipecard">
        <main className="grid">
            <article>
                <img src="https://girlwiththeironcast.com/wp-content/uploads/2021/02/118A3704.jpg" alt="Vegetable Lo-Mein"></img>
                <div class="title">
                    <h3>Vegetable Lo-Mein</h3>
                    <a href="https://girlwiththeironcast.com/vegetable-lo-mein/">
                    <button>Go To Recipe</button>
                    </a>
                </div>
            </article>

            <article>
                <img src="https://peasandcrayons.com/wp-content/uploads/2017/04/spicy-sriracha-shrimp-tacos-cilantro-lime-slaw-recipe-peasandcrayons-blog2x-0305.jpg" alt="Spicy Sriracha Shrimp Tacos"></img>
                <div class="title">
                    <h3>Spicy Sriracha Shrimp Tacos</h3>
                    <a href="https://peasandcrayons.com/2017/04/spicy-sriracha-shrimp-tacos-with-cilantro-lime-slaw.html">
                    <button>Go To Recipe</button>
                    </a>
                </div>
            </article>

            <article>
                <img src="https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg" alt="Mushroom Stroganoff"></img>
                <div class="title">
                    <h3>Mushroom Stroganoff</h3>
                    <a href="https://www.skinnytaste.com/mushroom-stroganoff/">
                    <button>Go To Recipe</button>
                    </a>
                </div>
            </article>
        </main>
    </div>
  )
}

export default RecipeCard;