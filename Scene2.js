class Scene2 extends Phaser.Scene
{
  //var text;
  constructor()
  {
    super("Scene2Games");
  }

  init(data)
  {
    this.difficultyNum=data.difficulty;
  }

  preload()
  {
    this.load.image('testingImage','assets/images/olive1.jpg');
  }

  create()
  {
    //var graphics = this.add.graphics();
    this.add.text(20,20,"Giaaa");


    //var test = this.add.image(300,300,"testingImage");

    let objImgs = [];
    let objRec = [];

    //var rt = this.add.renderTexture(0,0,50,50);
    var xMax=this.difficultyNum;
    var yMax=this.difficultyNum;
    var tmpRect =this.add.rectangle(this.cameras.main.centerX,this.cameras.main.centerY,640+20,640+20,0x902020);
    tmpRect.setFillStyle();
    tmpRect.setStrokeStyle(2, 0xFF0000);

    let bitTable=[];


    for(var j=0;j<xMax;j++)
    {//set possible combinations
      bitTable[j]=[];
      for(var k=0;k<yMax;k++)
      {
        //Table to set {0:0,1:1,2:2,3:3}
        bitTable[j][k]=[0,1,2,3];
        let tmpBitTable=[];
        //Removes values from table where not applicable
        if(j==0)
        {
          console.log("Testing perpose");
          var index = bitTable[j][k].indexOf(3);
          if(index>-1)
          {
            bitTable[j][k].splice(index,1);
          }
        }
        if(k==0)
        {
          var index = bitTable[j][k].indexOf(0);
          if(index>-1)
          {
            bitTable[j][k].splice(index,1);
          }
        }
        if(j==xMax)
        {
          var index = bitTable[j][k].indexOf(1);//The index becomes
          if(index>-1)
          {
            bitTable[j][k].splice(index,1);
          }
        }
        if(k==yMax)
        {
          var index = bitTable[j][k].indexOf(2);
          if(index>-1)
          {
            bitTable[j][k].splice(index,1);
          }
        }
        //set the max values a thing can have(a bit in this case)
      }
    }

    console.log(bitTable);
    for (var i = 0; i < xMax; i++)
    {
        objImgs[i]=[];
        objRec[i]=[];
        for (var y = 0; y < yMax; y++)
        {//does this for all pieces

          if(i==0 && y==0)
          {
            objImgs[i][y]= new Piece(this,{x:i,y:y,xMax:xMax,yMax:yMax});



            objRec[i][y] = new Phaser.Geom.Rectangle(i*(objImgs[i][y].width/xMax),y*(objImgs[i][y].height/yMax),objImgs[i][y].width/xMax-5,objImgs[i][y].height/yMax-5);
            var info={};
            info.xMax=xMax;
            info.yMax=yMax;
            info.location={};
            info.location.x=i;
            info.location.y=y;
            info.sides=[];

            info.sides[0]=0;
            info.peg=[];
            info.peg[0]="i";
            objImgs[i][y].setCrop();
            var testMask= new PieceBit(this,objImgs[i][y],info);
            testMask.InfoToPieceBit(info,objImgs[i][y]);
          }
          else
          {

            objImgs[i][y]= new Piece(this,{x:i,y:y,xMax:xMax,yMax:yMax});



            objRec[i][y] = new Phaser.Geom.Rectangle(i*(objImgs[i][y].width/xMax),y*(objImgs[i][y].height/yMax),objImgs[i][y].width/xMax-5,objImgs[i][y].height/yMax-5);
            //var testO = new PieceBit(this);


            this.input.on('dragstart',function(pointer,gameObject)
            {
            gameObject.setTint(0xff0000);
            });
          }

        }
    }



    this.input.on('drag',
    function(pointer,gameObject,dragX,dragY)
    {
      Piece.drag(pointer,gameObject,dragX,dragY,this,objImgs,{x:i,y:y,xMax:xMax,yMax:yMax});
      //PiceBit.drag(pointer,gameObject,dragX,dragY,this,objImgs,{x:i,y:y,xMax:xMax,yMax:yMax});
    },
    this
    );
    this.input.on('dragend',function(pointer,gameObject)
    {
      Piece.dragend(pointer,gameObject,this,objImgs,{x:i,y:y,xMax:xMax,yMax:yMax});
    },
    this
    );
    //this.setScale(0.5);
    console.log("hello");


    var pointer = this.input.activePointer;
    this.textT = this.add.text(0,0,this.input.mousePointer.x+" "+this.input.mousePointer.y);
    //this.textI = this.add.text(0,20,this.test2.x);
  }

  update()
  {
    this.textT.setText(this.input.mousePointer.x+" "+this.input.mousePointer.y);
    //this.textI.setText(this.test2.x+" "+this.test2.y);
  }
}
