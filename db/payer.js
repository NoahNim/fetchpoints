class Payer {
    constructor(payer, points, timestamp) {
        this.payer = payer;
        this.points = points;
        this.timestamp = timestamp;
    }

    subtractPoints(num) {
        return this.points - num;
    }
}

let david = new Payer('David', 5000, new Date());
let corona = new Payer('Corona', 1000, new Date());

console.log(david.subtractPoints(corona.points));