const express = require("express");
const createAddress = require("../../services/addresses/createAddress");
const deleteAddress = require("../../services/addresses/deleteAddress");
const getAddress = require("../../services/addresses/getAddress");
const getAddresses = require("../../services/addresses/getAddresses");
const updateAddress = require("../../services/addresses/updateAddress");
const router = express.Router();

// CREATE address
router.post("/addresses", async (req, res) => {
  createAddress(req, res);
});

// READ all addresses
router.get("/addresses", async (req, res) => {
  getAddresses(req, res);
});

// READ single address
router.get("/addresses/:id", async (req, res) => {
  getAddress(req, res);
});

// UPDATE address
router.put("/addresses/:id", async (req, res) => {
  updateAddress(req, res);
});

// DELETE address
router.delete("/addresses/:id", async (req, res) => {
  deleteAddress(req, res);
});

module.exports = router;
