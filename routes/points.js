const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const UserList = require("../db/users")

router.get('/users', asyncHandler(async (req, res) => {
    const users = await UserList;

    return res.json(users);
}))

router.get('/users/:id', asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const user = await UserList[userId];

    return res.json(user);
}))

router.get('users/:userid/pay/company/:id', asyncHandler(async (req, res) => {
    
}))

module.exports = router;