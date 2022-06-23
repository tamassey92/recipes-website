# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Recipe.destroy_all
User.destroy_all
Review.destroy_all

puts "Creating categories"

vegetarian = Category.create(name: "Vegetarian")
seafood = Category.create(name: "Seafood")
meat = Category.create(name: "Meat")

puts "Creating recipes..."

f1 = Recipe.create(name: "Vegetable Lo-Mein", 
link: "https://girlwiththeironcast.com/vegetable-lo-mein/", 
img_url: "https://girlwiththeironcast.com/wp-content/uploads/2021/02/118A3704.jpg", 
category_id: vegetarian.id)

f2 = Recipe.create(name: "Spicy Sriracha Shrimp Tacos", 
link: "https://peasandcrayons.com/2017/04/spicy-sriracha-shrimp-tacos-with-cilantro-lime-slaw.html", 
img_url: "https://peasandcrayons.com/wp-content/uploads/2017/04/spicy-sriracha-shrimp-tacos-cilantro-lime-slaw-recipe-peasandcrayons-blog2x-0305.jpg", 
category_id: seafood.id)

f3 = Recipe.create(name: "Chicken Piccata", 
link: "https://www.healthyseasonalrecipes.com/healthy-chicken-piccata/", 
img_url: "https://www.healthyseasonalrecipes.com/wp-content/uploads/2015/02/healthy-chicken-piccata-008.jpg", 
category_id: meat.id)


f4 = Recipe.create(name: "Mushroom Stroganoff",
link: "https://www.skinnytaste.com/mushroom-stroganoff/",
img_url: "https://www.skinnytaste.com/wp-content/uploads/2012/09/Mushroom-Stroganoff-3.jpg",
category_id: vegetarian.id)

f5 = Recipe.create(name: "Crispy Tofu w/ Coconut Quinoa & Broccolini",
link: "https://www.bonappetit.com/recipe/actually-good-tofu-with-coconut-quinoa-and-broccolini",
img_url: "https://assets.bonappetit.com/photos/5c76b52db92fa32bcef844e0/1:1/w_2240,c_limit/Basically-tofu-broccolini-01.jpg",
category_id: vegetarian.id)

f6 = Recipe.create(name: "Scallops & Risotto",
link: "https://pinchofyum.com/brown-butter-scallops-parmesan-risotto",
img_url: "https://pinchofyum.com/wp-content/uploads/Scallop-Risotto-4-2.jpg",
category_id: seafood.id)

f7 = Recipe.create(name: "Salmon w/ Maple-Soy Glaze",
link: "https://www.skinnytaste.com/air-fryer-salmon-with-maple-soy-glaze/",
img_url: "https://www.skinnytaste.com/wp-content/uploads/2019/08/Air-Fryer-Salmon-with-Maple-Soy-Glaze-4.jpg",
category_id: seafood.id)

f8 = Recipe.create(name: "Pork Carnitas",
link: "https://www.gimmesomeoven.com/instant-pot-crispy-carnitas/",
img_url: "https://www.gimmesomeoven.com/wp-content/uploads/2017/03/Instant-Pot-Carnitas-Recipe-6-1.jpg",
category_id: meat.id)

f9 = Recipe.create(name: "Stuffed Peppers",
link: "https://healthyfitnessmeals.com/stuffed-bell-peppers/#wprm-recipe-container-34425",
img_url: "https://healthyfitnessmeals.com/wp-content/uploads/2019/09/Stuffed-peppers-6.jpg",
category_id: meat.id)

f10 = Recipe.create(name: "Chicken Pad Thai", 
link: "https://thecleaneatingcouple.com/healthy-chicken-pad-thai/", 
img_url: "https://thecleaneatingcouple.com/wp-content/uploads/2018/06/healthy-pad-thai-1.jpg", 
category_id: meat.id)

f11 = Recipe.create(name: "Honey Garlic Pork Chops", link: "https://happyhomefairy.com/recipe-honey-garlic-pork-chops/", 
img_url: "https://i2.wp.com/happyhomefairy.com/wp-content/uploads/2017/03/Easy-Honey-Garlic-Pork-Chops-so-good.jpg?w=1200&ssl=1", 
category_id: meat.id)

f12 = Recipe.create(name: "Chorizo & Egg Chilaquiles", 
link: "https://www.seriouseats.com/chorizo-egg-salsa-verde-chilaquiles-recipe", 
img_url: "https://www.seriouseats.com/thmb/cdvqNqgjE7XV1gy95QfE2njwTDw=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__imgs__2017__06__Chilaquiles__20170531_3-6797684ee0524211b290674841b50890.jpeg", 
category_id: meat.id)

f13 = Recipe.create(name: "Egg Salad",
link: "https://feelgoodfoodie.net/recipe/healthy-egg-salad/", 
img_url: "https://feelgoodfoodie.net/wp-content/uploads/2018/08/Healthy-Egg-Salad-17.jpg", 
category_id: vegetarian.id)

puts "Creating users..."

greg = User.create(username: "garnold")
courtney = User.create(username: "cgarcia")
taylor = User.create(username: "tmassey")

puts "Creating reviews..."

r1 = Review.create(comment: "Delicious" , user_id: greg.id, recipe_id: f1.id)
r2 = Review.create(comment: "Not very flavorful", user_id: courtney.id, recipe_id: f2.id)
r3 = Review.create(comment: "Pretty good", user_id: taylor.id, recipe_id: f3.id)