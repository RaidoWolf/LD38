var game = require('./game.inc.js');

var preload = function () {

    // get assets
    require('./loading/environment.inc.js');
    game.load.spritesheet('player', 'assets/player.png', 24, 32);

};

module.exports = preload;
