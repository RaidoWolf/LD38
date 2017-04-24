import addEvent from '../function/addEvent.js';

export default class Crosshair {

    constructor () {

        console.log('slkdfjsdlkj');

        var self = this;

        // create the sprite
        this.sprite = game.add.sprite(-100, -100, 'crosshair-normal');
        gui.add(this.sprite);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(1, 1);

        // track mouse movement
        game.input.addMoveCallback(function (pointer, x, y) {
            self.update(pointer, x, y);
        });

        // detect when mouse leaves screen
        addEvent(document, 'mouseout', function () {
            self.hide();
        });

        // detect when mouse re-enters screen
        addEvent(document, 'mouseover', function () {
            self.show();
        });

    }

    get x () {
        return this.sprite.x;
    }

    get y () {
        return this.sprite.y;
    }

    set x (x) {
        this.sprite.x = x;
        return true;
    }

    set y (y) {
        this.sprite.y = y;
        return true;
    }

    hide () {
        this.sprite.visible = false;
    }

    show () {
        this.sprite.visible = true;
    }

    // mouse movement callback
    update (pointer, x, y) {
        this.sprite.x = x;
        this.sprite.y = y;
    }

}
