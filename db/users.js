const User = require("./classes");
const Transaction = require("./classes");

const UserList = {
    1: new User(1, "David", 5000),
    2: new User(2, "Andy", 9000),
    3: new User(3, "Tiana", 9999),
    4: new User(4, "Rob", 7000)
}

module.exports = UserList