const express = require('express')
const router = express.Router();
const recipeController = require('../controllers/recipeController')

/**
 * App Routes
 */

router.get('/', recipeController.homepage)
router.get('/categories', recipeController.exploreCategories)
router.get('/categories/:id', recipeController.exploreCategoriesById)
router.get('/recipe/:id', recipeController.exploreRecipe)


module.exports =  router;