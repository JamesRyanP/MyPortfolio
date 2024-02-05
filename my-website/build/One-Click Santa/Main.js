'use strict';

var mainState = {
    preload: function() {
       
        game.load.onLoadComplete.add(this.loadComplete, this);

        game.load.image('teleport', 'Assets/Present.png');
        game.load.spritesheet('bomb', 'Assets/Penguin.png', 32, 45, );
        game.load.image('background', 'Assets/background.png');
        game.load.spritesheet('deer', 'Assets/reindeer.png', 32, 55, );
        game.load.spritesheet('ghost', 'Assets/Ginger.png', 32, 55);
        game.load.image('milk', 'Assets/milk.png');
        game.load.spritesheet('player', 'Assets/Santa.png', 32, 48, 7);
        game.load.spritesheet('viking', 'Assets/Tree.png', 32, 55, 4);
        game.load.spritesheet('yeti', 'Assets/Bigfoot.png', 64, 45, );
        game.load.spritesheet('animal', 'Assets/Snowman.png', 32, 45, );
        
        game.load.start();
    },
    
    loadComplete: function() {
        //start state here
        game.state.start('title', true, false);
    },
    
};