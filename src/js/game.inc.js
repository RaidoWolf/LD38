window.game = new Phaser.Game(
    window.innerWidth * window.devicePixelRatio, // game window width
    window.innerHeight * window.devicePixelRatio, // game window height
    Phaser.AUTO, // automatically choose renderer
    '', // initial DOM element (take whole window)
    { // initial game state object
        preload: require('./preload.inc.js'),
        create: require('./create.inc.js'),
        update: require('./update.inc.js')
    },
    false, //disable canvas transparency
    false //disable anti-aliasing
);

window.largestDimension = window.innerWidth > window.innerHeight ? window.innerWidth * window.devicePixelRatio : window.innerHeight * window.devicePixelRatio;
window.gameScaleBase = largestDimension / 800;

module.exports = window.game;
