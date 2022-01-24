export class GameOver extends Phaser.Scene
{

	constructor()
	{
		super({ key : "gameover" });
	}

	preload()
	{
		this.load.image("endRedImg", "../assets/gameover.png");
        this.load.image("btnRestart", "../assets/restart.png");
        this.load.image("coverEnd", "assets/cap.png");
        this.load.audio("gameoverSong", "assets/gameover.ogg");

	}

	create()
	{
        this.GameOverSong = this.sound.add("gameoverSong");
        this.GameOverSong.play();
		this.endImg = this.add.image(0, 0, "endRedImg").setOrigin(0, 0);
		this.btnRestart = this.add.image(400, 370, "btnRestart").setInteractive();


        this.cover = this.add.image(0, 0, "coverEnd").setOrigin(0, 0);
        this.count = 1;
        this.countRestart = 1;
		this.countStart = false;
	}


	update()
	{

        this.countRestart -= 0.05;
		this.cover.setAlpha(this.countRestart);

		this.endImg.setAlpha(this.count);
		this.btnRestart.setAlpha(this.count);
		this.btnRestart.on("pointerdown", ()=>{
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