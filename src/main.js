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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preload = __webpack_require__(9);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(4);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(10);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, // game window width
window.innerHeight * window.devicePixelRatio, // game window height
Phaser.AUTO, // automatically choose renderer
'', // initial DOM element (take whole window)
{ // initial game state object
    preload: _preload2.default,
    create: _create2.default,
    update: _update2.default
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

var _OrbitalTrack = __webpack_require__(3);

var _OrbitalTrack2 = _interopRequireDefault(_OrbitalTrack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASmallWorld = function () {
    function ASmallWorld(x, y, radius) {
        _classCallCheck(this, ASmallWorld);

        x = typeof x !== 'undefined' ? x : game.world.centerX;
        y = typeof y !== 'undefined' ? y : game.world.centerY;

        // create a sprite object
        this.sprite = game.add.sprite(x, y, 'asmallworld');

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

        this.weapons = [];

        this.orbitalOrigin = [x, y];
        this.orbitalPhase = 0;
        this.initOrbitalTrack();
    }

    _createClass(ASmallWorld, [{
        key: 'initOrbitalTrack',
        value: function initOrbitalTrack() {
            this.orbitalTrack = new _OrbitalTrack2.default(64, 360, this.orbitalOrigin);
        }
    }, {
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
            return true;
        }
    }, {
        key: 'update',
        value: function update() {

            if (this.gameScaleBase !== gameScaleBase) {
                this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
                this.gameScaleBase = gameScaleBase;
            }

            var newPos = this.orbitalTrack.getPoint(this.orbitalPhase < 360 ? this.orbitalPhase++ : this.orbitalPhase = 0);
            this.moveTo(newPos[0], newPos[1]);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addEvent = __webpack_require__(5);

var _addEvent2 = _interopRequireDefault(_addEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Crosshair = function () {
    function Crosshair() {
        _classCallCheck(this, Crosshair);

        var self = this;

        // create the sprite
        this.sprite = game.add.sprite(-100, -100, 'crosshair-normal');
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(1, 1);

        // track mouse movement
        game.input.addMoveCallback(function (pointer, x, y) {
            self.update(pointer, x, y);
        });

        // detect when mouse leaves screen
        (0, _addEvent2.default)(document, 'mouseout', function () {
            self.hide();
        });

        // detect when mouse re-enters screen
        (0, _addEvent2.default)(document, 'mouseover', function () {
            self.show();
        });
    }

    _createClass(Crosshair, [{
        key: 'hide',
        value: function hide() {
            this.sprite.visible = false;
        }
    }, {
        key: 'show',
        value: function show() {
            this.sprite.visible = true;
        }

        // mouse movement callback

    }, {
        key: 'update',
        value: function update(pointer, x, y) {
            this.sprite.x = x;
            this.sprite.y = y;
        }
    }]);

    return Crosshair;
}();

exports.default = Crosshair;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrbitalTrack = function () {
    function OrbitalTrack(radius, resolution, origin) {
        _classCallCheck(this, OrbitalTrack);

        radius = typeof radius !== 'undefined' ? radius : 256;
        resolution = typeof resolution !== 'undefined' ? resolution : 360;
        origin = typeof origin !== 'undefined' ? origin : [0, 0];

        this.points = [];

        for (var i = 0; i < resolution; i++) {
            this.points.push([Math.cos(i * (2 * Math.PI) / resolution) * radius * gameScaleBase + origin[0], Math.sin(i * (2 * Math.PI) / resolution) * radius * gameScaleBase + origin[1]]);
        }

        this.radius = radius;
        this.resolution = resolution;
        this.origin = origin;
    }

    _createClass(OrbitalTrack, [{
        key: 'getPoint',
        value: function getPoint(index) {
            if (index < this.resolution) {
                return this.points[index];
            } else {
                return false;
            }
        }
    }, {
        key: 'getPointByDegree',
        value: function getPointByDegree(degree) {
            if (degree >= 0 && degree < 360) {
                if (degree >= 359.5) {
                    degree = 0;
                }
                return this.getPoint(Math.round(degree * (this.resolution / 360)));
            } else {
                return false;
            }
        }
    }]);

    return OrbitalTrack;
}();

exports.default = OrbitalTrack;

/***/ }),
/* 4 */
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
    window.asmallworld = new _ASmallWorld2.default(game.world.centerX, game.world.centerY);

    // create custom pointer
    window.crosshair = new _Crosshair2.default();
};

var _ASmallWorld = __webpack_require__(1);

var _ASmallWorld2 = _interopRequireDefault(_ASmallWorld);

var _Crosshair = __webpack_require__(2);

var _Crosshair2 = _interopRequireDefault(_Crosshair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = addEvent;
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.spritesheet('asmallworld', 'assets/asmallworld.png', 16, 16);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.image('crosshair-normal', 'assets/crosshair-normal.png');

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.image('space', 'assets/space.png');
game.load.spritesheet('sun', 'assets/sun.png', 64, 64);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    // get assets
    __webpack_require__(8);
    __webpack_require__(6);
    __webpack_require__(7);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    asmallworld.update();
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);