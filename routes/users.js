const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// CREATE User
router.post('/', userController.user_create);
// READ User
router.get('/', userController.user_read);
// UPDATE User
router.put('/', userController.user_update);
// DELETE User
router.delete('/', userController.user_delete);

module.exports = router;
