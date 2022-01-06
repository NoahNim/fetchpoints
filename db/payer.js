class User {
    constructor(payer, points) {
        this.payer = payer;
        this.points = points;
    }

    // subtractPoints(user, thePayer) {
    //     return user.points = user.points - thePayer.points;
    // }
}

let david = new User('David', 5000);
let corona = new User('Corona', 1000);

console.log(david)
console.log(corona)
// david.subtractPoints(david, corona);
// console.log(david);

class Transaction extends User {
    constructor(payer, points, timestamp) {
        super(payer, points);
        this.timestamp = timestamp;
    }
    subtractPoints() {
        if (this.payer.points > 0 && this.payer.points - this.points >= 0) {
            return this.payer.points = this.payer.points - this.points;
        }
    }
    addPoints() {
        return this.payer.points = this.payer.points + this.points
    }
}

let buyCorona = new Transaction(david, corona.points, new Date());
console.log(buyCorona);
buyCorona.addPoints();
console.log(david);
buyCorona.subtractPoints();
console.log(david);
buyCorona.subtractPoints();
console.log(david);
