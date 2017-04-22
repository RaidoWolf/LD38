module.exports = function () {

    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');
    window.sun = game.add.sprite(game.world.width / 2 - 64, game.world.height / 2 - 64, 'sun');
    sun.scale.setTo(2, 2);
    sun.animations.add('default');
    sun.animations.play('default', 5, true);

};
