window.game = new Phaser.Game(
    window.innerWidth * window.devicePixelRatio,
    window.innerHeight * window.devicePixelRatio,
    Phaser.AUTO,
    '',
    {
        preload: require('./preload.inc.js'),
        create: require('./create.inc.js'),
        update: require('./update.inc.js')
    }
);

module.exports = game;
