function Game() {        
    this.rolls = new Array();
    for (var i = 0; i < 21; i++) {
        this.rolls[i] = null;
    }
    this.currentRoll = 0;
}

Game.prototype.roll = function (pins) {    
    this.rolls[this.currentRoll++] = pins;
};

Game.prototype.score = function () {
    var scoreTotal = 0;
    var frameIndex = 0;
    for (var frame = 0; frame < 10; frame++) {
        if (this.isStrike(frameIndex)) {
            scoreTotal += 10 + this.strikeBonus(frameIndex);
            frameIndex++;
        }
        else if (this.isSpare(frameIndex)) { 
            scoreTotal += 10 + this.spareBonus(frameIndex);
            frameIndex += 2;
        } else {
            scoreTotal += this.sumOfBallsInFrame(frameIndex);
            frameIndex += 2;
        }        
    }    
    return scoreTotal;
};


Game.prototype.isStrike = function(frameIndex) {
    return this.rolls[frameIndex] == 10;
};

Game.prototype.isSpare = function (frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10;
};

Game.prototype.sumOfBallsInFrame = function(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
};

Game.prototype.spareBonus = function(frameIndex) {
    return this.rolls[frameIndex + 2];
};

Game.prototype.strikeBonus = function(frameIndex) {
  return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
};
