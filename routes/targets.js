const express = require("express");
const router = express.Router();
const targetController = require("../controllers/targetController");

// READ ALL Targets
router.get("/", targetController.target_read_all);

// CREATE Target
router.post("/", targetController.target_create);

// READ Target
router.get("/:id", targetController.target_read);

// UPDATE Target
router.put("/:id", targetController.target_update);

// DELETE Target
router.delete("/:id", targetController.target_delete);

module.exports = router;
