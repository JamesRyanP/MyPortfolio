'use strict';

var TitleState = {
    init: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = 800;
        this.scale.maxHeight = 800;
        this.scale.windowConstraints.bottom = "visual";
        this.scale.pageAlignHorizontally = true;
    },
    
    preload: function () {
  
    },

    create: function() {
        this.game.stage.backgroundColor = "#000000";
        this.titleText = this.game.add.text(this.game.world.centerX,this.game.world.centerY, 'Click or Tap to Start', { fontSize: '36px', fill: '#FFFFFF'});
        this.titleText.anchor.setTo(0.5,0.5);

        this.bestHighscoreText = this.game.add.text(this.game.world.centerX,this.game.world.centerY + 100 , 'Your best highscore:' + ' ' + Gamedata.bestHighScore, { fontSize: '36px', fill: '#FFFFFF'});
        this.bestHighscoreText.anchor.setTo(0.5,0.5);

        
    },

    update: function() {
        if(this.game.input.activePointer.isDown) {
            game.state.start('levelone', true, false);
        }
    },
};