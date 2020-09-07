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

    this.txt.one=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY,"Menu").setInteractive();
    this.txt.two=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY+80,"ΕΥΚΟΛΟ").setInteractive();
    this.txt.three=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY+120,"ΔΥΣΚΟΛΟ").setInteractive();


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
