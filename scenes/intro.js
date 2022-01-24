export class Intro extends Phaser.Scene
{

	constructor()
	{
		super({ key : "intro" });
	}

	preload()
	{
		this.load.image("intro", "assets/intro.png");
		this.load.image("btn", "assets/start.png");
	}

	create()
	{
		this.intro = this.add.image(0, 0, "intro").setOrigin(0, 0);
		this.btnStart = this.add.image(400, 420, "btn").setInteractive();

		this.count = 1;
		this.countStart = false;
	}


	update()
	{
		this.intro.setAlpha(this.count);
		this.btnStart.setAlpha(this.count);
		this.btnStart.on("pointerdown", ()=>{
			this.countStart = true;
		})

	if (this.countStart) {
		this.count -= 0.03;
	}

	if(this.count <= 0){
		this.scene.start("game");
	}



	}


}