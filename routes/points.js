const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const User = require("../db/payer")
const Transaction = require("../db/payer.js")

router.get('/users', asyncHandler(async (req, res) => {
    const users = await User.findAll();

    return res.json(users);
}))