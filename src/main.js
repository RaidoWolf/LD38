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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rocket = function () {
    function Rocket(x, y, angle, owner) {

        // this is a virtual class, do not construct it.

        _classCallCheck(this, Rocket);
    }

    _createClass(Rocket, [{
        key: 'destroy',
        value: function destroy() {

            this.sprite.destroy();
            this.live = false;
            return true;
        }
    }, {
        key: 'init',
        value: function init(x, y, angle, owner) {

            var self = this;

            this.live = true;

            this.sprite = game.add.sprite(x, y, 'rocket');
            projectiles.add(this.sprite);

            this.sprite.anchor.setTo(0.5, 0.5);

            this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
            this.scale = gameScaleBase;

            this.sprite.animations.add('default', this.frames);
            this.sprite.animations.play('default', 3, true);

            this.sprite.angle = angle * (180 / Math.PI) + 90;

            game.physics.arcade.enable(this.sprite);
            this.sprite.body.enable = true;
            this.sprite.body.collideWorldBounds = false;

            this.angle = angle;
            this.owner = owner;
            this.velocity = 50;

            // self destruct after 10 seconds
            window.setTimeout(function () {
                self.destroy();
            }, 5000);
        }
    }, {
        key: 'update',
        value: function update() {

            if (this.velocity < 300) {
                this.velocity += 5;
            }

            this.sprite.body.velocity.x = this.velocity * gameScaleBase * Math.cos(this.angle);
            this.sprite.body.velocity.y = this.velocity * gameScaleBase * Math.sin(this.angle);

            for (var i in asteroidEmitter.asteroidPool) {
                var dist2 = Math.abs(Math.pow(this.x - asteroidEmitter.asteroidPool[i].x, 2)) + Math.abs(Math.pow(this.y - asteroidEmitter.asteroidPool[i].y, 2));

                if (dist2 < 10000) {
                    scoreboard.points += Math.round(asteroidEmitter.asteroidPool[i].size * 10);
                    this.destroy();
                    asteroidEmitter.asteroidPool[i].destroy();
                }
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

    return Rocket;
}();

exports.default = Rocket;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _preload = __webpack_require__(22);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(15);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(23);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OrbitalTrack = __webpack_require__(10);

var _OrbitalTrack2 = _interopRequireDefault(_OrbitalTrack);

var _RocketLauncher = __webpack_require__(11);

var _RocketLauncher2 = _interopRequireDefault(_RocketLauncher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASmallWorld = function () {
    function ASmallWorld(x, y, radius) {
        _classCallCheck(this, ASmallWorld);

        x = typeof x !== 'undefined' ? x : game.world.centerX;
        y = typeof y !== 'undefined' ? y : game.world.centerY;

        // create a sprite object
        this.sprite = game.add.sprite(x, y, 'asmallworld');
        players.add(this.sprite);

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

        this.weapon = new _RocketLauncher2.default(this);

        this.orbitalOrigin = [x, y];
        this.orbitalPhase = 0;
        this.initOrbitalTrack();
    }

    _createClass(ASmallWorld, [{
        key: 'fireWeapon',
        value: function fireWeapon(angle) {
            return this.weapon.fire(angle);
        }
    }, {
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

            if (this.scale !== gameScaleBase) {
                this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
                this.scale = gameScaleBase;
            }

            // orbit at 60-degrees-per-second (10 RPM)
            var newPos = this.orbitalTrack.getPoint(this.orbitalPhase < 360 ? this.orbitalPhase++ : this.orbitalPhase = 0);
            this.moveTo(newPos[0], newPos[1]);

            this.weapon.update();
        }
    }, {
        key: 'upgradeWeapon',
        value: function upgradeWeapon() {
            return this.weapon.upgrade();
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Asteroid = function () {
    function Asteroid(x, y, angle, rotationalVelocity, size, velocity) {
        _classCallCheck(this, Asteroid);

        this.live = true;

        this.angle = angle;
        this.rotationalVelocity = rotationalVelocity;
        this.size = size;
        this.velocity = velocity;

        this.sprite = game.add.sprite(x, y, 'asteroid');
        this.sprite.frame = Math.floor(Math.random() * 4.9999);
        enemies.add(this.sprite);

        this.sprite.anchor.setTo(0.5, 0.5);

        game.physics.arcade.enable(this.sprite);
        this.sprite.body.enable = true;
        this.sprite.body.collideWorldBounds = false;

        this.sprite.scale.setTo(gameScaleBase * size * 3, gameScaleBase * size * 3);

        this.sprite.body.velocity.x = this.velocity * gameScaleBase * Math.cos(this.angle);
        this.sprite.body.velocity.y = this.velocity * gameScaleBase * Math.sin(this.angle);
    }

    _createClass(Asteroid, [{
        key: 'destroy',
        value: function destroy() {

            this.sprite.destroy();
            this.live = false;
            return true;
        }
    }, {
        key: 'update',
        value: function update() {

            this.sprite.angle += (this.rotationalVelocity * (180 / Math.PI) + 90) / 60;
        }
    }, {
        key: 'x',
        get: function get() {
            return this.sprite.x;
        },
        set: function set(x) {
            this.sprite.x = x;
            return true;
        }
    }, {
        key: 'y',
        get: function get() {
            return this.sprite.y;
        },
        set: function set(y) {
            this.sprite.y = y;
            return true;
        }
    }]);

    return Asteroid;
}();

exports.default = Asteroid;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Asteroid = __webpack_require__(3);

var _Asteroid2 = _interopRequireDefault(_Asteroid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AsteroidEmitter = function () {
    function AsteroidEmitter() {
        _classCallCheck(this, AsteroidEmitter);

        this.spawnTicks = 60;
        this.aliveLimit = 20;
        this.minSize = 1;
        this.maxSize = 2;
        this.minVelocity = 10;
        this.maxVelocity = 50;

        this.topLine = -500;
        this.leftLine = -500;
        this.bottomLine = game.world.height + 500;
        this.rightLine = game.world.width + 500;

        this.asteroidPool = [];

        this.tickCount = 0;
    }

    _createClass(AsteroidEmitter, [{
        key: 'spawn',
        value: function spawn() {

            var x;
            var y;

            switch (Math.floor(Math.random() * 3.99999)) {
                case 0:
                    x = Math.random() * (this.rightLine - this.leftLine) + this.leftLine;
                    y = this.topLine;
                    break;
                case 1:
                    x = this.rightLine;
                    y = Math.random() * (this.bottomLine - this.topLine) + this.topLine;
                    break;
                case 2:
                    x = Math.random() * (this.rightLine - this.leftLine) + this.leftLine;
                    y = this.bottomLine;
                    break;
                case 3:
                    x = this.leftLine;
                    y = Math.random() & this.bottomLine - this.topLine + this.topLine;
                    break;
                default:
                    x = -1000;
                    y = -1000;

            }

            var asteroid = new _Asteroid2.default(x, y, Math.random() * 2 * Math.PI - Math.PI, Math.random() * Math.PI - Math.PI, Math.random() * (this.maxSize - this.minSize) + this.minSize, Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity);

            this.asteroidPool.push(asteroid);

            return true;
        }
    }, {
        key: 'update',
        value: function update() {

            if (++this.tickCount >= this.spawnTicks) {
                this.tickCount = 0;
                if (this.asteroidPool.length < this.aliveLimit) {
                    this.spawn();
                }
            }

            for (var i in this.asteroidPool) {
                if (this.asteroidPool[i].live) {
                    if (
                    // asteroid is inside bounds
                    this.asteroidPool[i].y >= this.topLine && this.asteroidPool[i].y <= this.bottomLine && this.asteroidPool[i].x >= this.leftLine && this.asteroidPool[i].x <= this.rightLine) {
                        this.asteroidPool[i].update();
                    } else {
                        this.asteroidPool[i].destroy();
                    }
                } else {
                    this.asteroidPool.splice(i, 1);
                }
            }
        }
    }]);

    return AsteroidEmitter;
}();

exports.default = AsteroidEmitter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rocket2 = __webpack_require__(0);

var _Rocket3 = _interopRequireDefault(_Rocket2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicRocket = function (_Rocket) {
    _inherits(BasicRocket, _Rocket);

    function BasicRocket(x, y, angle, owner) {
        _classCallCheck(this, BasicRocket);

        var _this = _possibleConstructorReturn(this, (BasicRocket.__proto__ || Object.getPrototypeOf(BasicRocket)).call(this, x, y, angle, owner));

        _this.baseDamage = 100; // dithers to zero at edge of blast radius
        _this.blastRadius = 100;
        _this.frames = [0, 1];

        _this.init(x, y, angle, owner);

        return _this;
    }

    return BasicRocket;
}(_Rocket3.default);

exports.default = BasicRocket;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller(cursor, player) {
        _classCallCheck(this, Controller);

        this.cursor = cursor;
        this.player = player;

        game.input.mouse.capture = true;
    }

    _createClass(Controller, [{
        key: "getPlayerAngleToCursor",
        value: function getPlayerAngleToCursor() {

            return Math.atan2(this.cursor.y - this.player.y, this.cursor.x - this.player.x);
        }
    }, {
        key: "update",
        value: function update() {

            if (game.input.activePointer.leftButton.isDown) {
                this.player.fireWeapon(this.getPlayerAngleToCursor());
            }
        }
    }]);

    return Controller;
}();

exports.default = Controller;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addEvent = __webpack_require__(16);

var _addEvent2 = _interopRequireDefault(_addEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Crosshair = function () {
    function Crosshair() {
        _classCallCheck(this, Crosshair);

        var self = this;

        // create the sprite
        this.sprite = game.add.sprite(-100, -100, 'crosshair-normal');
        gui.add(this.sprite);
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
    }, {
        key: 'x',
        get: function get() {
            return this.sprite.x;
        },
        set: function set(x) {
            this.sprite.x = x;
            return true;
        }
    }, {
        key: 'y',
        get: function get() {
            return this.sprite.y;
        },
        set: function set(y) {
            this.sprite.y = y;
            return true;
        }
    }]);

    return Crosshair;
}();

exports.default = Crosshair;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rocket2 = __webpack_require__(0);

var _Rocket3 = _interopRequireDefault(_Rocket2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoubleRocket = function (_Rocket) {
    _inherits(DoubleRocket, _Rocket);

    function DoubleRocket(x, y, angle, owner) {
        _classCallCheck(this, DoubleRocket);

        var _this = _possibleConstructorReturn(this, (DoubleRocket.__proto__ || Object.getPrototypeOf(DoubleRocket)).call(this, x, y, angle, owner));

        _this.baseDamage = 200; // dithers to zero at edge of blast radius
        _this.blastRadius = 200;
        _this.frames = [2, 3];

        _this.init(x, y, angle, owner);

        return _this;
    }

    return DoubleRocket;
}(_Rocket3.default);

exports.default = DoubleRocket;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rocket2 = __webpack_require__(0);

var _Rocket3 = _interopRequireDefault(_Rocket2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NuclearRocket = function (_Rocket) {
    _inherits(NuclearRocket, _Rocket);

    function NuclearRocket(x, y, angle, owner) {
        _classCallCheck(this, NuclearRocket);

        var _this = _possibleConstructorReturn(this, (NuclearRocket.__proto__ || Object.getPrototypeOf(NuclearRocket)).call(this, x, y, angle, owner));

        _this.baseDamage = 400; // dithers to zero at edge of blast radius
        _this.blastRadius = 400;
        _this.frames = [6, 7];

        _this.init(x, y, angle, owner);

        return _this;
    }

    return NuclearRocket;
}(_Rocket3.default);

exports.default = NuclearRocket;

/***/ }),
/* 10 */
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
            this.points.push([Math.cos(i * (360 / resolution) * (Math.PI / 180)) * radius * gameScaleBase + origin[0], Math.sin(i * (360 / resolution) * (Math.PI / 180)) * radius * gameScaleBase + origin[1]]);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rocket = __webpack_require__(0);

var _Rocket2 = _interopRequireDefault(_Rocket);

var _BasicRocket = __webpack_require__(5);

var _BasicRocket2 = _interopRequireDefault(_BasicRocket);

var _DoubleRocket = __webpack_require__(8);

var _DoubleRocket2 = _interopRequireDefault(_DoubleRocket);

var _UltraRocket = __webpack_require__(14);

var _UltraRocket2 = _interopRequireDefault(_UltraRocket);

var _NuclearRocket = __webpack_require__(9);

var _NuclearRocket2 = _interopRequireDefault(_NuclearRocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RocketLauncher = function () {
    function RocketLauncher(parent) {
        _classCallCheck(this, RocketLauncher);

        this.parent = parent;

        this.rocketType = 'basic';
        this.rocketPool = [];

        this.cooldown = false;
    }

    _createClass(RocketLauncher, [{
        key: 'fire',
        value: function fire(angle) {

            if (!this.cooldown) {

                var self = this;
                var rocket;

                switch (this.rocketType) {
                    case 'basic':
                        rocket = new _BasicRocket2.default(this.parent.x, this.parent.y, angle, this.parent);
                        break;
                    case 'double':
                        rocket = new _DoubleRocket2.default(this.parent.x, this.parent.y, angle, this.parent);
                        break;
                    case 'ultra':
                        rocket = new _UltraRocket2.default(this.parent.x, this.parent.y, angle, this.parent);
                        break;
                    case 'nuclear':
                        rocket = new _NuclearRocket2.default(this.parent.x, this.parent.y, angle, this.parent);
                        break;
                    default:
                        rocket = new _BasicRocket2.default(this.parent.x, this.parent.y, angle, this.parent);
                        break;
                }

                this.rocketPool.push(rocket);

                this.cooldown = true;
                window.setTimeout(function () {
                    self.cooldown = false;
                }, 333);

                return true;
            } else {

                return false;
            }
        }
    }, {
        key: 'update',
        value: function update() {

            for (var i in this.rocketPool) {
                if (this.rocketPool[i].live) {
                    this.rocketPool[i].update();
                } else {
                    this.rocketPool.splice(i, 1);
                }
            }
        }
    }, {
        key: 'upgrade',
        value: function upgrade() {

            switch (this.rocketType) {
                case 'basic':
                    this.rocketType = 'double';
                    break;
                case 'double':
                    this.rocketType = 'ultra';
                    break;
                case 'ultra':
                    this.rocketType = 'nuclear';
                    break;
                case 'nuclear':
                    break;
                default:
                    this.rocketType = 'basic';
                    break;
            }

            return true;
        }
    }]);

    return RocketLauncher;
}();

exports.default = RocketLauncher;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scoreboard = function () {
    function Scoreboard() {
        _classCallCheck(this, Scoreboard);

        this.lastTime = null;
        this.lastPoints = null;

        this.time = 0; // seconds survived
        this.points = 0; // arbitrary score (decreases with upgrades)
        this.damage = 0; // arbitrary damage points done in game

        this.textTime = game.add.text(16, 16, 'TIME: 0', { fontSize: '24px', fill: '#ffffff' });
        this.textPoints = game.add.text(16, 56, 'POINTS: 0', { fontSize: '16px', fill: '#ffffff' });
        gui.add(this.textTime);
        gui.add(this.textPoints);

        this.updateCount = 0;
    }

    _createClass(Scoreboard, [{
        key: 'update',
        value: function update() {

            if (++this.updateCount >= '60') {
                this.updateCount = 0;
                this.time++;
            }

            if (this.lastTime !== this.time) {
                if (this.time !== 0 && this.time % 15 === 0) {
                    if (asteroidEmitter.aliveLimit < 120) {
                        asteroidEmitter.aliveLimit += 1;
                    }
                    if (asteroidEmitter.spawnTicks > 6) {
                        asteroidEmitter.spawnTicks -= 1;
                    }
                    if (asteroidEmitter.minVelocity < 50) {
                        asteroidEmitter.minVelocity += 1;
                    }
                    if (asteroidEmitter.maxVelocity < 200) {
                        asteroidEmitter.maxVelocity += 2;
                    }
                    if (asteroidEmitter.minSize < 2) {
                        asteroidEmitter.minSize += 0.1;
                    }
                    if (asteroidEmitter.maxSize < 8) {
                        asteroidEmitter.maxSize += 0.2;
                    }
                }
                this.lastTime = this.time;
                this.textTime.text = 'TIME: ' + this.time;
            }

            if (this.lastPoints !== this.points) {
                if (this.lastPoints < 1000 && this.points >= 1000 || this.lastPoints < 2000 && this.points >= 2000 || this.lastPoints < 4000 && this.points >= 4000 || this.lastPoints < 8000 && this.points >= 8000) {
                    asmallworld.upgradeWeapon();
                }
                this.lastPoints = this.points;
                this.textPoints.text = 'POINTS: ' + this.points;
            }
        }
    }]);

    return Scoreboard;
}();

exports.default = Scoreboard;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sun = function Sun(x, y) {
    _classCallCheck(this, Sun);

    x = typeof x !== 'undefined' ? x : game.world.centerX;
    y = typeof y !== 'undefined' ? y : game.world.centerY;

    this.sprite = game.add.sprite(x, y, 'sun');
    solidEnvironment.add(this.sprite);

    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(gameScaleBase, gameScaleBase);

    this.sprite.animations.add('default');
    this.sprite.animations.play('default', 10, true);
};

exports.default = Sun;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Rocket2 = __webpack_require__(0);

var _Rocket3 = _interopRequireDefault(_Rocket2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UltraRocket = function (_Rocket) {
    _inherits(UltraRocket, _Rocket);

    function UltraRocket(x, y, angle, owner) {
        _classCallCheck(this, UltraRocket);

        var _this = _possibleConstructorReturn(this, (UltraRocket.__proto__ || Object.getPrototypeOf(UltraRocket)).call(this, x, y, angle, owner));

        _this.baseDamage = 300; // dithers to zero at edge of blast radius
        _this.blastRadius = 300;
        _this.frames = [4, 5];

        _this.init(x, y, angle, owner);

        return _this;
    }

    return UltraRocket;
}(_Rocket3.default);

exports.default = UltraRocket;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    // start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    window.environment = game.add.group();
    window.solidEnvironment = game.add.group();
    window.players = game.add.group();
    window.enemies = game.add.group();
    window.projectiles = game.add.group();
    window.gui = game.add.group();

    // add a starry background
    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');
    environment.add(background);

    // create the sun (the poorly drawn one)
    window.sun = new _Sun2.default(game.world.centerX, game.world.centerY);

    // create the world (the small one)
    window.asmallworld = new _ASmallWorld2.default(game.world.centerX, game.world.centerY);

    // create the asteroid emitter
    window.asteroidEmitter = new _AsteroidEmitter2.default();

    // create custom pointer
    window.crosshair = new _Crosshair2.default();

    // initialize the controller
    window.controller = new _Controller2.default(crosshair, asmallworld);

    // initialize the Scoreboard
    window.scoreboard = new _Scoreboard2.default();
};

var _Sun = __webpack_require__(13);

var _Sun2 = _interopRequireDefault(_Sun);

var _ASmallWorld = __webpack_require__(2);

var _ASmallWorld2 = _interopRequireDefault(_ASmallWorld);

var _AsteroidEmitter = __webpack_require__(4);

var _AsteroidEmitter2 = _interopRequireDefault(_AsteroidEmitter);

var _Crosshair = __webpack_require__(7);

var _Crosshair2 = _interopRequireDefault(_Crosshair);

var _Controller = __webpack_require__(6);

var _Controller2 = _interopRequireDefault(_Controller);

var _Scoreboard = __webpack_require__(12);

var _Scoreboard2 = _interopRequireDefault(_Scoreboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.spritesheet('asmallworld', 'assets/asmallworld.png', 16, 16);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.image('crosshair-normal', 'assets/crosshair-normal.png');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.spritesheet('asteroid', 'assets/asteroid.png', 16, 16);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.image('space', 'assets/space.png');
game.load.spritesheet('sun', 'assets/sun.png', 64, 64);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.spritesheet('rocket', 'assets/rocket.png', 8, 16);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    // get assets
    __webpack_require__(20);
    __webpack_require__(17);
    __webpack_require__(18);
    __webpack_require__(21);
    __webpack_require__(19);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    //game.physics.arcade.collide(enemies);
    //game.physics.arcade.collide(enemies, solidEnvironment);

    asmallworld.update();
    controller.update();
    scoreboard.update();
    asteroidEmitter.update();
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);