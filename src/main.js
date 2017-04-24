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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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

var _preload = __webpack_require__(18);

var _preload2 = _interopRequireDefault(_preload);

var _create = __webpack_require__(12);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(19);

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

var _OrbitalTrack = __webpack_require__(8);

var _OrbitalTrack2 = _interopRequireDefault(_OrbitalTrack);

var _RocketLauncher = __webpack_require__(9);

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
/* 4 */
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
        this.leftButtonWasDown = false;

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

            if (!this.leftButtonWasDown) {
                if (game.input.activePointer.leftButton.isDown) {
                    this.player.fireWeapon(this.getPlayerAngleToCursor());
                    this.leftButtonWasDown = true;
                }
            } else {
                if (!game.input.activePointer.leftButton.isDown) {
                    this.leftButtonWasDown = false;
                }
            }
        }
    }]);

    return Controller;
}();

exports.default = Controller;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addEvent = __webpack_require__(13);

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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rocket = __webpack_require__(0);

var _Rocket2 = _interopRequireDefault(_Rocket);

var _BasicRocket = __webpack_require__(3);

var _BasicRocket2 = _interopRequireDefault(_BasicRocket);

var _DoubleRocket = __webpack_require__(6);

var _DoubleRocket2 = _interopRequireDefault(_DoubleRocket);

var _UltraRocket = __webpack_require__(11);

var _UltraRocket2 = _interopRequireDefault(_UltraRocket);

var _NuclearRocket = __webpack_require__(7);

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
                }, 250);

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
                    delete this.rocketPool[i];
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
/* 10 */
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

    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.scale.setTo(gameScaleBase, gameScaleBase);

    this.sprite.animations.add('default');
    this.sprite.animations.play('default', 10, true);
};

exports.default = Sun;

/***/ }),
/* 11 */
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
/* 12 */
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

    // create the sun (the poorly drawn one)
    window.sun = new _Sun2.default(game.world.centerX, game.world.centerY);

    // create the world (the small one)
    window.asmallworld = new _ASmallWorld2.default(game.world.centerX, game.world.centerY);

    // create custom pointer
    window.crosshair = new _Crosshair2.default();

    // initialize the controller
    window.controller = new _Controller2.default(crosshair, asmallworld);
};

var _Sun = __webpack_require__(10);

var _Sun2 = _interopRequireDefault(_Sun);

var _ASmallWorld = __webpack_require__(2);

var _ASmallWorld2 = _interopRequireDefault(_ASmallWorld);

var _Crosshair = __webpack_require__(5);

var _Crosshair2 = _interopRequireDefault(_Crosshair);

var _Controller = __webpack_require__(4);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.spritesheet('asmallworld', 'assets/asmallworld.png', 16, 16);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.image('crosshair-normal', 'assets/crosshair-normal.png');

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.image('space', 'assets/space.png');
game.load.spritesheet('sun', 'assets/sun.png', 64, 64);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


game.load.spritesheet('rocket', 'assets/rocket.png', 8, 16);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    // get assets
    __webpack_require__(16);
    __webpack_require__(14);
    __webpack_require__(15);
    __webpack_require__(17);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    asmallworld.update();
    controller.update();
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);