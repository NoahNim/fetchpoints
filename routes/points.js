const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const UserList = require("../db/users");
const { Transaction } = require("../db/classes");

router.get('/users', asyncHandler(async (req, res) => {
    const users = await UserList;

    return res.json(users);
}))

router.get('/users/:id', asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const user = await UserList[userId];

    return res.json(user);
}))

router.get('/users/:userid/pay/company/:id', asyncHandler(async (req, res) => {
    const userId = req.params.userid;
    const companyId = req.params.id;

    const user = await UserList[userId];
    const company = await UserList[companyId];

    let payment = await new Transaction(user, company.points, new Date());
    let currentTransaction = payment.subtractPoints();

    console.log(currentTransaction);

    return res.json(currentTransaction);
}))

module.exports = router;