import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import "./App.css"

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const [formData, setFormData] = useState([])
  const [errors, setErrors] = useState(false)

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });

    fetch('/productions')
    .then(res => res.json())
    .then(setFormData);

  },[]);

  function handlePost(obj){
      fetch('/productions',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        if(data.errors){
          setErrors(data.errors)
        } else {
          setFormData([...formData,data])
        }
      })
  }

  // function handleRecSearch(e) {
  //   if (e.target.value !== undefined) {
  //     const filteredRec = recipes.filter((recipe) => {
  //       return (
  //         recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) 
  //         ||
  //         recipe.link.toLowerCase().includes(e.target.value.toLowerCase())
  //       );
  //     });
  //     setFilteredRecipes(filteredRec);
  //   }
  //   else {
  //     setFilteredRecipes(recipes);
  //   }
  // }
  // useEffect(() => {
  //   setFilteredRecipes(recipes);
  // }, [recipes]);

  // const URL = "http://localhost:9292/recipes";
  // useEffect(() => {
  //   fetch(URL)
  //     .then((r) => r.json())
  //     // .then(data => console.log(data))
  //     .then((data) => setRecipes(data));
  // }, []);


  const delete_recipe = function(recipe) {
    console.log(recipe)
    fetch(`http://localhost:9292/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(setRecipes(recipes.filter((item) => item.name !== recipe.name)));
      }

  // Reroute user to <Login /> Component if not authenticated
  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
    <div>
      <Navbar />

      {/* <RecipeCard /> */}
      
      {filteredRecipes.map((recipe) => { 
        return <RecipeCard delete_recipe={delete_recipe} recipe={recipe} />;
      })}
      <div className="main">

      </div>
    </div>
  )
}

export default App;

