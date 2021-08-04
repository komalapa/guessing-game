class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        console.log(this.min, this.max)
    }

    guess() {
        if (this.max-this.min>1){ this.solution = Math.round((this.max+this.min)/2)
        console.log("it's ",this.solution)
        return this.solution
        }
        if (this.max === this.solution) return this.min
        return this.max
    }

    lower() {
        this.max = this.solution
        //console.log("lower",this.min,this.max,)
    }

    greater() {
        this.min = this.solution
        //console.log("greater",this.min,this.max,)
    }
}

module.exports = GuessingGame;
