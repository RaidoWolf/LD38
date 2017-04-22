var game = require('./game.inc.js');

var create = function () {

    stars = game.add.group();

    var sun = stars.create(game.world.width / 2 - 64, game.world.height / 2 - 64, 'sun');
    sun.scale.setTo(2, 2);

    player = game.add.sprite(32, game.world.height - 150, 'player');

};

module.exports = create;
