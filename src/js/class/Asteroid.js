export default class Asteroid {

    constructor (x, y, angle, rotationalVelocity, size, velocity) {

        this.live = true;

        this.angle = angle;
        this.rotationalVelocity = rotationalVelocity;
        this.size = size;
        this.velocity = velocity;

        this.sprite = game.add.sprite(x, y, 'asteroid');
        this.sprite.frame = Math.floor(Math.random() * 4.9999);
        enemies.add(this.sprite);

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.scale.setTo(gameScaleBase * size * 4, gameScaleBase * size * 4);

        game.physics.arcade.enable(this.sprite);
        this.sprite.body.enable = true;
        this.sprite.body.setSize(this.sprite.width * 0.5, this.sprite.height * 0.5, 0, 0);
        this.sprite.body.collideWorldBounds = false;
        this.sprite.body.bounce.x = 1;
        this.sprite.body.bounce.y = 1;

        this.sprite.body.velocity.x =
            this.velocity * gameScaleBase * Math.cos(this.angle);
        this.sprite.body.velocity.y =
            this.velocity * gameScaleBase * Math.sin(this.angle);

    }

    destroy () {

        this.sprite.destroy();
        this.live = false;
        return true;

    }

    get x () {
        return this.sprite.x;
    }

    get y () {
        return this.sprite.y;
    }

    set x (x) {
        this.sprite.x = x;
        return true;
    }

    set y (y) {
        this.sprite.y = y;
        return true;
    }

    update () {

        this.sprite.angle += (this.rotationalVelocity * (180 / Math.PI) + 90) / 60;

    }

}
