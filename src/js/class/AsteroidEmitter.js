import Asteroid from './Asteroid.js';

export default class AsteroidEmitter {

    constructor () {

        this.spawnTicks = 60;
        this.aliveLimit = 20;
        this.minSize = 1;
        this.maxSize = 2;
        this.minVelocity = 10;
        this.maxVelocity = 50;

        this.topLine = -500;
        this.leftLine = -500;
        this.bottomLine = game.world.height + 500;
        this.rightLine = game.world.height + 500;

        this.asteroidPool = [];

        this.tickCount = 0;

    }

    spawn () {

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
                y = Math.random() & (this.bottomLine - this.topLine) + this.topLine;
                break;
            default:
                x = -1000;
                y = -1000;

        }

        var asteroid = new Asteroid(
            x,
            y,
            Math.random() * 2 * Math.PI - Math.PI,
            Math.random() * Math.PI - Math.PI,
            Math.random() * (this.maxSize - this.minSize) + this.minSize,
            Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity
        );

        this.asteroidPool.push(asteroid);

        return true;

    }

    update () {

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
                    //this.asteroidPool[i].y >= this.topLine - 100 &&
                    //this.asteroidPool[i].y <= this.bottomLine + 100 &&
                    //this.asteroidPool[i].x <= this.leftLine - 100 &&
                    //this.asteroidPool[i].x >= this.rightLine + 100
                    true
                ) {
                    this.asteroidPool[i].update();
                } else {
                    this.asteroidPool[i].destroy();
                }
            } else {
                this.asteroidPool.splice(i, 1);
            }
        }

    }

}
