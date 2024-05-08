import { Router } from 'express';
import { addRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from '../controller/recipe.controller.js';
import { verifyToken } from '../controller/user.controller.js';
const router = Router();

router.post('/addrecipe', verifyToken, addRecipe)
router.get('/allrecipies', verifyToken, getAllRecipes)
router.delete('/deleterecipe/:recipeId', verifyToken, deleteRecipe)
router.put('/updaterecipe/:recipeId', verifyToken, updateRecipe)
router.get("/getsinglerecipe/:recipeId", verifyToken, getRecipeById)

export { router as recipeRouter };