/********** Test Setup ***********/

var g = null;

module('main module', {
    setup: function () {
        g = new Game();
    }
});

/********** Helper functions *****/

function rollMany(n, pins) {
    for (var i = 0; i < n; i++) {
        g.roll(pins);
    }
}

function rollStrike() {
    g.roll(10); 
}

function rollSpare() {
    g.roll(5);
    g.roll(5);
}

/********** The tests ************/

test('Test Gutter Game', function () {
    rollMany(20, 0);
    equal(g.score(), 0);
});

test('Test All ones', function () {
    rollMany(20, 1);
    equal(g.score(), 20);
});

test('Test one spare', function () {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    equal(g.score(), 16);
});

test('Test One Strike', function() {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    equal(g.score(), 24);    
});
