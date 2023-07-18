import { Modal } from 'flowbite-react'
import React from 'react'
import GlobalRecipe from './GlobalRecipe'
import RecipeDetails from './RecipeDetails'

const RecipeModal = ({ chosenRecipe, setChosenRecipe, setRecipes, global }) => {
  if(!chosenRecipe) return
  return (
    <Modal dismissible show={chosenRecipe} onClose={() => setChosenRecipe(undefined)} size='7xl'>
      <Modal.Body >
        {
          global ?
            <GlobalRecipe setChosenRecipe={setChosenRecipe} chosenRecipe={chosenRecipe} />
            : <RecipeDetails chosenRecipe={chosenRecipe} setChosenRecipe={setChosenRecipe} setRecipes={setRecipes} />
        }
      </Modal.Body>
    </Modal>
  )
}

export default RecipeModal