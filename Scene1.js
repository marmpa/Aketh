class Scene1 extends Phaser.Scene
{
  constructor()
  {
    super("Scene1Games");
  }

  create()
  {
    //this.add.text(20,20,"Text Loading page");
    this.txt = [];

    //var txt = scene.add.text(x, y, 'hello', { fontFamily: 'Arial', fontSize: 64, color: '#00ff00' });


    this.txt.one=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY,"Menu",{ fontFamily: 'Arial'}).setInteractive();
    this.txt.two=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY+80,"ΕΥΚΟΛΟ",{ fontFamily: 'Arial'}).setInteractive();
    this.txt.three=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY+120,"ΔΥΣΚΟΛΟ",{ fontFamily: 'Arial'}).setInteractive();


    this.txt.two.on('pointerup',
    function(pointer)
    {//passes data
      this.scene.start("Scene2Games",{difficulty:3});
    },this);

    this.txt.three.on('pointerup',
    function(pointer)
    {//passes data
      this.scene.start("Scene2Games",{difficulty:4});
    },this);


    this.txt.one.setFontSize(80);
    this.txt.two.setFontSize(40);
    this.txt.three.setFontSize(40);
  }
}
