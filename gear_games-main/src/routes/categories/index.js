const express = require("express");
const router = express.Router();
const createCategory = require("../../services/categories/createCategory");
const deleteCategory = require("../../services/categories/deleteCategory");
const getCategories = require("../../services/categories/getCategories");
const getCategory = require("../../services/categories/getCategory");
const updateCategory = require("../../services/categories/updateCategory");

// CREATE category
router.post("/category", async (req, res) => {
  createCategory(req, res);
});

// READ all categories
router.get("/categories", async (req, res) => {
  getCategories(req, res);
});

// READ single category
router.get("/category/:id", async (req, res) => {
  getCategory(req, res);
});

// UPDATE category
router.put("/category/:id", async (req, res) => {
  updateCategory(req, res);
});

// DELETE category
router.delete("/category/:id", async (req, res) => {
  deleteCategory(req, res);
});

module.exports = router;
