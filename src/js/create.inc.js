import ASmallWorld from './class/ASmallWorld.js';

export default function () {

    // start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // add a starry background
    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

    // create and animate the sun
    window.sun = game.add.sprite(game.world.centerX, game.world.centerY, 'sun');
    sun.anchor.setTo(0.5, 0.5);
    sun.scale.setTo(gameScaleBase, gameScaleBase);
    sun.animations.add('default');
    sun.animations.play('default', 10, true);

    // create and animate the world (the small one)
    window.asmallworld = new ASmallWorld(game.world.centerX, game.world.centerY - gameScaleBase * 64);

}
