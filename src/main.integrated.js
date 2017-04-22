(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {

    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

    window.stars = game.add.group();

    var sun = stars.create(game.world.width / 2 - 64, game.world.height / 2 - 64, 'sun');
    sun.scale.setTo(2, 2);

};

},{}],2:[function(require,module,exports){
window.game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: require('./preload.inc.js'),
    create: require('./create.inc.js'),
    update: require('./update.inc.js')
});

module.exports = game;

},{"./create.inc.js":1,"./preload.inc.js":4,"./update.inc.js":5}],3:[function(require,module,exports){
var game = require('../game.inc.js');

game.load.image('space', 'assets/space.png');
game.load.spritesheet('sun', 'assets/sun.png', 64, 64);

},{"../game.inc.js":2}],4:[function(require,module,exports){
module.exports = function () {

    // get assets
    require('./loading/environment.inc.js');

};

},{"./loading/environment.inc.js":3}],5:[function(require,module,exports){
module.exports = function () {

};

},{}],6:[function(require,module,exports){
/**
 * ##################
 * # LUDUM DARE 38! #
 * ##################
 */

var game = require('./js/game.inc.js');

//do some stuff now!

},{"./js/game.inc.js":2}]},{},[6]);
