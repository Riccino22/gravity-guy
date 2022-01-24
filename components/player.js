export class Player {

    constructor(scene, typePlayer, key) {
        this.relatedScene = scene;
        this.typePlayer = typePlayer;
        this.key = key;
    }

    preload() {
        this.relatedScene.load.image("red", "assets/ball-red.png");
        this.relatedScene.load.image("green", "assets/ball-green.png");
        this.relatedScene.load.audio("jump", "assets/jump.wav");
    }

    create() {
        this.body;
        this.velocityY;
        this.velocityX = 0;
        this.jumpSound = this.relatedScene.sound.add("jump");
        
        if (this.typePlayer == "red") {
            this.body = this.relatedScene.physics.add.sprite(50, 250, "red");
            this.velocityY = -300;
        }
        else if (this.typePlayer == "green") {
            this.body = this.relatedScene.physics.add.sprite(50, 250, "green");
            this.velocityY = 300;   
        }


        this.body.setCollideWorldBounds(true);
        this.cursors = this.relatedScene.input.keyboard.createCursorKeys();
    }

    update() {




        if (this.key == "up") {
            if (this.cursors.up.isDown && this.body.body.touching.down || this.cursors.up.isDown && this.body.body.touching.up) {
                this.velocityY *= -1;
                this.velocityX = 15;
                this.jumpSound.play();
            }
        }

        if (this.key == "space") {
            if (this.cursors.space.isDown && this.body.body.touching.down || this.cursors.space.isDown && this.body.body.touching.up) {
                this.velocityY *= -1;
                this.velocityX = 15;
                this.jumpSound.play();
            }
        }


        if(this.body.x > 650){
            this.velocityX = 0;
        }

        this.body.setVelocityY(this.velocityY);
        this.body.setVelocityX(this.velocityX);


    }

}