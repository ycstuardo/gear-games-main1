const express = require("express");
const pool = require("../../database");
const createBrand = require("../../services/brands/createBrand");
const deleteBrand = require("../../services/brands/deleteBrand");
const getBrand = require("../../services/brands/getbrand");
const getBrands = require("../../services/brands/getBrands");
const updateBrand = require("../../services/brands/updateBrand");
const router = express.Router();

// CREATE brand
router.post("/brand", async (req, res) => {
  createBrand(req, res);
});

// READ all brands
router.get("/brands", async (req, res) => {
  getBrands(req, res);
});

// READ single brand
router.get("/brand/:id", async (req, res) => {
  getBrand(req, res);
});

// UPDATE brand
router.put("/brand/:id", async (req, res) => {
  updateBrand(req, res);
});

// DELETE brand
router.delete("/brand/:id", async (req, res) => {
  deleteBrand(req, res);
});

module.exports = router;
