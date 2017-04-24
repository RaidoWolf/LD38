export default class Scoreboard {

    constructor () {

        this.lastTime = null;
        this.lastPoints = null;

        this.time = 0; // seconds survived
        this.points = 0; // arbitrary score (decreases with upgrades)
        this.damage = 0; // arbitrary damage points done in game

        this.textTime = game.add.text(16, 16, 'TIME: 0', {fontSize: '24px', fill: '#ffffff'});
        this.textPoints = game.add.text(16, 56, 'POINTS: 0', {fontSize: '16px', fill: '#ffffff'});
        gui.add(this.textTime);
        gui.add(this.textPoints);

        this.updateCount = 0;

    }

    update () {

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
                if (asteroidEmitter.maxSize < 6) {
                    asteroidEmitter.maxSize += 0.2;
                }
            }
            this.lastTime = this.time;
            this.textTime.text = 'TIME: ' + this.time;
        }

        if (this.lastPoints !== this.points) {
            if (
                (this.lastPoints < 2500 && this.points >= 2500) ||
                (this.lastPoints < 10000 && this.points >= 10000) ||
                (this.lastPoints < 25000 && this.points >= 25000)
            ) {
                asmallworld.upgradeWeapon();
            }
            this.lastPoints = this.points;
            this.textPoints.text = 'POINTS: ' + this.points;
        }

    }

}
