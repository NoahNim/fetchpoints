const { User } = require("./classes");
const { Transaction } = require("./classes");

const UserList = {
    1: new User(1, "David", 5000),
    2: new User(2, "Andy", 9000),
    3: new User(3, "Tiana", 9999),
    4: new User(4, "Rob", 7000),
    5: new User(5, "Amazon", 1000),
    6: new User(6, "QFC", 500),
    7: new User(7, "Pacifico", 1000),
    8: new User(8, "Apple", 7000)
}

module.exports = UserList