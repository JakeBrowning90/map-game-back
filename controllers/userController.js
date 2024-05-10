require("dotenv").config();
const User = require("../models/user");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.user_read_all = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find().sort({ score: 1 }).exec();
  res.json(allUsers);
});

exports.user_create = asyncHandler(async (req, res, next) => {
  // TODO: add validation for user name and score
  const errors = validationResult(req);

  const user = new User({
    name: req.body.name,
    score: req.body.score,
  });

  if (!errors.isEmpty()) {
    res.json(errors.array());
  } else {
    await user.save();
    res.json(user);
  }
});

exports.user_read = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).exec();
  res.json(user);
});

exports.user_update = asyncHandler(async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    score: req.body.score,
    _id: req.params.id,
  });

  await User.findByIdAndUpdate(req.params.id, user);
  res.json(user);
});

exports.user_delete = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.json("Deleted User");
});
