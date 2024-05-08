import Recipe from "../models/recipe.model.js";

export const addRecipe = async (req, res) => {
    try {
        const { name, description, image, ingredients } = req.body;
        if (!name) {
            return res.status(400).json({ error: "Recipe Name is Required" })
        }
        if (!description) {
            return res.status(400).json({ error: "Recipe Description is Required" })
        }
        if (!image) {
            return res.status(400).json({ error: "Recipe Image is Required" })
        }
        if (!ingredients) {
            return res.status(400).json({ error: "Recipe Ingredients is Required" })
        }
        const createdBy = req.user.userId;

        const newRecipe = new Recipe({
            name,
            description,
            image,
            ingredients,
            createdBy
        });

        const savedRecipe = await newRecipe.save();
        res.status(201).json({ message: 'Recipe added successfully', recipe: savedRecipe });
    } catch (error) {
        console.error('Error adding recipe:', error);
        res.status(500).json({ error: 'An error occurred while adding recipe' });
    }
};


export const getAllRecipes = async (req, res) => {
    try {
        const createdBy = req.user.userId;
        const recipes = await Recipe.find({ createdBy });
        res.status(200).json({ recipes });
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ error: 'An error occurred while fetching recipes' });
    }
};

export const getRecipeById = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const createdBy = req.user.userId;

        const recipe = await Recipe.findOne({ _id: recipeId, createdBy });

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found or unauthorized' });
        }

        res.status(200).json({ recipe });
    } catch (error) {
        console.error('Error fetching recipe by ID:', error);
        res.status(500).json({ error: 'An error occurred while fetching recipe' });
    }
};



//deleting recipes
export const deleteRecipe = async (req, res) => {
    try {
        const { recipeId } = req.params;
        const createdBy = req.user.userId;

        const recipe = await Recipe.findOne({ _id: recipeId, createdBy });
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found or unauthorized' });
        }

        await Recipe.deleteOne({ _id: recipeId });

        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).json({ error: 'An error occurred while deleting recipe' });
    }
};




//update recipes
export const updateRecipe = async (req, res) => {
    try {
        const { recipeId } = req.params;

        const { name, description, image, ingredients } = req.body;
        if (!name) {
            return res.status(400).json({ error: "Name is Required" })
        }
        if (!description) {
            return res.status(400).json({ error: "Description is Required" })
        }
        if (!image) {
            return res.status(400).json({ error: "Image is Required" })
        }
        if (!ingredients) {
            return res.status(400).json({ error: "Ingredients is Required" })
        }

        let recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        if (recipe.createdBy.toString() !== req.user.userId) {
            return res.status(403).json({ error: 'You are not authorized to update this recipe' });
        }

        recipe.name = name;
        recipe.description = description;
        recipe.image = image;
        recipe.ingredients = ingredients;

        recipe = await recipe.save();

        res.status(200).json({ message: 'Recipe updated successfully', recipe });
    } catch (error) {
        console.error('Error updating recipe:', error);
        res.status(500).json({ error: 'An error occurred while updating recipe' });
    }
};



