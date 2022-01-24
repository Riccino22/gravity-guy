export class Obs 
{



    constructor(scene)
    {
        this.relateScene = scene;
    }





    preload()
    {
        this.relateScene.load.image("object", "assets/cube.png");
    }




    create()
    {
        
        this.velocityX = -100;

		this.conjunct = this.relateScene.physics.add.group({
			setScale: { x: 0.8, y: 0.8 },
			key: "object",
			frameQuantity: Phaser.Math.Between(200, 300),
			gridAlign: {
				width: Phaser.Math.Between(50, 100),
				height: Phaser.Math.Between(50, 100),
				cellWidth: Phaser.Math.Between(200, 250),
				cellHeight: Phaser.Math.Between(50, 100),
				/*x: Phaser.Math.Between(1000, 1500),
				y: Phaser.Math.Between(0, 300)*/
			}
		});

		this.conjunct.children.iterate(function (child) {
			child.setImmovable();
			child.y = Phaser.Math.Between(0, 500);
			child.x = Phaser.Math.Between(800, 30000);

			if(child.x < 0){
				child.x = 10000;
				child.y = Phaser.Math.Between(0, 500);
			}
        
        });
        
        
		this.bigCubes = this.relateScene.physics.add.group({
			setScale: { x: 1, y: 1 },
			key: "object",
			frameQuantity: Phaser.Math.Between(100, 250),
			gridAlign: {
				width: Phaser.Math.Between(200, 350),
				height: Phaser.Math.Between(50, 100),
				cellWidth: Phaser.Math.Between(100, 250),
				cellHeight: Phaser.Math.Between(70, 100),
				/*x: Phaser.Math.Between(1500, 2500),
				y: Phaser.Math.Between(0, 300)*/
			}
		});


		this.bigCubes.children.iterate(function (child) {
			child.setImmovable();
			child.y = Phaser.Math.Between(0, 500);
			child.x = Phaser.Math.Between(800, 20000);

			if(child.x < 0){
				child.x = 10000;
				child.y = Phaser.Math.Between(0, 500);
			}
        
        });
        
    
    
        this.relateScene.physics.add.collider(this.bigCubes, this.conjunct, (platform, group) => {

			group.y = Phaser.Math.Between(200, 400);
			platform.y = Phaser.Math.Between(200, 400);

		}, null, this);



    
    
    
    }





    update()
    {

        this.velocityX -= 0.05;

        this.conjunct.setVelocityX(this.velocityX);
        this.bigCubes.setVelocityX(this.velocityX);
   
    }




}