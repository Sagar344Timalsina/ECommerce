const express = require('express');
const { isAdmin, requireSignIn } = require('../middleware/authMiddleware'); 
const createCategoryController = require("../controllers/CategoryController/createCategory"); 
const deleteCategoryController = require("../controllers/CategoryController/deleteCategory"); 
const getAllcategoryControlller = require("../controllers/CategoryController/getAllCategory");
const singleCategoryController = require("../controllers/CategoryController/getSingleCategory");
const updateCategoryController = require("../controllers/CategoryController/updateCategory")
const router = express.Router();

//routes
// create category
router.post(
  "/create-category",requireSignIn,isAdmin,createCategoryController
);
//delete category
router.delete(
    "/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController
  );
  //getALl category
router.get("/get-all-category", getAllcategoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    updateCategoryController
  );


module.exports = router; 
