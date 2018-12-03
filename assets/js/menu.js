var Menu = {
    preload:function(){
        game.load.image('menu', './assets/images/menu.png');
        game.load.image('menubg', './assets/images/menubg.png');
        game.load.image('start', './assets/images/btn-start.png');
        game.load.image('about', './assets/images/btn-about.png');
    },

    create:function(){
        this.add.sprite(0, 0, 'menubg');
        this.add.sprite(0, 0, 'menu');
        this.add.button(0, 200, 'start', this.startGame, this);
        this.add.button(0, 340, 'about', this.aboutGame, this);
    },

    startGame:function(){
        this.state.start('Game');
    },

    aboutGame:function(){
        this.state.start('About');
    }
};