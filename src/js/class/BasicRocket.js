import Rocket from './Rocket.js';

export default class BasicRocket extends Rocket {

    constructor (x, y, angle, owner) {

        super(x, y, angle, owner);

        this.baseDamage = 100; // dithers to zero at edge of blast radius
        this.blastRadius = 100;
        this.frames = [0, 1];

        this.init(x, y, angle, owner);

    }

}
