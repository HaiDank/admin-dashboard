import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "./home";
import Recipe from "./recipe";
import MealPlanner from "./mealplanner";
import ShoppingList from "./shoppinglist";
import AddRecipe from "./add";
import FriendRecipe from "./friends";
import GlobalRecipe from "./global";
import RecipeExport from "./export";
import Login from "./login";
import Register from './register';
const UserLayout = () => {
  return (
    <section>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' >
          <Route path='' element={<Recipe />} />
          <Route path='add' element={<AddRecipe />} />
          <Route path='friend' element={<FriendRecipe />} />
          <Route path='global' element={<GlobalRecipe />} />
          <Route path='export' element={<RecipeExport />} />
        </Route>
        <Route path='/mealplanner' element={<MealPlanner />} />
        <Route path='/shoppinglist' element={<ShoppingList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </section>
  )
}

export default UserLayout