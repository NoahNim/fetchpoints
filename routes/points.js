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
    user.transactionList.push({
        payer: company.payer,
        points: `-${payment.points}`,
        timestamp: payment.timestamp
    });

    console.log(currentTransaction);

    return res.json(currentTransaction);
}))

router.get('/users/:userid/add/company/:id', asyncHandler(async (req, res) => {
    const userId = req.params.userid;
    const companyId = req.params.id;

    const user = await UserList[userId];
    const company = await UserList[companyId];

    let addition = await new Transaction(user, company.points, new Date());
    let currentTransaction = addition.addPoints();
    user.transactionList.push({
        payer: company.payer,
        points: addition.points,
        timestamp: addition.timestamp
    });

    console.log(currentTransaction);

    return res.json(currentTransaction);
}))

router.get('/users/:id/transactions', asyncHandler(async (req, res) => { 
    const userId = req.params.id;

    const user = await UserList[userId];

    transactionList = [];

    user.transactionList.forEach(transaction => {
        if (transaction != null) {
            transactionList.push(transaction);
        }
    })

    return res.json(transactionList);
}))


module.exports = router;