import React from 'react'
import Navbar from './components/Navbar';
import RecipeCard from './components/RecipeCard';
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <RecipeCard />
      <div className="main">

      </div>
    </div>
  )
}

export default App;

