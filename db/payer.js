class User {
    constructor(payer, points) {
        this.payer = payer;
        this.points = {
            points: points,
            
        }
    }

    // this.points.reduce(function(a, b) { return a + b }, 0)
}

let david = new User('David', 5000);
let corona = new User('Corona', 1000);

console.log(david)
console.log(corona)

class Transaction extends User {
    constructor(payer, points, timestamp) {
        super(payer, points);
        this.timestamp = timestamp;
    }
    subtractPoints() {
        return this.payer.points - this.points;
    }
    addPoints() {
        
    }
}

let buyCorona = new Transaction(david, corona.points, new Date());
console.log(buyCorona);
