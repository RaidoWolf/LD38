import preload from './gameover/preload.js';
import create from './gameover/create.js';
import update from './gameover/update.js';

function gameOverState () {}

gameOverState.prototype.preload = preload;
gameOverState.prototype.create = create;
gameOverState.prototype.update = update;

export default gameOverState;
