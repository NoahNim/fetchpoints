class Payer {
    constructor(payer, points) {
        this.payer = payer;
        this.points = points;
    }

    subtractPoints(num) {
        return this.points - num;
    }
}

let david = new Payer('David', 5000);
let corona = new Payer('Corona', 1000);

console.log(david)
console.log(corona)

class Transaction extends Payer {
    constructor(timestamp) {
        this.timestamp = timestamp;
    }
}