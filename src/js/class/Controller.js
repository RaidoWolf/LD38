export default class Controller {

    constructor (cursor, player) {

        this.cursor = cursor;
        this.player = player;

        game.input.mouse.capture = true;

    }

    getPlayerAngleToCursor () {

        return Math.atan2(
            this.cursor.y - this.player.y,
            this.cursor.x - this.player.x
        );

    }

    update () {

        if (game.input.activePointer.leftButton.isDown) {
            this.player.fireWeapon(this.getPlayerAngleToCursor());
        }

    }

}
