import Rocket from './Rocket.js';

export default class UltraRocket extends Rocket {

    constructor (x, y, angle, owner) {

        super(x, y, angle, owner);

        this.baseDamage = 300; // dithers to zero at edge of blast radius
        this.blastRadius = 300;
        this.frames = [4, 5];

        this.init(x, y, angle, owner);

    }

}
