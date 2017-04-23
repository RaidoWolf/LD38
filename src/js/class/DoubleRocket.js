import Rocket from './Rocket.js';

export default class DoubleRocket extends Rocket {

    constructor (x, y, angle, owner) {

        super(x, y, angle, owner);

        this.baseDamage = 200; // dithers to zero at edge of blast radius
        this.blastRadius = 200;
        this.frames = [2, 3];

        this.init(x, y, angle, owner);

    }

}
