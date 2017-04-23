module.exports = function () {

    // add a starry background
    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

    // create and animate the sun
    window.sun = game.add.sprite(game.world.width / 2 - 64, game.world.height / 2 - 64, 'sun');
    sun.scale.setTo(2, 2);
    sun.animations.add('default');
    sun.animations.play('default', 10, true);

    // create and animate the world (the small one)
    window.asmallworld = game.add.sprite(game.world.width / 2 - 16, game.world.height / 2 - 128, 'asmallworld');
    asmallworld.scale.setTo(2, 2);
    asmallworld.animations.add('default');
    asmallworld.animations.play('default', 1, true);

};
