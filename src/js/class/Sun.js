export default class Sun {

    constructor (x, y) {

        x = typeof x !== 'undefined' ? x : game.world.centerX;
        y = typeof y !== 'undefined' ? y : game.world.centerY;

        this.sprite = game.add.sprite(x, y, 'sun');
        solidEnvironment.add(this.sprite);

        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(gameScaleBase, gameScaleBase);

        this.sprite.animations.add('default');
        this.sprite.animations.play('default', 10, true);

        game.physics.arcade.enable(this.sprite);
        this.sprite.body.enable = true;
        this.sprite.body.collideWorldBounds = false;
        this.sprite.body.immoveable = true;
        this.sprite.body.moves = false;
        this.sprite.body.allowGravity = false;
        this.sprite.body.bounce.x = 0.5;
        this.sprite.body.bounce.y = 0.5;

    }

}
