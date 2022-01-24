export class WinnerRed extends Phaser.Scene
{

	constructor()
	{
		super({ key : "winnerRed" });
	}

	preload()
	{
		this.load.image("winnerImg", "assets/WinnerRed.png");
        this.load.image("btnRestart", "assets/restart.png");
		this.load.image("coverWinner", "assets/cap.png");
		this.load.audio("winnerSong", "assets/winner.ogg");

	}

	create()
	{
		this.winnerSong = this.sound.add("winnerSong");
		this.winnerSong.play();
		this.winnerImg = this.add.image(0, 0, "winnerImg").setOrigin(0, 0);
		this.btnRestart = this.add.image(600, 350, "btnRestart").setInteractive();


        this.cover = this.add.image(0, 0, "coverWinner").setOrigin(0, 0);
        this.count = 1;
        this.countRestart = 1;
		this.countStart = false;
	}


	update()
	{

        this.countRestart -= 0.05;
		this.cover.setAlpha(this.countRestart);

		this.winnerImg.setAlpha(this.count);
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