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

        this.asteroidPool.push(new Asteroid(
            x,
            y,
            Math.random() * 2 * Math.PI - Math.PI,
            Math.random() * 2 * Math.PI - Math.PI,
            Math.log2(Math.random() * Math.pow((this.maxSize - this.minSize), 2)) + this.minSize,
            Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity
        ));

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
            if (
                // asteroid is inside bounds
                this.asteroidPool[i].y > this.topLine &&
                this.asteroidPool[i].y < this.bottomLine &&
                this.asteroidPool[i].x < this.leftLine &&
                this.asteroidPool[i].x > this.rightLine
            ) {
                this.asteroidPool[i].update();
            } else {
                delete this.asteroidPool[i];
            }
        }

    }

}
