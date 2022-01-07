class User {
    constructor(id, payer, points) {
        this.id = id;
        this.payer = payer;
        this.points = points;
    }
}

// let david = new User('David', 5000);
// let corona = new User('Corona', 1500);

// console.log(david)
// console.log(corona)
// david.subtractPoints(david, corona);
// console.log(david);

class Transaction extends User {
    constructor(payer, points, timestamp) {
        super(payer, points);
        this.timestamp = timestamp;
    }
    subtractPoints() {
        if (this.payer.points > 0 && this.payer.points - this.points >= 0) {
            this.payer.points = this.payer.points - this.points;
            // console.log({ payer: this.payer.payer, points: `-${this.points}` })
            return { payer: this.payer.payer, points: `-${this.points}` }
        }
    }
    addPoints() {
        this.payer.points = this.payer.points + this.points
        // console.log({ payer: this.payer.payer, points: `-${this.points}` })
        return { payer: this.payer.payer, points: this.points }
    }
}

// let buyCorona = new Transaction(david, corona.points, new Date());
// console.log(buyCorona);
// buyCorona.addPoints();
// console.log(david);
// buyCorona.subtractPoints();
// console.log(david);
// buyCorona.subtractPoints();
// console.log(david);
module.exports(User, Transaction);
