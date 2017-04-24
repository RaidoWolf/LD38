export default class Scoreboard {

    constructor () {

        this.lastTime = null;
        this.lastPoints = null;
        this.lastDamage = null;
        this.lastHealth = null;

        this.time = 0; // seconds survived
        this.points = 0; // arbitrary score (decreases with upgrades)
        this.damage = 0; // arbitrary damage points done in game
        this.health = 10; // arbitrary health points. When you run out, the game is over.

        this.textTime = game.add.text(16, 16, 'TIME: 0', {fontSize: '24px', fill: '#ffffff'});
        this.textPoints = game.add.text(16, 56, 'POINTS: 0', {fontSize: '16px', fill: '#ffffff'});
        this.textDamage = game.add.text(16, 88, 'DAMAGE: 0', {fontSize: '16px', fill: '#ffffff'});
        this.textHealth = game.add.text(16, 120, 'HEALTH: 10', {fontSize: '24px', fill: '#ffffff'});

        var updateCount = 0;

    }

    update () {

        if (++this.updateCount >= '60') {
            this.updateCount = 0;
            this.time++;
        }

        if (this.lastTime !== this.time) {
            this.lastTime = this.time;
            this.textTime.text = 'TIME: ' + this.time;
        }
        if (this.lastPoints !== this.points) {
            this.lastPoints = this.points;
            this.textPoints.text = 'POINTS: ' + this.points;
        }
        if (this.lastDamage !== this.damage) {
            this.lastDamage = this.damage;
            this.textDamage.text = 'DAMAGE: ' + this.damage;
        }
        if (this.lastHealth !== this.health) {
            this.lastHealth = this.health;
            this.textHealth.text = 'HEALTH: ' + this.health;
        }

    }

}
