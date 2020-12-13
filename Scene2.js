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
    let objPieceBit = [];


    //var rt = this.add.renderTexture(0,0,50,50);
    var xMax=this.difficultyNum;
    var yMax=this.difficultyNum;
    var tmpRect =this.add.rectangle(this.cameras.main.centerX,this.cameras.main.centerY,640+20,640+20,0x902020);
    tmpRect.setFillStyle();
    tmpRect.setStrokeStyle(2, 0xFF0000);

    let bitTable=[];
    let pegTable=[];

    //Set all the puzzle piece values for extrution or intrution
    for(var j=0;j<xMax;j++)
    {//set possible combinations for what the puzzle piece looks like
      bitTable[j]=[];
      pegTable[j]=[];

      for(var k=0;k<yMax;k++)
      {
        //Table to set {0:0,1:1,2:2,3:3}
        bitTable[j][k]=[0,1,2,3];
        pegTable[j][k]=0;

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
        if(j==xMax-1)
        {
          var index = bitTable[j][k].indexOf(1);//The index becomes
          if(index>-1)
          {
            bitTable[j][k].splice(index,1);
          }
        }
        if(k==yMax-1)
        {
          var index = bitTable[j][k].indexOf(2);
          if(index>-1)
          {
            bitTable[j][k].splice(index,1);
          }
        }

        //set the max values a thing can have(a bit in this case)

        var reverseNum=[0,0,0,0,0,0,0,0,0,10,9];
        if(j==0 && k==0)
        {//checks if the first thing and if correct then assign 0
          pegTable[j][k]=9;
        }
        else if(j==0)
        {
          console.log("giatrios"+j);
          console.log(k-1);
          console.log(bitTable[j][k-1]);
          pegTable[j][k]=reverseNum[pegTable[j][k-1]];
        }
        else if(k==0)
        {
          console.log("papas"+(j-1));
          console.log(k);
          console.log(pegTable[j-1][(k)]);
          pegTable[j][k]=reverseNum[pegTable[j-1][k]];
        }
        else
        {
          console.log("dikigoros"+(j));
          console.log("dikigoros"+(k));
          console.log(pegTable[j-1][k]);
          pegTable[j][k]=reverseNum[pegTable[j][k-1]];
        }


        console.log(pegTable[j][k]+" la"+j+" "+k);

      }
    }
    console.log(bitTable+" marioooo");



    //.........................

    console.log(bitTable);
    for (var i = 0; i < xMax; i++)
    {
        objImgs[i]=[];
        objRec[i]=[];
        objPieceBit[i]=[];
        for (var y = 0; y < yMax; y++)
        {//does this for all pieces


            objImgs[i][y]= new Piece(this,{x:i,y:y,xMax:xMax,yMax:yMax});



            objRec[i][y] = new Phaser.Geom.Rectangle(i*(objImgs[i][y].width/xMax),y*(objImgs[i][y].height/yMax),objImgs[i][y].width/xMax-5,objImgs[i][y].height/yMax-5);
            var info={};
            info.xMax=xMax;
            info.yMax=yMax;
            info.location={};
            info.location.x=i;
            info.location.y=y;
            info.sides=[];

            info.sides=bitTable[i][y];
            console.log(info.sides+"BERBEBE");
            console.log(info.peg+"BKBKBKBKK");
            //info.peg=[];
            info.peg=pegTable[i][y];
            //objImgs[i][y].setCrop();
            objPieceBit[i][y]= new PieceBit(this,objImgs[i][y],info);
            objPieceBit[i][y].InfoToPieceBit(info,objImgs[i][y]);//creates the piece and adds it
            //objRec[i][y] = new Phaser.Geom.Rectangle(i*(objImgs[i][y].width/xMax),y*(objImgs[i][y].height/yMax),objImgs[i][y].width/xMax-5,objImgs[i][y].height/yMax-5);
          if(false)
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
      PieceBit.drag(pointer,gameObject,dragX,dragY,this,objPieceBit,objImgs,{x:i,y:y,xMax:xMax,yMax:yMax});
    },
    this
    );
    this.input.on('dragend',function(pointer,gameObject)
    {
      Piece.dragend(pointer,gameObject,this,objImgs,{x:i,y:y,xMax:xMax,yMax:yMax});
      PieceBit.dragend(pointer,gameObject,this,objPieceBit,objImgs,{x:i,y:y,xMax:xMax,yMax:yMax});
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
