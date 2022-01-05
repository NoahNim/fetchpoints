class Payer {
    constructor(payer, points, timestamp) {
        this.payer = payer;
        this.points = points;
        this.timestamp = timestamp;
    }

    subtractPoints(num) {
        return this.payer - num;
    }
}