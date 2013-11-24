test('Test Gutter Game', function () {
    var g = new Game();
    for (var i = 0; i < 20; i++) {
        g.roll(0);
    }
    equal(g.score(), 0);            
});