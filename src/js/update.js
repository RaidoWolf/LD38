export default function () {

    game.physics.arcade.collide(enemies);
    game.physics.arcade.collide(enemies, solidEnvironment);

    asmallworld.update();
    controller.update();
    scoreboard.update();
    asteroidEmitter.update();

}
