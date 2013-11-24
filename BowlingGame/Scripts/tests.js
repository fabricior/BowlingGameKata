/********** Test Setup ***********/
var g = new Game();

/********** Helper functions *****/

function rollMany(n , pins) {
    for (var i = 0; i < n; i++) {
        g.roll(pins);
    }
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