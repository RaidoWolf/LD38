(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

module.exports = game;

},{}],2:[function(require,module,exports){
var game = require('../game.inc.js');

game.load.image('floor', 'assets/floor.png');
game.load.image('boulder', 'assets/boulder.png');

},{"../game.inc.js":1}],3:[function(require,module,exports){
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

},{"./js/game.inc.js":1,"./js/loading/environment.inc.js":2}]},{},[3]);
