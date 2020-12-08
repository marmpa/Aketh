class Scene1 extends Phaser.Scene
{
  //var text;
  constructor()
  {
    super("Scene1Games");
  }

  init(data)
  {

  }

  preload()
  {
    this.graphics = this.add.graphics();



  }

  create()
  {
    this.input.on('drag',
    function(pointer,dragX,dragY)
    {
      console.log("whatt");

      this.graphics.fillCircle(pointer.x,pointer.y,2);
    },
    this
    );

    this.pointer = this.input.activePointer;

    this.pointer.oldX=0;
    this.pointer.oldY=0;
  }


  update()
  {
    if(this.pointer.isDown && this.pointer.oldX!=this.pointer.x && this.pointer.oldY!=this.pointer.y)
    {
      console.log("yes");

      var touchX = this.pointer.x;
      var touchY = this.pointer.y;

      this.graphics.fillStyle(0x00FFFF, 1);
      this.graphics.fillCircle(touchX,touchY,2);

      this.pointer.oldX=touchX;
      this.pointer.oldY=touchY;
    }
  }
}
