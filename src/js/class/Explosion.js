export default class Explosion {

    constructor (x, y, baseDamage, radius) {

        this.alive = true;

        this.baseDamage = baseDamage;
        this.radius = radius * gameScaleBase;

        for (var i in asteroidEmitter.asteroidPool) {
            var dist2 =
                Math.pow(x - asteroidEmitter.asteroidPool[i].x, 2) +
                Math.pow(y - asteroidEmitter.asteroidPool[i].y, 2);

            if (dist2 < Math.pow((24 * gameScaleBase * asteroidEmitter.asteroidPool[i].size) + radius, 2)) {
                var hitboxRadius2 = Math.pow(24 * gameScaleBase * asteroidEmitter.asteroidPool[i].size, 2);
                var hitboxDist2 = Math.abs(dist2 - hitboxRadius2);
                var damageMultiplier = 1 / (hitboxDist2 / Math.pow(radius, 2));

                var asteroidHealth = asteroidEmitter.asteroidPool[i].health;
                var damage = baseDamage * damageMultiplier * 0.2;
                asteroidEmitter.asteroidPool[i].health -= damage;
                scoreboard.points += Math.ceil(damage < asteroidHealth ? damage : asteroidHealth);
            }
        }

        this.destroy();

    }

    destroy () {

        this.alive = false;

    }

    update () {

    }

}
