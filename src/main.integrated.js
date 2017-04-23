(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {

    // start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // add a starry background
    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

    // create and animate the sun
    window.sun = game.add.sprite(game.world.centerX, game.world.centerY, 'sun');
    sun.anchor.setTo(0.5, 0.5);
    sun.scale.setTo(gameScaleBase * 2, gameScaleBase * 2);
    sun.animations.add('default');
    sun.animations.play('default', 10, true);

    // create and animate the world (the small one)
    window.asmallworld = game.add.sprite(game.world.centerX, game.world.centerY - gameScaleBase * 128, 'asmallworld');
    asmallworld.anchor.setTo(0.5, 0.5);
    asmallworld.scale.setTo(gameScaleBase * 2, gameScaleBase * 2);
    asmallworld.animations.add('default');
    asmallworld.animations.play('default', 1, true);
    game.physics.arcade.enable(asmallworld);

};

},{}],2:[function(require,module,exports){
window.game = new Phaser.Game(
    window.innerWidth * window.devicePixelRatio,
    window.innerHeight * window.devicePixelRatio,
    Phaser.AUTO,
    '',
    {
        preload: require('./preload.inc.js'),
        create: require('./create.inc.js'),
        update: require('./update.inc.js')
    }
);

window.largestDimension = window.innerWidth > window.innerHeight ? window.innerWidth * window.devicePixelRatio : window.innerHeight * window.devicePixelRatio;
window.gameScaleBase = largestDimension / 800;

module.exports = window.game;

},{"./create.inc.js":1,"./preload.inc.js":5,"./update.inc.js":6}],3:[function(require,module,exports){
game.load.spritesheet('asmallworld', 'assets/asmallworld.png', 16, 16);

},{}],4:[function(require,module,exports){
game.load.image('space', 'assets/space.png');
game.load.spritesheet('sun', 'assets/sun.png', 64, 64);

},{}],5:[function(require,module,exports){
module.exports = function () {

    // get assets
    require('./loading/environment.inc.js');
    require('./loading/asmallworld.inc.js');

};

},{"./loading/asmallworld.inc.js":3,"./loading/environment.inc.js":4}],6:[function(require,module,exports){
module.exports = function () {

};

},{}],7:[function(require,module,exports){
/**
 * ##################
 * # LUDUM DARE 38! #
 * ##################
 */

var game = require('./js/game.inc.js');

//do some stuff now!

},{"./js/game.inc.js":2}]},{},[7]);
