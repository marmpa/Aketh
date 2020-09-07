class PieceBit extends Phaser.Display.Masks.GeometryMask
{
  constructor(scene,img,info)
  {

    super(scene,scene.make.graphics());
    console.log(this.geometryMask);




  }


  InfoToPieceBit(info,img)
  {//Creates info to bits'
    //if info {1,2},{i,e}\
    this.geometryMask.lineStyle(5,0xFF00FF,2.0);
    this.geometryMask.beginPath();//begins the path
    var tmpX=(img.x-(img.width/2))+(img.width/info.xMax)*info.location.x;
    var tmpY=(img.y-(img.height/2))+(img.width/info.xMax)*info.location.y;
    this.geometryMask.moveTo(tmpX,tmpY);
    //moves it to correct location
    console.log("hello bit");

    var xLength=(img.width/info.xMax);
    var yLength=(img.height/info.yMax);
    var bitLength=(img.width/info.xMax)/3;//The length of the small extra bit

    //this.geometryMask.lineTo(tmpX+xLength,tmpY);
    //tmpX=tmpX+xLength;
    //tmpY same
    //this.geometryMask.moveTo(tmpX,tmpY);
    if(0 in info.sides)
    {//checks which sides is interval
      console.log("inside");
      this.geometryMask.lineTo(tmpX+bitLength,tmpY);//Moves to part where it start to shape
      tmpX=tmpX+bitLength;
      tmpY=tmpY;

      var tmpSecondPointX=tmpX+(3*Math.cos(Math.PI/3));
      var tmpSecondPointY=tmpY+(3*Math.sin(Math.PI/3));
      console.log(info.peg[0]);
      if(info.peg[0].localeCompare("i")==0)
      {//intrude
        console.log("more inside");
        this.geometryMask.lineTo(tmpSecondPointX,tmpSecondPointY);
        this.geometryMask.moveTo(tmpSecondPointX,tmpSecondPointY);
        tmpSecondPointX=tmpSecondPointX+((2*bitLength)/3);
        //sets the line to
        this.geometryMask.lineTo(tmpSecondPointX,tmpSecondPointY);
        this.geometryMask.moveTo(tmpSecondPointX,tmpSecondPointY);

        tmpX=tmpX+bitLength;
        //tmpy stays the same
        this.geometryMask.lineTo(tmpX,tmpY);
        this.geometryMask.moveTo(tmpX,tmpY);

        tmpX=tmpX+bitLength;
        //tmpY stays the same
        this.geometryMask.lineTo(tmpX,tmpY);
        this.geometryMask.moveTo(tmpX,tmpY);


      }
      else if(info.peg[0].localeCompare("e"))
      {//extrude

      }
    }
    if(1 in info.sides)
    {//checks side 1

    }
    if(2 in info.sides)
    {

    }
    if(3 in info.sides)
    {

    }
    //tmpX stays the same
    tmpY=tmpY+yLength;
    this.geometryMask.lineTo(tmpX,tmpY);
    this.geometryMask.moveTo(tmpX,tmpY);

    tmpX=tmpX-xLength;
    //tmpY stays the same
    this.geometryMask.lineTo(tmpX,tmpY);
    this.geometryMask.lineTo(tmpX,tmpY-yLength);
    this.geometryMask.moveTo(tmpX,tmpY);

    //tmpX stays same
    tmpY=tmpY-yLength;
    this.geometryMask.lineTo(tmpX,tmpY);
    this.geometryMask.lineTo(tmpX+xLength,tmpY);
    this.geometryMask.moveTo(tmpX,tmpY);

    this.geometryMask.closePath();
    this.geometryMask.fillPath();//completes shape
    img.setMask(this);
  }



}