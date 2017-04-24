import playingState from './state/playing.js';
import gameOverState from './state/gameover.js';

window.playingState = playingState;

window.game = new Phaser.Game(
    window.innerWidth * window.devicePixelRatio, // game window width
    window.innerHeight * window.devicePixelRatio, // game window height
    Phaser.AUTO, // automatically choose renderer
    '', // initial DOM element (take whole window)
    null,
    false, //disable canvas transparency
    false //disable anti-aliasing
);

game.state.add('playing', playingState);
game.state.add('gameover', gameOverState);

game.state.start('playing');

window.largestDimension = window.innerWidth > window.innerHeight ? window.innerWidth * window.devicePixelRatio : window.innerHeight * window.devicePixelRatio;
window.gameScaleBase = largestDimension / 800;

export default window.game;
