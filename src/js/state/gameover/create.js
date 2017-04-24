import Crosshair from '../../class/Crosshair.js';

export default function create () {

    window.environment = game.add.group();
    window.menu = game.add.group();
    window.gui = game.add.group();

    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');
    environment.add(background);

    window.crosshair = new Crosshair();

}
