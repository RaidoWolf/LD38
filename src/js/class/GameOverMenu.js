export default class GameOverMenu {

    constructor () {

        this.backgroundBar = game.add.graphics();
        menu.add(this.backgroundBar);

        this.backgroundBar.beginFill(0xff0000, 0.5);
        this.backgroundBar.drawRect(
            0,
            game.world.height / 2 - 100,
            game.world.width,
            game.world.height / 2
        );

        this.titleText = game.add.text(0, 0, 'GAME OVER!', {
            fill: '#ffffff',
            fontSize: '36px',
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        });

        this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.75)', 4);

        this.titleText.setTextBounds(
            0,
            game.world.height / 2 - 100,
            game.world.width,
            game.world.height / 2
        );

        menu.add(this.titleText);

        this.scoreText = game.add.text(0, 0, 'You survived ' + scoreboard.time + ' seconds and scored ' + scoreboard.points + ' points.', {
            fill: '#ffffff',
            fontSize: '22px',
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        });

        this.scoreText.setTextBounds(
            0,
            game.world.height / 2,
            game.world.width,
            game.world.height / 2 + 80
        );

        menu.add(this.scoreText);

        this.helpBar = game.add.graphics();
        menu.add(this.helpBar);

        this.helpBar.beginFill(0xffffff, 0.2);
        this.helpBar.drawRect(
            0,
            game.world.height / 2 + 80,
            game.world.width,
            game.world.height / 2 + 140
        );

        this.helpText = game.add.text(0, 0, 'click here to restart', {
            fill: '#ffffff',
            fontSize: '18px',
            boundsAlignH: 'center',
            boundsAlignV: 'middle'
        });

        this.helpText.setTextBounds(
            0,
            game.world.height / 2 + 80,
            game.world.width,
            game.world.height / 2 + 140
        );

        menu.add(this.helpText);

        this.helpText.inputEnabled = true;

        this.helpText.events.onInputDown.add(function () {
            game.state.start('playing');
        }, this);

    }

}
