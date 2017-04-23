import Rocket from './Rocket.js';

export default class NuclearRocket extends Rocket {

    constructor (x, y, angle, owner) {

        super(x, y, angle, owner);

        this.baseDamage = 400; // dithers to zero at edge of blast radius
        this.blastRadius = 400;
        this.frames = [6, 7];

        this.init(x, y, angle, owner);

    }

}
