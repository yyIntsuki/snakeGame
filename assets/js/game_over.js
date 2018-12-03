var Game_Over = {

    preload:function(){
        game.load.image('gameover', './assets/images/gameover.png');
    },

    create:function(){
        this.add.button(0, 0, 'gameover', this.startGame, this);

        game.add.text(235, 350, "Highscore", { font: "bold 16px sans-serif", fill: "#bbff00", align: "center"});
        game.add.text(240, 370, score.toString(), { font: "bold 20px sans-serif", fill: "#fff", align: "center" });
    },

    startGame:function(){
        this.state.start('Game');
    }
};