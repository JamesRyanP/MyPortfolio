
var leveloneState = {

    init: function() {

        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.maxWidth = 800;
        this.scale.maxHeight = 800;
        this.scale.windowConstraints.bottom = "visual";
        this.scale.pageAlignHorizontally = true;
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    preload: function() {
      
        this.monsterCount = 50;
        
    },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    create: function() {
 
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.snow = this.add.image(0,0, 'background');
        this.snow.scale.setTo(1.5,2);
        this.clickable = false;
        this.reindeerDidTeleport = false;
        this.reindeerIsstopped = true


        // Deer //

        this.reindeer = game.add.sprite(this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(50, this.game.height - 150), 'deer')
        this.reindeer.anchor.setTo(0.5,0.5);
        this.reindeer.scale.setTo(1.5);
        this.game.physics.arcade.enable(this.reindeer);
        this.reindeer.enableBody = true;
        

        // High Score //

        this.highScore = 0;
        this.highScoreText = game.add.text(this.game.world.centerX,15, 'High Score: 0', { fontSize: '16px', fill: '#FFFFFF'});
        this.highScoreText.anchor.setTo(0.5, 0);
        this.highScoreText.align = 'center';

        // points system //
        this.points = 0;
        this.pointsText = game.add.text(15,15, 'Next Lvl : 0', { fontSize: '12px', fill: '#FFFFFF'});
        this.nextLevelText = game.add.text(100,15, ('') , { fontSize: '12px', fill: '#FFFFFF'});
        
        //Level System //
        this.playerLevel = 1;
        this.playerLevelText = game.add.text(this.game.world.centerX,50, 'Lvl 1', { fontSize: '12px', fill: '#FFFFFF'});

        //Player State//
        this.player = game.add.sprite(game.world.width - 450, game.world.height - 75, 'player')
        this.player.anchor.setTo(0.5,0.0);
        this.player.animations.add('walk',[1,2,3,0], 4, true);
        this.player.animations.add('attack',[4,5,6,6,0], 6, false);
        game.physics.arcade.enable(this.player)
        this.player.inputEnabled = true;
        this.player.input.enableDrag(false, true);
        this.player.input.allowVerticalDrag = false;
        this.player.input.allowHorizontalDrag = true;
        this.player.targetSize = 1;
        this.player.scale.setTo(1.4);
        this.didCreateSprite = false;

        
    

        //Power Ups /


         // create an array of milk
        this.teleport = [];

        // push a single milk to array
        for (var i = 0; i < 2; i++) {
            this.teleport.push(game.add.sprite(this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(50, this.game.height - 150), 'teleport'));
            this.teleport[i].scale.setTo(2);  
            game.physics.arcade.enable(this.teleport[i]);
            this.teleport[i].enableBody = true;
        }



        // create an array of milk
        this.milk = [];

        // push a single milk to array
        for (var i = 0; i < 2; i++) {
            this.milk.push(game.add.sprite(this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(50, this.game.height - 150), 'milk'));
            this.milk[i].scale.setTo(2);  
            game.physics.arcade.enable(this.milk[i]);
            this.milk[i].enableBody = true;
        }
        
        // Used For REFERENCE ONLY this.milk[0].scale.setTo(0.05);
        //Add Monster Groups Here//


        this.yetiMonsters = new Phaser.Group(this.game, this, 'yetiGroup', true);
        this.vikingMonsters = new Phaser.Group(this.game, this, 'vikingGroup', true);
        this.animalMonsters = new Phaser.Group(this.game, this, 'animalGroup', true);
        this.slimeMonsters = new Phaser.Group(this.game, this, 'slimeGroup', true);
        this.monsterGroup = new Phaser.Group(this.game, this, 'monsterGroup', true);
        this.powerupGroup = new Phaser.Group(this.game, this, 'powerupGroup', true);

        this.createMonsterGroup(this.monsterGroup, 50);
        this.createSlimeGroup(this.slimeMonsters, 30);
        this.createAnimalGroup(this.animalMonsters, 25);
        this.createVikingGroup(this.vikingMonsters, 20);
        this.createYetiGroup(this.yetiMonsters, 15);

        for (var i = 0; i < this.milk.length; i++) {
            this.powerupGroup.add(this.milk[i]);
        }

        for (var i = 0; i < this.teleport.length; i++) {
            this.powerupGroup.add(this.teleport[i]);
        }

        /*
        for (var i = 0; i < this.monsterCount; i++) {
            //add monsters here
            var x = this.game.rnd.integerInRange(100, this.game.width - 100);
            var y = this.game.rnd.integerInRange(50, this.game.height - 150);
            var randomXVelocity = this.game.rnd.integerInRange(-1, 1);
            var randomStep = this.game.rnd.integerInRange(50, 100);
            //var randomYVelocity = this.game.rnd.integerInRange(-5, 5);

            var monster = this.monsterGroup.create(x, y, 'bomb');
            monster.enableBody = true;
            monster.scale.setTo(0.05);
            monster.xVelocity = randomXVelocity;
            monster.stepCap = randomStep;
            monster.currentStep = 0;
            this.game.physics.arcade.enable(monster);
        }
        */
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    update: function() {
        this.updateMonsterGroup();
        this.updatePlayerLevel();
        this.startLeveltwo();
        this.playAnimation();
        
        
        // Player Level Text //
        this.playerLevelText.x = this.player.x + 25;
        this.playerLevelText.y = this.player.y -25;
        this.nextLevelText.x = 100;
        this.nextLevelText.y = 15;
        this.nextLevelText.text = '/' + ' ' + this.playerLevel * 10;

        
        // Add Overlap Interactions here//
        game.physics.arcade.overlap(this.player, this.monsterGroup, this.killMonsterBomb, null, this)
        game.physics.arcade.overlap(this.player, this.slimeMonsters, this.killMonsterSlime, null, this)
        game.physics.arcade.overlap(this.player, this.animalMonsters, this.killMonsterAnimal, null, this)
        game.physics.arcade.overlap(this.player, this.vikingMonsters, this.killMonsterViking, null, this)
        game.physics.arcade.overlap(this.player, this.yetiMonsters, this.killMonsterYeti, null, this)
        game.physics.arcade.overlap(this.player, this.reindeer, this.reindeerPowerup, null, this)

        // Teleport //
        for (var i = 0; i < this.teleport.length; i++) {
            game.physics.arcade.overlap(this.player, this.teleport[i], this.teleportPowerup, null, this);
        }

        // Milk Powerup //
        for (var i = 0; i < this.milk.length; i++) {
            game.physics.arcade.overlap(this.player, this.milk[i], this.milkPowerup, null, this);
        }
       
       
        // Add Reindeer Phsyics //

        if(this.reindeer.body.velocity.y != 0) {
            game.physics.arcade.overlap(this.reindeer, this.monsterGroup, this.reindeerMonsterBomb, null, this);
            game.physics.arcade.overlap(this.reindeer, this.slimeMonsters, this.reindeerMonsterSlime, null, this);
            game.physics.arcade.overlap(this.reindeer, this.animalMonsters, this.reindeerMonsterAnimal, null, this);
            game.physics.arcade.overlap(this.reindeer, this.vikingMonsters, this.reindeerMonsterViking, null, this);
            game.physics.arcade.overlap(this.reindeer, this.yetiMonsters, this.reindeerMonsterYeti, null, this);
              // Teleport //
        for (var i = 0; i < this.teleport.length; i++) {
            game.physics.arcade.overlap(this.reindeer, this.teleport[i], this.teleportPowerup, null, this);
        }

        // Milk Powerup //
        for (var i = 0; i < this.milk.length; i++) {
            game.physics.arcade.overlap(this.reindeer, this.milk[i], this.milkPowerup, null, this);
        }
        }

        // Add Game Controls Here//

        if(this.game.input.activePointer.isDown && this.clickable == false) {
            this.player.x = this.game.input.activePointer.x
            this.player.y = this.game.height - 75
            this.didCreateSprite = true;
        }
        
        if(this.game.input.activePointer.isUp && this.didCreateSprite == true) {
            this.player.input.allowHorizontalDrag = false;
            this.player.body.velocity.y = -50;
            this.player.animations.play('walk');
            this.clickable = true;
            this.didCreateSprite = false;
        }

        if (this.reindeer.y <= 50 && this.reindeerDidTeleport == true) {
            this.reindeer.animations.stop('run');
            this.reindeer.body.velocity.y = 0;
            this.reindeerIsstopped = true;
        }

        if (this.player.y <= 50) {
            this.player.body.velocity.y = 0;
            this.player.animations.stop('walk');
        }
        
    },




    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS //
    playAnimation: function() {
        this.monsterGroup.forEach(this.monsterAnimation);
    },
    
    monsterAnimation: function(monster) {
        if (monster.xVelocity > 0) {
            monster.animations.play('righthop');
        }

        if (monster.xVelocity <= 0) {
            monster.animations.play('lefthop');
        }
    },


    updateMonsterGroup: function() {
        this.slimeMonsters.forEach(this.updateIndividualMonster);
        this.animalMonsters.forEach(this.updateIndividualMonster);
        this.vikingMonsters.forEach(this.updateIndividualMonster);
        this.yetiMonsters.forEach(this.updateIndividualMonster);
        this.monsterGroup.forEach(this.updateIndividualMonster);
        
        
        //this.monsterGroup.x += this.bombspeed; 
    },

    updateIndividualMonster: function(monster) {
        monster.x += monster.xVelocity;
        monster.y += monster.yVelocity;
        monster.currentStep++;
        if (monster.currentStep >= monster.stepCap) {
            monster.xVelocity = -monster.xVelocity;
            monster.yVelocity = -monster.yVelocity;
            monster.currentStep = 0;
        }
    },
    
    // MONSTER COLLISION FUNCTIONS //
    killMonsterBomb: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
            this.player.animations.play('attack');
            this.game.time.events.add(Phaser.Timer.SECOND * .6, this.walkAnimation, this);
            monster.kill()
            this.shake()
            this.highScore += 5
            this.highScoreText.text = 'High Score:' + ' ' + this.highScore
            this.points += 5
            this.pointsText.text = 'Points: ' + this.points
            this.createScoreAnimation(monster.x + 10, monster.y + 10, '5', );
            player.y = (this.player.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.gameRestartlose();
            player.kill()
        }
    },

    reindeerMonsterBomb: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
        monster.kill()
        this.highScore += 5
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 5
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '10', );
        this.reindeer.y = (this.reindeer.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.reindeerIsstopped = true;
            this.reindeer.kill()
        }
    },

    killMonsterSlime: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
            this.player.animations.play('attack');
            this.game.time.events.add(Phaser.Timer.SECOND * .6, this.walkAnimation, this);
            monster.kill()
            this.shake()
            this.highScore += 10
            this.highScoreText.text = 'High Score:' + ' ' + this.highScore
            this.points += 10
            this.pointsText.text = 'Points: ' + this.points
            this.createScoreAnimation(monster.x + 10, monster.y + 10, '10', );
        player.y = (this.player.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.gameRestartlose();
            player.kill()
        }
    },

    reindeerMonsterSlime: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
        monster.kill()
        this.highScore += 10
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 10
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '10', );
        this.reindeer.y = (this.reindeer.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.reindeerIsstopped = true;
            this.reindeer.kill()
        }

    },

    killMonsterAnimal: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
            this.player.animations.play('attack');
            this.game.time.events.add(Phaser.Timer.SECOND * .6, this.walkAnimation, this);
        monster.kill()
        this.shake()
        this.highScore += 20
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 20
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '20', );
        player.y = (this.player.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.gameRestartlose();
            player.kill()
        }
    },

    reindeerMonsterAnimal: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
        monster.kill()
        this.highScore += 20
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 20
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '20', );
        this.reindeer.y = (this.reindeer.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.reindeerIsstopped = true;
            this.reindeer.kill()
        }
    },

    killMonsterViking: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
            this.player.animations.play('attack');
            this.game.time.events.add(Phaser.Timer.SECOND * .6, this.walkAnimation, this);
        monster.kill()
        this.shake()
        this.highScore += 40
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 40
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '40', );
        player.y = (this.player.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.gameRestartlose();
            player.kill()
        }
    },

    reindeerMonsterViking: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
        monster.kill()
        this.highScore += 40
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 40
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '40', );
        this.reindeer.y = (this.reindeer.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.reindeerIsstopped = true;
            this.reindeer.kill()
        }
    },

    killMonsterYeti: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
            this.player.animations.play('attack');
            this.game.time.events.add(Phaser.Timer.SECOND * .6, this.walkAnimation, this);
        monster.kill()
        this.shake()
        this.highScore += 70
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 70
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '70', );
        player.y = (this.player.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.gameRestartlose();
            player.kill()
        }
    },

    reindeerMonsterYeti: function (player, monster) {
        if (this.playerLevel >= monster.Level) {
        monster.kill()
        this.highScore += 70
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.points += 70
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(monster.x + 10, monster.y + 10, '70', );
        this.reindeer.y = (this.reindeer.y + 15);
        }
        else if (this.playerLevel < monster.Level) {
            this.reindeerIsstopped = true;
            this.reindeer.kill()   
        }
    },

    updatePlayerLevel: function () {
        var tempLevel = 1;
        var tempScore = this.highScore;

        while (tempScore > 0) {
            if (tempScore - (tempLevel * 10) >= 0) {
                tempScore -= tempLevel * 10;
                tempLevel++;
                this.points = tempScore;
            } else {
                tempScore = 0;
            }
        }

   
        this.playerLevel = tempLevel;
        this.playerLevelText.text = 'Lvl ' + this.playerLevel;
    },



    // Monster Shake Function //

    shake: function () {
        this.game.camera.shake(0.005, 50);
    
    },

    // Teleport Powerup // 
    teleportPowerup: function(player, powerup) {
        powerup.kill()
        player.alpha = 0;
        this.highScore += 20
        this.points += 20
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(powerup.x + 10, powerup.y + 10, '20', );
        this.game.add.tween(player).to( { alpha: 1 }, 2500, Phaser.Easing.Linear.None, true, 0, 0, false);
        player.x = this.game.rnd.integerInRange(100, this.game.width - 100);
        player.y = this.game.height - 75;
    },


    // MILK POWERUP //

    milkPowerup: function(player, powerup) {
        powerup.kill()
        player.targetSize = player.targetSize === 1 ? 2.4 : 3;
        this.highScore += 20
        this.points += 20
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(powerup.x + 10, powerup.y + 10, '20', );
        this.game.add.tween(player.scale).to( { x: player.targetSize, y: player.targetSize }, 2500, Phaser.Easing.Linear.None, true);

    },

    // Reindeer Powerup //
    reindeerTimer: function() {
        this.reindeer.body.velocity.y = -100;
    },

    walkAnimation: function() {
        this.player.animations.play('walk');
    },

    reindeerPowerup: function(player, powerup) {
        if (this.reindeerDidTeleport == false) {
        this.reindeer.x = this.game.rnd.integerInRange(100, this.game.width - 100);
        this.reindeer.y = this.game.height - 50;
        this.game.time.events.add(Phaser.Timer.SECOND * 1, this.reindeerTimer, this);
        this.highScore += 20
        this.points += 20
        this.highScoreText.text = 'High Score:' + ' ' + this.highScore
        this.pointsText.text = 'Points: ' + this.points
        this.createScoreAnimation(powerup.x + 10, powerup.y + 10, '20', );
        this.reindeer.animations.add('run',[0,1,2,3], 4, true);
        this.reindeer.animations.play('run');
        this.reindeerDidTeleport = true;
        this.reindeerIsstopped = false;
        }
    },


     // VIKING ENEMY //
     createVikingGroup: function(group, size) {
        for (var i = 0; i < size; i++) {//this.monsterCount; i++) {
            //add monsters here
            var x = this.game.rnd.integerInRange(75, this.game.width - 75);
            var y = this.game.rnd.integerInRange(50, this.game.height - 500);
            var randomXVelocity = this.game.rnd.integerInRange(-2, 2)/4;
            var randomStep = this.game.rnd.integerInRange(100, 300);
            var randomYVelocity = this.game.rnd.integerInRange(-4, 4)/24;
            var randomFrameRate = this.game.rnd.integerInRange(1, 3);
            var monster = group.create(x, y, 'viking');
            monster.animations.add('bounce',[0,1,2,3], randomFrameRate, true);
            monster.animations.play('bounce');
            monster.enableBody = true;
            monster.scale.setTo(2.5);
            monster.xVelocity = randomXVelocity;
            monster.yVelocity = randomYVelocity;
            monster.stepCap = randomStep;
            monster.currentStep = 0;
            monster.Level = 7;
            this.game.physics.arcade.enable(monster);
        }
    },

    // YETI ENEMY //
    createYetiGroup: function(group, size) {
        for (var i = 0; i < size; i++) {//this.monsterCount; i++) {
            //add monsters here
            var x = this.game.rnd.integerInRange(50, this.game.width - 50);
            var y = this.game.rnd.integerInRange(50, this.game.height - 700);
            var randomXVelocity = this.game.rnd.integerInRange(-3, 3)/8;
            var randomStep = this.game.rnd.integerInRange(100, 500);
            var randomYVelocity = this.game.rnd.integerInRange(-4, 4)/24;
            var randomFrameRate = this.game.rnd.integerInRange(2, 3);
            var monster = group.create(x, y, 'yeti');
            monster.enableBody = true;
            monster.animations.add('move',[0,1,2,3], randomFrameRate, true);
            monster.animations.play('move');
            monster.scale.setTo(2);
            monster.xVelocity = randomXVelocity;
            monster.yVelocity = randomYVelocity;
            monster.stepCap = randomStep;
            monster.currentStep = 0;
            monster.Level = 10;
            this.game.physics.arcade.enable(monster);
        }
    },
    
    // ANIMAL ENEMY //
    createAnimalGroup: function(group, size) {
        for (var i = 0; i < size; i++) {//this.monsterCount; i++) {
            //add monsters here
            var x = this.game.rnd.integerInRange(50, this.game.width - 50);
            var y = this.game.rnd.integerInRange(200, this.game.height - 300);
            var randomXVelocity = this.game.rnd.integerInRange(-1, 1)/2;
            var randomStep = this.game.rnd.integerInRange(50, 400);
            var randomYVelocity = this.game.rnd.integerInRange(-4, 4)/24;
            var randomFrameRate = this.game.rnd.integerInRange(2, 5);

            var monster = group.create(x, y, 'animal');
            monster.enableBody = true;
            monster.animations.add('bounce',[0,1,2,3], randomFrameRate, true);
            monster.animations.play('bounce');
            monster.scale.setTo(1.4);
            monster.xVelocity = randomXVelocity;
            monster.yVelocity = randomYVelocity;
            monster.stepCap = randomStep;
            monster.currentStep = 0;
            monster.Level = 4;
            this.game.physics.arcade.enable(monster);
        }
    },

    // GHOST ENEMY //
    createSlimeGroup: function(group, size) {
        for (var i = 0; i < size; i++) {//this.monsterCount; i++) {
            //add monsters here
            var x = this.game.rnd.integerInRange(75, this.game.width - 75);
            var y = this.game.rnd.integerInRange(250, this.game.height - 230);
            var randomXVelocity = this.game.rnd.integerInRange(-1, 1)/2;
            var randomStep = this.game.rnd.integerInRange(50, 400);
            var randomYVelocity = this.game.rnd.integerInRange(-0, 0);
            var randomFrameRate = this.game.rnd.integerInRange(3, 5);

            var monster = group.create(x, y, 'ghost');
            monster.enableBody = true;
            monster.animations.add('bag',[0,1,2,3,4], randomFrameRate, true);
            monster.animations.play('bag');
            monster.scale.setTo(1.7);
            monster.xVelocity = randomXVelocity;
            monster.yVelocity = randomYVelocity;
            monster.stepCap = randomStep;
            monster.currentStep = 0;
            monster.Level = 2;
            this.game.physics.arcade.enable(monster);
        }
    },

    // BOMB ENEMY //
    createMonsterGroup: function(group, size) {
        for (var i = 0; i < size; i++) {//this.monsterCount; i++) {
            //add monsters here
            var x = this.game.rnd.integerInRange(75, this.game.width - 75);
            var y = this.game.rnd.integerInRange(300, this.game.height - 150);
            var randomXVelocity = this.game.rnd.integerInRange(-1, 1);
            var randomStep = this.game.rnd.integerInRange(50, 100);
            var randomYVelocity = this.game.rnd.integerInRange(-0, 0);
            var randomFrameRate = this.game.rnd.integerInRange(3, 5);

            var monster = group.create(x, y, 'bomb');
            monster.animations.add('righthop',[0,1,2,3],randomFrameRate, true);
            monster.animations.add('lefthop',[4,5,6,7], randomFrameRate, true);
            monster.enableBody = true;
            monster.scale.setTo(1.2);
            monster.xVelocity = randomXVelocity;
            monster.yVelocity = randomYVelocity;
            monster.stepCap = randomStep;
            monster.currentStep = 0;
            monster.Level = 1;
            this.game.physics.arcade.enable(monster);
        }
    },

    
   
    createScoreAnimation: function(x, y, message, score){

        var me = this;

        var scoreFont = "20px Arial";

        //Create a new label for the score
        var scoreAnimation = me.game.add.text(x, y, message, {font: scoreFont, fill: "#ab263d", stroke: "#ffffff", strokeThickness: 15}); 
        scoreAnimation.anchor.setTo(0.5, 0);
        scoreAnimation.align = 'center';

        //Tween this score label to the total score label
        var scoreTween = me.game.add.tween(scoreAnimation).to({x:me.game.world.centerX + 50, y: 15}, 800, Phaser.Easing.Exponential.In, true);

        //When the animation finishes, destroy this score label, trigger the total score labels animation and add the score
        scoreTween.onComplete.add(function(){
            scoreAnimation.destroy();
        }, me);
    },

    
    startLeveltwo: function() {
        if (this.reindeerIsstopped == true && this.player.y <= 50) {
            this.monsterGroup.forEachAlive(function(m){m.kill();},this);
            this.slimeMonsters.forEachAlive(function(m){m.kill();},this);
            this.animalMonsters.forEachAlive(function(m){m.kill();},this);
            this.vikingMonsters.forEachAlive(function(m){m.kill();},this);
            this.yetiMonsters.forEachAlive(function(m){m.kill();},this);
            this.powerupGroup.forEachAlive(function(m){m.kill();},this);
            this.powerupGroup.forEachAlive(function(m){m.kill();},this);
            this.reindeer.kill();
            Gamedata.highscore = this.highScore;

            if(Gamedata.highscore > Gamedata.bestHighScore){
                Gamedata.bestHighScore = Gamedata.highscore;
            }

            game.state.start('leveltwo', true, false);
        }

    },
    
    
    gameRestartlose: function() {
        this.monsterGroup.forEachAlive(function(m){m.kill();},this);
        this.slimeMonsters.forEachAlive(function(m){m.kill();},this);
        this.animalMonsters.forEachAlive(function(m){m.kill();},this);
        this.vikingMonsters.forEachAlive(function(m){m.kill();},this);
        this.yetiMonsters.forEachAlive(function(m){m.kill();},this);
        this.powerupGroup.forEachAlive(function(m){m.kill();},this);
        this.powerupGroup.forEachAlive(function(m){m.kill();},this);
        this.reindeer.kill();
        game.state.start('title', false, false);
    },
};