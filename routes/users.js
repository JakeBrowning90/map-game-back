const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// READ ALL Users
router.get("/", userController.user_read_all);

// CREATE User
router.post("/", userController.user_create);

// READ User
router.get("/:id", userController.user_read);

// UPDATE User
router.put("/:id", userController.user_update);

// DELETE User
router.delete("/:id", userController.user_delete);

module.exports = router;
