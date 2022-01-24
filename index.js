import { Intro } from './scenes/intro.js';
import { Game } from './scenes/game.js';
import { WinnerGreen } from './scenes/winnerGreen.js';
import { WinnerRed } from './scenes/winnerRed.js';
import { GameOver } from './scenes/gameover.js';

var e = document.querySelector("body");

e.height = "100%";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: [Intro, Game, WinnerGreen, WinnerRed, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      //gravity: { y: 100 },
      debug: false
    }
  }
}

var game = new Phaser.Game(config);