const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const UserList = require("../db/users")

router.get('/users', asyncHandler(async (req, res) => {
    const users = await UserList;

    return res.json(users);
}))

module.exports = router;