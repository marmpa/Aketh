var config = {
    type: Phaser.AUTO,
    width: 1026,
    height: 768,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    audio: {
        disableWebAudio: true
    },
    scene:[Scene1,Scene2]

};

var game = new Phaser.Game(config);


function preload ()
{
    //this.load.setBaseURL('http://labs.phaser.io');

  //  this.load.image('sky', 'assets/skies/space3.png');
  //  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  //  this.load.image('red', 'assets/particles/red.png');

    this.load.audio('background', 'assets/audio/c1.mp3');

}

function create ()
{
    //this.add.image(400, 300, 'sky');

    var particles = this.add.particles('blue');

    var emitter = particles.createEmitter({
        speed: 10,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    this.sound.play("background");

    emitter.startFollow(logo);
}

function render() {
    game.debug.soundInfo(music, 20, 32);
}
