/**
 * ##################
 * # LUDUM DARE 38! #
 * ##################
 */

var game = require('./js/game.inc.js');

function preload () {

    // get assets
    require('./js/loading/environment.inc.js');
    game.load.spritesheet('player', 'assets/player.png', 24, 32);

}

function create () {

    // start up the game
    game.physics.startSystem(Phaser.Physics.ARCADE);

    tangible = game.add.group();
    tangible.enableBody = true;

    var floor = platforms.create(0, game.world.height - 64, 'floor');
    floor.scale.setTo(8, 8);
    floor.body.immovable = true;

    player = game.add.sprite(32, game.world.height - 150, 'player');

}

function update () {

    // the good old update pattern. this is where time passes.

}
