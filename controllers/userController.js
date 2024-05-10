require('dotenv').config();
const User = require("../models/user");

const asyncHandler = require("express-async-handler");
// const { body, validationResult } = require("express-validator");

// exports.user_list = asyncHandler(async (req, res, next) => {
//     const allUsers = await User.find().exec();
//     res.json(allUsers);
// });