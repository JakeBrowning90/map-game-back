const express = require('express');
const router = express.Router();
const targetController = require("../controllers/targetController");

// CREATE Target
router.post('/', targetController.target_create);

// READ Target
router.get('/', targetController.target_read);

// UPDATE Target
router.put('/', targetController.target_update);

// DELETE Target
router.delete('/', targetController.target_delete);

module.exports = router;