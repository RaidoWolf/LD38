import preload from './preload.inc.js';
import create from './create.inc.js';
import update from './update.inc.js';

window.game = new Phaser.Game(
    window.innerWidth * window.devicePixelRatio, // game window width
    window.innerHeight * window.devicePixelRatio, // game window height
    Phaser.AUTO, // automatically choose renderer
    '', // initial DOM element (take whole window)
    { // initial game state object
        preload: preload,
        create: create,
        update: update
    },
    false, //disable canvas transparency
    false //disable anti-aliasing
);

window.largestDimension = window.innerWidth > window.innerHeight ? window.innerWidth * window.devicePixelRatio : window.innerHeight * window.devicePixelRatio;
window.gameScaleBase = largestDimension / 800;

export default window.game;
