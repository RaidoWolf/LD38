import OrbitalTrack from './OrbitalTrack.js';
import RocketLauncher from './RocketLauncher.js';

export default class ASmallWorld {

    constructor (x, y, radius) {

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

        this.weapon = new RocketLauncher(this);

        this.orbitalOrigin = [x, y];
        this.orbitalPhase = 0;
        this.initOrbitalTrack();

    }

    get x () {
        return this.sprite.x;
    }

    get y () {
        return this.sprite.y;
    }

    set x (pos) {
        this.sprite.x = pos;
        return true;
    }

    set y (pos) {
        this.sprite.y = pos;
        return true;
    }

    fireWeapon (angle) {
        return this.weapon.fire(angle);
    }

    initOrbitalTrack () {
        this.orbitalTrack = new OrbitalTrack(
            64,
            360,
            this.orbitalOrigin
        );
    }

    moveBy (x, y) {
        this.x += x;
        this.y += y;
        return true;
    }

    moveTo (x, y) {
        this.x = x;
        this.y = y;
        return true;
    }

    update () {

        if (this.scale !== gameScaleBase) {
            this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
            this.scale = gameScaleBase;
        }

        // orbit at 60-degrees-per-second (10 RPM)
        var newPos = this.orbitalTrack.getPoint(
            this.orbitalPhase < 360 ?
            this.orbitalPhase++ :
            this.orbitalPhase = 0
        );
        this.moveTo(newPos[0], newPos[1]);

        this.weapon.update();

    }

    upgradeWeapon () {
        return this.weapon.upgrade();
    }

}
