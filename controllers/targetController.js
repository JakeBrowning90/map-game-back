require("dotenv").config();
const Target = require("../models/target");

const asyncHandler = require("express-async-handler");
// const { body, validationResult } = require("express-validator");

// exports.user_list = asyncHandler(async (req, res, next) => {
//     const allUsers = await User.find().exec();
//     res.json(allUsers);
// });

exports.target_create = asyncHandler(async (req, res, next) => {});

exports.target_read = asyncHandler(async (req, res, next) => {});

exports.target_update = asyncHandler(async (req, res, next) => {});

exports.target_delete = asyncHandler(async (req, res, next) => {});