export class Boombs
{



    constructor(scene)
    {
        this.relatedScene = scene;
    }

    preload()
    {
        this.relatedScene.load.image("bomb", "../assets/bomb.png");
    }

    create()
    {


        


		this.red = this.relatedScene.physics.add.group({
			key: 'bomb',
			repeat: 50,
			setXY: {
				x: Phaser.Math.Between(1000, 6000),
				y: Phaser.Math.Between(200, 250),
				stepX: 700
			}
		});


		this.green = this.relatedScene.physics.add.group({
			key: 'bomb',
			repeat: 50,
			setXY: {
				x: Phaser.Math.Between(1000, 6000),
				y: Phaser.Math.Between(200, 250),
				stepX: 700
			}
		});

		let bombVelocity = 1000;

		this.red.children.iterate(function (child) {
			child.setCollideWorldBounds(true);
			child.setVelocity(-5, bombVelocity);
			child.setBounce(0.8);
			child.setTint(0xff0000);
		});


		this.green.children.iterate(function (child) {
			child.setCollideWorldBounds(true);
			child.setVelocity(-5, bombVelocity);
			child.setBounce(0.8);
			child.setTint(0x43500);
		});

		this.relatedScene.physics.add.collider(this.red, this.green);




    }


}