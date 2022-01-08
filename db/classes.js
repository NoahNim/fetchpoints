class User {
    constructor(payer, points) {
        this.payer = payer;
        this.points = points;
    }
}

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

module.exports = { User, Transaction };