import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './header'
import Home from './home'
import Recipe from './recipe'
import MealPlanner from './mealplanner'
import ShoppingList from './shoppinglist'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/mealplanner' element={<MealPlanner />} />
        <Route path='/shoppinglist' element={<ShoppingList />} />
      </Routes>
    </>
  )
}

export default App
