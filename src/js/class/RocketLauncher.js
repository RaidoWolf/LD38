import Rocket from './Rocket.js';
import BasicRocket from './BasicRocket.js';
import DoubleRocket from './DoubleRocket.js';
import UltraRocket from './UltraRocket.js';
import NuclearRocket from './NuclearRocket.js';

export default class RocketLauncher {

    constructor (owner) {

        this.owner = owner;

        this.rocketType = 'basic';
        this.rocketPool = [];
        this.explosionPool = [];

        this.cooldown = false;

    }

    fire (angle) {

        if (!this.cooldown) {

            var self = this;
            var rocket;

            switch (this.rocketType) {
                case 'basic':
                    rocket = new BasicRocket(this.owner.x, this.owner.y, angle, this);
                    break;
                case 'double':
                    rocket = new DoubleRocket(this.owner.x, this.owner.y, angle, this);
                    break;
                case 'ultra':
                    rocket = new UltraRocket(this.owner.x, this.owner.y, angle, this);
                    break;
                case 'nuclear':
                    rocket = new NuclearRocket(this.owner.x, this.owner.y, angle, this);
                    break;
                default:
                    rocket = new BasicRocket(this.owner.x, this.owner.y, angle, this);
                    break;
            }

            this.rocketPool.push(rocket);

            this.cooldown = true;
            window.setTimeout(function () {
                self.cooldown = false;
            }, 333);

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

        for (i in this.explosionPool) {
            if (this.explosionPool[i].live) {
                this.explosionPool[i].update();
            } else {
                this.explosionPool.splice(i, 1);
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
