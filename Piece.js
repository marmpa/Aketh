class Piece extends Phaser.GameObjects.Image
{
  //coords={x,y}
  constructor(scene,cropInfo)
  {
    super(scene,320,320,"testingImage");
    this.setInteractive();
    scene.add.existing(this);
    console.log("test");

    //this=scene.add.image(320,320,"testingImage").setInteractive();

    this.setCrop(//sets the crop info
      cropInfo.x*(this.width/cropInfo.xMax),//The actuall x of the image
      cropInfo.y*(this.height/cropInfo.yMax),//the actual y of the image
      this.width/cropInfo.xMax,//width of piece
      this.height/cropInfo.yMax//height of piece
    );
    console.log(this._crop);

    this.setData({infoX:cropInfo.x,infoY:cropInfo.y});//this.
    this.setDepth(1);
    this.input.hitArea.setTo(//Change hit area so we can use the item
      cropInfo.x*(this.width/cropInfo.xMax),
      cropInfo.y*(this.height/cropInfo.yMax),
      this.width/cropInfo.xMax-5,
      this.height/cropInfo.yMax-5
    );

    //Some properties for it to work correctly
    //this.image



    this.x=(Math.random()*368)+320;
    this.y=(Math.random()*128)+320;
    //
    this.on('pointerover',
    function()
    {//changes the color
      this.setTint(0x00ff00);
    });

    //
    this.on('pointerout',
    function()
    {//clears color
      this.clearTint();
    });
    //
    scene.input.setDraggable(this);

    scene.input.on('dragstart',
      function(pointer,gameObject)
      {
        gameObject.setTint(0xff0000);
        console.log(gameObject.x,gameObject.y);
      }
    );


  }

  creatCorrectCrop()
  {

  }

  //the static way of moving the object
  static drag(pointer, gameObject, dragX, dragY,scene,objImgs,cropInfo)
  {
    //Finds position of objects

    if(gameObject.getData('infoX')!=null)
    {//checks if it exists
      var tempX=gameObject.x-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/2);
      tempX+=((objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax)*gameObject.getData('infoX'));
      var tempY=gameObject.y-((objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/2)+((objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax)*gameObject.getData('infoY')));
    }

    //After we calculate the position start the dragging.
    gameObject.x=dragX;
    gameObject.y=dragY;
  }

  static dragend(pointer,gameObject,scene,objImgs,cropInfo)
  {
    gameObject.clearTint();//clears the tint
    //console.log(gameObject.getData('infoW'));
    if(gameObject.getData('infoX')!=null)
    {
      //calculates cropped image x,y
      var tempX = scene.cameras.main.centerX-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/2);//finds center of picture
      tempX += (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax)*gameObject.getData('infoX')+(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax);
      tempX-= objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax/2;

      var tempY =scene.cameras.main.centerY-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/2);//finds center of picture
      tempY += (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax)*gameObject.getData('infoY')+(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax);
      tempY-= objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax/2;
      var offset=(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax)/2.5;

      //calculate actual object cropped position
      //first removes width so we get the the top left corner
      //after that we multiply each slice width with the current num of the slice
      //to find the actual center of the cropped piece
      var tempGameObject=[];
      tempGameObject.x=gameObject.x-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/2);
      tempGameObject.x+= gameObject.getData('infoX') * (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax);
      tempGameObject.x+= (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax)/2;

      tempGameObject.y=gameObject.y-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/2);
      tempGameObject.y+= gameObject.getData('infoY') * (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax);
      tempGameObject.y+= (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax)/2;

      


      console.log((tempX+offset)+"x+"+offset+" "+(tempY+offset)+"y+"+offset);
      console.log((tempX-offset)+"x-"+offset+" " +(tempY-offset)+"y-"+offset);
      console.log(tempGameObject.x+"goX , "+tempGameObject.y+"goY");


      if(tempGameObject.x>=tempX-offset&&tempGameObject.x<=tempX+offset&&tempGameObject.y>=tempY-offset&&tempGameObject.y<=tempY+offset)
      {
        //if its inside hitbox, snap to center
        //gameObject.x = (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/3) +  Phaser.Math.Snap.To((objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/xMax),20);
        //gameObject.y = (objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/3) + Phaser.Math.Snap.To((objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/yMax),20);

        gameObject.x=scene.cameras.main.centerX;
        gameObject.y=scene.cameras.main.centerY;

        gameObject.disableInteractive();
        //console.log(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax);
        //console.log(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax);
        objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].setDepth(0);
      }



    }
  }

  prototypeE()
  {

    //for x: i*(width/xMax)
    //  for top:0
    //  for left: width/xMax/2 - width/xMax/3
    //  for right: +-
    //for y: y*(height/yMax)
    //  for top: height/ymax/2 - height/ymax/3
    //  for left:0
    //
    //for width:
    //  for top:width/xMax/3
    //  for left:width/xMax/3
    //
    //for height:
    //  for top:height/yMax/3
    //  for left:width/yMax/3
    //
  }
  prototypeI()
  {
    //for x:
    //  for top: x-(width/xMax/3)
    //
    //for y:
    //
    //
    //for width:
    //
    //
    //for height:
  }

}
