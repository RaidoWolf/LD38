export default class Rocket {

    constructor (x, y, angle, owner) {

        // this is a virtual class, do not construct it.

    }

    destroy () {

        this.sprite.destroy();
        this.live = false;
        return true;

    }

    init (x, y, angle, owner) {

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

    update () {

        if (this.velocity < 300) {
            this.velocity += 5;
        }

        this.sprite.body.velocity.x =
            this.velocity * gameScaleBase * Math.cos(this.angle);
        this.sprite.body.velocity.y =
            this.velocity * gameScaleBase * Math.sin(this.angle);

        for (var i in asteroidEmitter.asteroidPool) {
            var dist2 = Math.abs(
                Math.pow(this.x - asteroidEmitter.asteroidPool[i].x, 2)
            ) + Math.abs(
                Math.pow(this.y - asteroidEmitter.asteroidPool[i].y, 2)
            );

            if (dist2 < 10000) {
                scoreboard.points += Math.round(asteroidEmitter.asteroidPool[i].size * 10);
                scoreboard.damage += Math.round(asteroidEmitter.asteroidPool[i].size * 100);
                this.destroy();
                asteroidEmitter.asteroidPool[i].destroy();
            }
        }

    }

}
