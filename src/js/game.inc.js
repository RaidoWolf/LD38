window.game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: require('./preload.inc.js'),
    create: require('./create.inc.js'),
    update: require('./update.inc.js')
});

module.exports = game;
