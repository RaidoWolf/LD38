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

window.largestDimension = window.innerWidth > window.innerHeight ? window.innerWidth * window.devicePixelRatio : window.innerHeight * window.devicePixelRatio;
window.gameScaleBase = largestDimension / 800;

module.exports = window.game;
