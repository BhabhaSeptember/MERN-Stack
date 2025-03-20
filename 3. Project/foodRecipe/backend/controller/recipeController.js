const Recipes = require("../models/recipeModel");

// ========================================= VIEW ALL RECIPES =========================================

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    return res.status(201).json(recipes);
  } catch (error) {
    console.error("Error retrieving all recipes: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ========================================= VIEW RECIPE BY ID =========================================

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    return res.status(201).json(recipe);
  } catch (error) {
    console.error("Error retrieving recipe by ID: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ========================================= ADD RECIPE =========================================

const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time } = req.body;

    if (!title || !ingredients || !instructions) {
      return res
        .status(400)
        .json({ message: "Required fields cannot be empty" });
    }

    const newRecipe = await Recipes.create({
      title,
      ingredients,
      instructions,
      time,
    });
    return res.status(201).json(newRecipe);
  } catch (error) {
    console.error("Error adding recipe: ", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ========================================= EDIT RECIPE =========================================

const editRecipe = async (req, res) => {
    try {
        const { title, ingredients, instructions, time } = req.body;
        let recipe = await Recipes.findById(req.params.id)

        if(recipe) {
            await Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true});
            return res.status(201).json(title, ingredients, instructions, time);
        }
        
      } catch (error) {
        console.error("Error retrieving recipe by ID: ", error);
        return res.status(404).json({ message: "Recipe update error" });
      }
};

// ========================================= DELETE RECIPE =========================================

const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipes.findById(req.params.id);
        return res.status(201).json(recipe);
      } catch (error) {
        console.error("Error retrieving recipe by ID: ", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
};

module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe };
