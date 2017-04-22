module.exports = function () {

    window.background = game.add.tileSprite(0, 0, game.world.width, game.world.height, 'space');

    window.stars = game.add.group();

    var sun = stars.create(game.world.width / 2 - 64, game.world.height / 2 - 64, 'sun');
    sun.scale.setTo(2, 2);

};
