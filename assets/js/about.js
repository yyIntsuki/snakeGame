var About = {
    preload : function(){
        game.load.image('menubg', './assets/images/menubg.png');
        game.load.image('abouttext', './assets/images/about.png');
    },

    create : function(){
        this.add.sprite(0, 0, 'menubg');
        this.add.sprite(0, 0, 'abouttext');
        this.add.button(0, 0, 'gameover', this.returnMenu, this);
    },

    returnMenu: function(){
        this.state.start('Menu');
    }

};