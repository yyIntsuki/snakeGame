var game;

game = new Phaser.Game(480, 480, Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);
// game.state.add('About', About); This line disables the game for some reason...

game.state.start('Menu');
