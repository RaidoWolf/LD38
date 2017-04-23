/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preloadInc = __webpack_require__(5);

var _preloadInc2 = _interopRequireDefault(_preloadInc);

var _createInc = __webpack_require__(2);

var _createInc2 = _interopRequireDefault(_createInc);

var _updateInc = __webpack_require__(6);

var _updateInc2 = _interopRequireDefault(_updateInc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, // game window width
window.innerHeight * window.devicePixelRatio, // game window height
Phaser.AUTO, // automatically choose renderer
'', // initial DOM element (take whole window)
{ // initial game state object
    preload: _preloadInc2.default,
    create: _createInc2.default,
    update: _updateInc2.default
}, false, //disable canvas transparency
false //disable anti-aliasing
);

window.largestDimension = window.innerWidth > window.innerHeight ? window.innerWidth * window.devicePixelRatio : window.innerHeight * window.devicePixelRatio;
window.gameScaleBase = largestDimension / 800;

exports.default = window.game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASmallWorld = function () {
    function ASmallWorld(x, y, solarSystem) {
        _classCallCheck(this, ASmallWorld);

        // create a sprite object
        this.sprite = game.add.sprite(typeof x !== 'undefined' ? x : game.world.centerX, typeof y !== 'undefined' ? y : game.world.centerY, 'asmallworld');

        // move the anchor point to the middle
        this.sprite.anchor.setTo(0.5, 0.5);

        // scale the sprite to the global game scale
        this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
        this.scale = gameScaleBase;

        // add and play the spinning animation at 1FPS, looping
        this.sprite.animations.add('default');
        this.sprite.animations.play('default', 1, true);

        // enable arcade physics
        game.physics.arcade.enable(this.sprite);
    }

    _createClass(ASmallWorld, [{
        key: 'moveBy',
        value: function moveBy(x, y) {

            this.x += x;
            this.y += y;
            return true;
        }
    }, {
        key: 'moveTo',
        value: function moveTo(x, y) {

            this.x = x;
            this.y = y;
        }
    }, {
        key: 'update',
        value: function update() {

            if (this.gameScaleBase !== gameScaleBase) {
                this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
                this.gameScaleBase = gameScaleBase;
            }
        }
    }, {
        key: 'x',
        get: function get() {
            return this.sprite.x;
        },
        set: function set(pos) {
            this.sprite.x = pos;
            return true;
        }
    }, {
        key: 'y',
        get: function get() {
            return this.sprite.y;
        },
        set: function set(pos) {
            this.sprite.y = pos;
            return true;
        }
    }]);

    return ASmallWorld;
}();

exports.default = ASmallWorld;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    // start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // add a starry background
    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

    // create and animate the sun
    window.sun = game.add.sprite(game.world.centerX, game.world.centerY, 'sun');
    sun.anchor.setTo(0.5, 0.5);
    sun.scale.setTo(gameScaleBase, gameScaleBase);
    sun.animations.add('default');
    sun.animations.play('default', 10, true);

    // create and animate the world (the small one)
    window.asmallworld = new _ASmallWorld2.default(game.world.centerX, game.world.centerY - gameScaleBase * 64);
};

var _ASmallWorld = __webpack_require__(1);

var _ASmallWorld2 = _interopRequireDefault(_ASmallWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.spritesheet('asmallworld', 'assets/asmallworld.png', 16, 16);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.image('space', 'assets/space.png');
game.load.spritesheet('sun', 'assets/sun.png', 64, 64);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    // get assets
    __webpack_require__(4);
    __webpack_require__(3);
};

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gameInc = __webpack_require__(0);

var _gameInc2 = _interopRequireDefault(_gameInc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);