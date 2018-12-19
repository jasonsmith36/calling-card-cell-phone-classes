class CallingCard {
    constructor(costPerMinuteInCents) {
        this.costPerMinuteInCents = costPerMinuteInCents
        this.remainingMinutes = 0
    }

    addDollars(amtInDollars) {
        let cents = amtInDollars * 100
        let minutes = cents / this.costPerMinuteInCents
        this.remainingMinutes = Number.isInteger(minutes) ? minutes : Math.floor(minutes)
    }

    getRemainingMinutes() {
        return this.remainingMinutes
    }

    useMinutes(numOfMinutes) {
        this.remainingMinutes -= numOfMinutes
    }
}