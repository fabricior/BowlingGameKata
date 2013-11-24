function Game() {        
    this.rolls = new Array();
    this.currentRoll = 0;
}

Game.prototype.roll = function (pins) {    
    this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function () {
    var scoreTotal = 0;
    var frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
        if (this.isSpare(frameIndex)) { 
            scoreTotal += 10 + this.rolls[frameIndex + 2];
            frameIndex += 2;
        } else {
            scoreTotal += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
            frameIndex += 2;
        }        
    }    
    return scoreTotal;
};

Game.prototype.isSpare = function (frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10;
};
