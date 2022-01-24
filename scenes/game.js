import { Player } from "../components/player.js";
import { Obs } from "../components/obs.js";
import { Boombs } from "../components/bomb.js";

export class Game extends Phaser.Scene {

	constructor() {
		super({ key: "game" });

		this.red = new Player(this, "red", "up");
		this.green = new Player(this, "green", "space");
		this.objects = new Obs(this);
		this.boombs = new Boombs(this);

	}


	preload() {
		this.load.image("star", "assets/ball-green.png");
		this.load.image("ball", "assets/ball-red.png");

		this.red.preload();
		this.green.preload();
		this.objects.preload();
		this.boombs.preload();

		this.load.image("platform", "assets/cube.png");
		this.load.image("limits", "assets/wall.png");
		this.load.image("sky", "assets/bg.png");
		this.load.image("bomb", "assets/bomb.png");
		this.load.image("final", "assets/goal.png");
		this.load.image("cover", "assets/cap.png");

	}


	create() {


		this.add.image(400, 250, "sky");
		this.physics.world.setBoundsCollision(false, false, true, true);

		this.red.create();
		this.green.create();


		this.objects.create();
		this.boombs.create();

		this.physics.add.collider(this.red.body, this.objects.bigCubes);
		this.physics.add.collider(this.red.body, this.objects.conjunct);

		
		this.physics.add.collider(this.green.body, this.objects.bigCubes);
		this.physics.add.collider(this.green.body, this.objects.conjunct);
		





/*

		this.star = this.physics.add.sprite(30, 200, "star");
		this.star.setCollideWorldBounds(true);
		this.ball = this.physics.add.sprite(30, 300, "ball");
		this.ball.setCollideWorldBounds(true);

*/
		this.physics.add.collider(this.red.body, this.green.body);




		this.physics.add.collider(this.red.body, this.boombs.red);
		this.physics.add.collider(this.green.body, this.boombs.green);

//////////////////////////////////////////////////////

		this.physics.add.collider(this.green.body, this.boombs.red, ()=>{
			this.scene.start("winnerRed");
		}, null, this);
		this.physics.add.collider(this.red.body, this.boombs.green, ()=>{
			this.scene.start("winnerGreen");
		}, null, this);




		this.counter = 20;



		/*this.physics.add.collider(this.objects.bigCubes, this.star, () => { this.starVelocityX = 20 }, null, this);
		this.physics.add.collider(this.objects.bigCubes, this.ball, () => { this.ballVelocityX = 20 }, null, this);*/
		this.physics.add.collider(this.boombs.red, this.objects.bigCubes);
		this.physics.add.collider(this.boombs.green, this.objects.bigCubes);
		this.physics.add.collider(this.boombs.red, this.objects.conjunct);
		this.physics.add.collider(this.boombs.green, this.objects.conjunct);

	





		this.final = this.physics.add.sprite(25000, 200, "final").setScale(2);
		this.final.setVelocityX(-100);


		this.physics.add.collider(this.red.body, this.final, () => {
			this.scene.start("winnerRed");
		}, null, this);


		this.physics.add.collider(this.green.body, this.final, () => {
			this.scene.start("winnerGreen");
		}, null, this);



		this.limitsUp = this.physics.add.sprite(0, -40, "limits").setImmovable().setScale(4.5);
		this.limitsDown = this.physics.add.sprite(0, 540, "limits").setImmovable().setScale(4.5);


		this.physics.add.collider(this.limitsDown, this.star, () => { this.starVelocityX = 10 }, null, this);
		this.physics.add.collider(this.limitsDown, this.ball, () => { this.ballVelocityX = 10 }, null, this);







		this.physics.add.collider(this.boombs.red, this.limitsUp);
		this.physics.add.collider(this.boombs.red, this.limitsDown);

		this.physics.add.collider(this.boombs.green, this.limitsUp);
		this.physics.add.collider(this.boombs.green, this.limitsDown);



		this.physics.add.collider(this.red.body, this.limitsDown, () => {
			this.red.velocityX = 10
		}, null, this);
		this.physics.add.collider(this.red.body, this.limitsUp, () => {
			this.red.velocityX = 10
		}, null, this);



		this.physics.add.collider(this.green.body, this.limitsDown, () => {
			this.green.velocityX = 10
		}, null, this);
		this.physics.add.collider(this.green.body, this.limitsUp, () => {
			this.green.velocityX = 10
		}, null, this);


/*

		this.manipulatedStar = 300;
		this.starVelocityX = 0;
		this.star.setVelocityY(200);
		this.touchingLeft = false;


		this.manipulatedBall = 300;
		this.ballVelocityX = 0;
		this.ball.setVelocityY(200);

*/
		this.cursors = this.input.keyboard.createCursorKeys();
		console.log(this.cursors);




		this.cover = this.add.image(0, 0, "cover").setOrigin(0, 0);
		this.count = 1;


		this.countVelocity = 0.05;

		


	}


	update() {

		this.count -= 0.05;
		this.cover.setAlpha(this.count);

		
		this.green.update();
		this.red.update();
		this.objects.update();

		/*this.star.setVelocityY(this.manipulatedStar);
		this.star.setVelocityX(this.starVelocityX);

		this.ball.setVelocityY(this.manipulatedBall);
		this.ball.setVelocityX(this.ballVelocityX);
*/
		this.final.setVelocityX(this.objects.velocityX);


		/*if (this.ball.x < 20){
			this.scene.pause();
			alert("THE STAR IS THE WINNER!!!");
			this.scene.start("game");
		}
		*/

/*

		if (this.cursors.space.isDown && this.star.body.touching.down) {
			this.manipulatedStar *= -1;
			this.star.setVelocityY(this.manipulatedStar);
			this.starVelocityX = 15;
			//this.star.setVelocityX(800);
		}


		else if (this.cursors.space.isDown && this.star.body.touching.up) {
			this.manipulatedStar *= -1;
			this.star.setVelocityY(this.manipulatedStar);
			this.starVelocityX = 15;
			//this.star.setVelocityX(800);
		}

		if (this.star.body.touching.right) {
			//this.starVelocityX = -100;
			this.touchingLeft = true;
		}

*/


/*

		if (this.cursors.up.isDown && this.ball.body.touching.down) {
			this.manipulatedBall *= -1;
			this.ball.setVelocityY(this.manipulatedBall);
			this.ballVelocityX = 15;
			//this.star.setVelocityX(800);
		}


		else if (this.cursors.up.isDown && this.ball.body.touching.up) {
			this.manipulatedBall *= -1;
			this.ball.setVelocityY(this.manipulatedBall);
			this.ballVelocityX = 15;
		}
*/



		if (this.red.body.x < 20) {
			if (this.green.body.x < 20) {
				this.scene.start("gameover");
			}else{	
				this.scene.start("winnerGreen");
			}
		}
		
		else if (this.green.body.x < 20) {
			this.scene.start("winnerRed");
		}





	}

}