function Game() {    
    this.scoreCounter = 0;
}

Game.prototype.roll = function (pins) {
    this.scoreCounter += pins;
};

Game.prototype.score = function() {
    return this.scoreCounter;
};