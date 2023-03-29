const express = require("express");
const router = express.Router();
const createUser = require("../../services/users/createUser");
const getUser = require("../../services/users/getUser");
const getUsers = require("../../services/users/getUsers");
const updateUser = require("../../services/users/updateUser");
const login = require("../../services/users/login");

router.get("/users", (req, res) => {
  getUsers(req, res);
});

// GET one user by ID
router.get("/users/:id", (req, res) => {
  getUser(req, res);
});

// POST a new user
router.post("/users", (req, res) => {
  createUser(req, res);
});

// PUT or update an existing user by ID
router.put("/users/:id", (req, res) => {
  updateUser(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

module.exports = router;
