export default class Scoreboard {

    constructor (player) {

        this.lastTime = null;
        this.lastPoints = null;
        this.lastHealth = null;

        this.time = 0; // seconds survived
        this.points = 0; // arbitrary score (decreases with upgrades)
        this.damage = 0; // arbitrary damage points done in game
        this.player = player; // this is where we get health from

        this.textTime = game.add.text(16, 16, 'TIME: 0', {fontSize: '24px', fill: '#ffffff'});
        this.textPoints = game.add.text(16, 56, 'POINTS: 0', {fontSize: '16px', fill: '#ffffff'});
        this.textHealth = game.add.text(16, 88, 'HEALTH: 10', {fontSize: '24px', fill: '#ffffff'});
        gui.add(this.textTime);
        gui.add(this.textPoints);
        gui.add(this.textHealth);

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
            }
            this.lastTime = this.time;
            this.textTime.text = 'TIME: ' + this.time;
        }

        if (this.lastPoints !== this.points) {
            if (
                (this.lastPoints < 1000 && this.points >= 1000) ||
                (this.lastPoints < 2000 && this.points >= 2000) ||
                (this.lastPoints < 4000 && this.points >= 4000) ||
                (this.lastPoints < 8000 && this.points >= 8000)
            ) {
                asmallworld.upgradeWeapon();
            }
            this.lastPoints = this.points;
            this.textPoints.text = 'POINTS: ' + this.points;
        }

        if (this.lastHealth !== this.player.health) {
            this.lastHealth = this.player.health;
            this.textHealth.text = 'HEALTH: ' + this.player.health;
        }

    }

}
