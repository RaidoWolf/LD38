class ASmallWorld {

    constructor (x, y, solarSystem) {

        // create a sprite object
        this.sprite = game.add.sprite(
            typeof x !== 'undefined' ? x : game.world.centerX,
            typeof y !== 'undefined' ? y : game.world.centerY,
            'asmallworld'
        );

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

    moveBy (x, y) {

        this.x += x;
        this.y += y;
        return true;

    }

    moveTo (x, y) {

        this.x = x;
        this.y = y;

    }

    update () {

        if (this.gameScaleBase !== gameScaleBase) {
            this.sprite.scale.setTo(gameScaleBase, gameScaleBase);
            this.gameScaleBase = gameScaleBase;
        }

    }

}

export default ASmallWorld;
