import Rocket from './Rocket.js';
import BasicRocket from './BasicRocket.js';
import DoubleRocket from './DoubleRocket.js';
import UltraRocket from './UltraRocket.js';
import NuclearRocket from './NuclearRocket.js';

export default class RocketLauncher {

    constructor (parent) {

        this.parent = parent;

        this.rocketType = 'basic';
        this.rocketPool = [];

        this.cooldown = false;

    }

    fire (angle) {

        if (!this.cooldown) {

            var self = this;
            var rocket;

            switch (this.rocketType) {
                case 'basic':
                    rocket = new BasicRocket(this.parent.x, this.parent.y, angle, this.parent);
                    break;
                case 'double':
                    rocket = new DoubleRocket(this.parent.x, this.parent.y, angle, this.parent);
                    break;
                case 'ultra':
                    rocket = new UltraRocket(this.parent.x, this.parent.y, angle, this.parent);
                    break;
                case 'nuclear':
                    rocket = new NuclearRocket(this.parent.x, this.parent.y, angle, this.parent);
                    break;
                default:
                    rocket = new BasicRocket(this.parent.x, this.parent.y, angle, this.parent);
                    break;
            }

            this.rocketPool.push(rocket);

            this.cooldown = true;
            window.setTimeout(function () {
                self.cooldown = false;
            }, 250);

            return true;

        } else {

            return false;

        }

    }

    update () {

        for (var i in this.rocketPool) {
            if (this.rocketPool[i].live) {
                this.rocketPool[i].update();
            } else {
                this.rocketPool.splice(i, 1);
            }
        }

    }

    upgrade () {

        switch (this.rocketType) {
            case 'basic':
                this.rocketType = 'double';
                break;
            case 'double':
                this.rocketType = 'ultra';
                break;
            case 'ultra':
                this.rocketType = 'nuclear';
                break;
            case 'nuclear':
                break;
            default:
                this.rocketType = 'basic';
                break;
        }

        return true;

    }

}
