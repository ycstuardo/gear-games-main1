const express = require("express");
const createCommune = require("../../services/commune/createCommune");
const deleteCommune = require("../../services/commune/deleteCommune");
const getCommune = require("../../services/commune/getCommune");
const getCommunes = require("../../services/commune/getCommunes");
const updateCommune = require("../../services/commune/updateCommune");
const router = express.Router();

// get all communes
router.get("/communes", async (req, res) => {
  getCommunes(req, res);
});

// get a single commune by id
router.get("/communes/:id", async (req, res) => {
  getCommune(req, res);
});

// create a new commune
router.post("/communes", async (req, res) => {
  createCommune(req, res);
});

// update a commune by id
router.put("/communes/:id", async (req, res) => {
  updateCommune(req, res);
});

// delete a commune by id
router.delete("/communes/:id", async (req, res) => {
  deleteCommune(req, res);
});

module.exports = router;
