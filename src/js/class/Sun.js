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

    }

}
