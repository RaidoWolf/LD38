export default class Crosshair {

    constructor () {

        var self = this;

        // create the sprite
        this.sprite = game.add.sprite(0, 0, 'crosshair-normal');
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(1, 1);

        // track mouse movement
        game.input.addMoveCallback(function (pointer, x, y) {
            self.update(pointer, x, y);
        });

    }

    // mouse movement callback
    update (pointer, x, y) {
        this.sprite.x = x;
        this.sprite.y = y;
    }

}
