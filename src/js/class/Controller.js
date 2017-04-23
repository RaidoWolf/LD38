export default class Controller {

    constructor (cursor, player) {

        this.cursor = cursor;
        this.player = player;
        this.leftButtonWasDown = false;

        game.input.mouse.capture = true;

    }

    getPlayerAngleToCursor () {

        return Math.atan2(
            this.cursor.y - this.player.y,
            this.cursor.x - this.player.x
        );

    }

    update () {

        if (!this.leftButtonWasDown) {
            if (game.input.activePointer.leftButton.isDown) {
                this.player.fireWeapon(this.getPlayerAngleToCursor());
                this.leftButtonWasDown = true;
            }
        } else {
            if (!game.input.activePointer.leftButton.isDown) {
                this.leftButtonWasDown = false;
            }
        }

    }

}
