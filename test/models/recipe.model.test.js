const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    ingredients: [{ type: String, required: true }],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

// Test cases
describe('Recipe Model', () => {
    it('should create a new recipe instance', () => {
        const newRecipe = new Recipe({
            name: 'Test Recipe',
            description: 'Test Description',
            image: 'test.jpg',
            ingredients: ['Ingredient 1', 'Ingredient 2'],
            createdBy: 'user_id'
        });

        expect(newRecipe).toBeInstanceOf(Recipe);
    });
});
