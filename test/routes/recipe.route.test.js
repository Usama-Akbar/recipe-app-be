const { Router } = require('express'); // Import Router from express
const router = Router(); // Initialize a new router instance

const { addRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } = require('../controller/recipe.controller.test.js');
const { verifyToken } = require('../../test/controller/user.controller.test.js'); // Destructure verifyToken from the imported object

router.post('/addrecipe', verifyToken, addRecipe);
router.get('/allrecipies', verifyToken, getAllRecipes);
router.delete('/deleterecipe/:recipeId', verifyToken, deleteRecipe);
router.put('/updaterecipe/:recipeId', verifyToken, updateRecipe);
router.get("/getsinglerecipe/:recipeId", verifyToken, getRecipeById);

module.exports = router;
