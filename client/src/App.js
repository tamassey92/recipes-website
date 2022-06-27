import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      }
    });

    fetch("/recipes")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  // Reroute user to <Login /> Component if not authenticated
  if (!currentUser)
    return (
      <>
        <Login error={"please login"} setCurrentUser={setCurrentUser} />

        <SignUp setCurrentUser={setCurrentUser} />
      </>
    );

  return (
    <div className="main">
      <Navbar setCurrentUser={setCurrentUser} />
      <RecipeList />

    </div>
  );
};

export default App;


{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar setCurrentUser={setCurrentUser}/>}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
    </Route>
  </Route>
</Routes>
</BrowserRouter> */}