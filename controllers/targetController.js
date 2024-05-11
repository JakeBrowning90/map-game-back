require("dotenv").config();
const Target = require("../models/target");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.target_read_all = asyncHandler(async (req, res, next) => {
  const allTargets = await Target.find().sort({ name: 1 }).exec();
  res.json(allTargets);
});

exports.target_create = asyncHandler(async (req, res, next) => {
  // TODO: validation unneeded?
  const errors = validationResult(req);

  const target = new Target({
    name: req.body.name,
    location: req.body.location,
  });

  if (!errors.isEmpty()) {
    res.json(errors.array());
  } else {
    await target.save();
    res.json(target);
  }
});

exports.target_read = asyncHandler(async (req, res, next) => {
  const target = await Target.findById(req.params.id).exec();
  res.json(target);
});

exports.target_update = asyncHandler(async (req, res, next) => {
  const target = new Target({
    name: req.body.name,
    location: req.body.location,
    _id: req.params.id,
  });

  await Target.findByIdAndUpdate(req.params.id, target);
  res.json(target);
});

exports.target_delete = asyncHandler(async (req, res, next) => {
  await Target.findByIdAndDelete(req.params.id);
  res.json("Deleted Target");
});
