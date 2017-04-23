module.exports = function () {

    // start the physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // add a starry background
    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

    // create and animate the sun
    window.sun = game.add.sprite(game.world.centerX, game.world.centerY, 'sun');
    sun.anchor.setTo(0.5, 0.5);
    sun.scale.setTo(gameScaleBase * 2, gameScaleBase * 2);
    sun.animations.add('default');
    sun.animations.play('default', 10, true);

    // create and animate the world (the small one)
    window.asmallworld = game.add.sprite(game.world.centerX, game.world.centerY - gameScaleBase * 128, 'asmallworld');
    asmallworld.anchor.setTo(0.5, 0.5);
    asmallworld.scale.setTo(gameScaleBase * 2, gameScaleBase * 2);
    asmallworld.animations.add('default');
    asmallworld.animations.play('default', 1, true);
    game.physics.arcade.enable(asmallworld);

};
