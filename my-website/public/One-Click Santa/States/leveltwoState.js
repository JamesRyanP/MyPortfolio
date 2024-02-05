'use strict';


var leveltwoState = {
    init: function () {
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

    create: function () {
        this.game.stage.backgroundColor = "#4488AA";
        this.titleText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'HighScore:' + ' ' + Gamedata.highscore, { fontSize: '36px', fill: '#FFFFFF' });
        this.titleText.anchor.setTo(0.5, 0.5);

        this.bestHighscoreText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 100, 'Your best highscore:' + ' ' + Gamedata.bestHighScore, { fontSize: '36px', fill: '#FFFFFF' });
        this.bestHighscoreText.anchor.setTo(0.5, 0.5);

        var buttonWidth = 200;
        var buttonHeight = 50;

        // Create a graphics object for the button background
        var graphics = this.game.add.graphics(0, 0);
        graphics.beginFill(0x000000); // Black background color
        graphics.drawRect(this.game.world.centerX - buttonWidth / 2, this.game.world.centerY + 200 - buttonHeight / 2, buttonWidth, buttonHeight);

        // Create a text object for the button text
        var buttonText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 200, 'Submit highscore!', {
            font: '24px Arial',
            fill: '#FFFFFF',  // White text color
            align: 'center'
        });
        buttonText.anchor.setTo(0.5, 0.5);

        // Enable input on the graphics object to make it interactive
        graphics.inputEnabled = true;

        // Add click event to the graphics object
        graphics.events.onInputDown.add(this.onButtonClick, this);
    },

    update: function () {
        if (this.game.input.activePointer.isDown) {
            game.state.start('levelone', true, false);
        }
    },

    onButtonClick: function () {
           // Construct the URL with the Gamedata.bestHighScore value as a query parameter
    const url = `https://kfsem2lsulfer52if4yysemq7e0rixkv.lambda-url.ca-central-1.on.aws/?highscore=${Gamedata.bestHighScore}`;

    // Make an HTTP request to the URL
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Request successful:", data);
            // Handle the response data as needed
        })
        .catch(error => {
            console.error("Error during fetch:", error);
            // Handle errors
        });
    },
};
