class PieceBit extends Phaser.Display.Masks.GeometryMask
{
  constructor(scene,img,info)
  {

    super(scene,scene.make.graphics());
    console.log(this.geometryMask);
    //scene.add.existing(this);
  }


  InfoToPieceBit(info,img)
  {//Creates info to bits'
    //if info {1,2},{i,e}\
    this.geometryMask.lineStyle(5,0xFF00FF,2.0);
    this.geometryMask.beginPath();//begins the path
    var tmpX=(img.x-(img.width/2))+(img.width/info.xMax)*info.location.x;
    var tmpY=(img.y-(img.height/2))+(img.width/info.xMax)*info.location.y;
    this.geometryMask.moveTo(tmpX,tmpY);
    this.geometryMask.x=tmpX;
    this.geometryMask.y=tmpY;
    //moves it to correct location
    console.log(this);




    var xLength=(img.width/info.xMax);//Length and position
    var yLength=(img.height/info.yMax);
    var bitLength=(img.width/info.xMax)/3;//The length of the small extra bit


    //this.geometryMask.fillRect(0,0,50,50);
    console.log(info.location.x*xLength+" " +info.location.y*yLength+" "+xLength+" "+yLength+" PETROOS");
    //this.geometryMask.lineTo(tmpX+xLength,tmpY);
    //tmpX=tmpX+xLength;
    //tmpY same
    //this.geometryMask.moveTo(tmpX,tmpY);
    //img.setCrop();
    //this.setInvertAlpha();
    if(info.peg==9)
    {
      this.geometryMask.fillRect(info.location.x*xLength,info.location.y*yLength,xLength,yLength);
      img.setCrop();
      //this.setInvertAlpha();
    }
    else if(info.peg==10)
    {
      this.setInvertAlpha();
    }

    console.log(info.sides+" bgazeis story");

    if(info.sides.includes(0))
    {//checks which sides is interval



      if(info.peg==9)
      {//intrude
        //setInve


      }
      else if(info.peg==10)
      {//extrude
      //  this.geometryMask.fillCircle(xLength*info.x+(xLength)/2,yLength*info.y, xLength/6,yLength/6);

      }
    this.geometryMask.fillCircle(xLength*(info.location.x)+xLength/2,yLength*info.location.y,xLength/8,yLength/8);
  }
    if(info.sides.includes(1))
    {//checks side 1
      if(info.peg==9)
      {console.log("bro ma sister");

      }
      else if(info.peg==10)
      {console.log("bro ma brother");
        //this.geometryMask.fillCircle(xLength*(info.x+1),yLength*info.y+(yLength)/2,xLength/6,yLength/6);
      }

      this.geometryMask.fillCircle(xLength*(info.location.x+1),yLength*info.location.y+(yLength)/2,xLength/8,yLength/8);

    }
    if(info.sides.includes(2))
    {
      if(info.peg==9)
      {
      //  this.geometryMask.fillCircle(xLength*(info.x),yLength*(info.y+1)+(yLength)/2,xLength/6,yLength/6);
      }
      else if(info.peg==10)
      {
        //this.geometryMask.fillCircle(xLength*(info.x),yLength*(info.y+1)+(yLength)/2,xLength/6,yLength/6);
      }

      this.geometryMask.fillCircle(xLength*(info.location.x)+xLength/2,yLength*(info.location.y+1),xLength/8,yLength/8);

    }
    if(info.sides.includes(3))
    {
      if(info.peg==9)
      {
      //  this.geometryMask.fillCircle(xLength*(info.x),yLength*(info.y+1)+(yLength)/2,xLength/6,yLength/6);
      }
      else if(info.peg==10)
      {
        //this.geometryMask.fillCircle(xLength*(info.x),yLength*(info.y+1)+(yLength)/2,xLength/6,yLength/6);
      }

      this.geometryMask.fillCircle(xLength*(info.location.x)+(xLength)/2,yLength*info.location.y+(yLength)/2,xLength/8,yLength/8);

    }
    //tmpX stays the same
    //tmpY=tmpY+yLength;
    //this.geometryMask.lineTo(tmpX,tmpY);
    //this.geometryMask.moveTo(tmpX,tmpY);

    //tmpX=tmpX-xLength;
    ////tmpY stays the same
    //this.geometryMask.lineTo(tmpX,tmpY);
    //this.geometryMask.lineTo(tmpX,tmpY-yLength);
   // this.geometryMask.moveTo(tmpX,tmpY);

    //tmpX stays same
   // tmpY=tmpY-yLength;
   // this.geometryMask.lineTo(tmpX,tmpY);
   // this.geometryMask.lineTo(tmpX+xLength,tmpY);
   // this.geometryMask.moveTo(tmpX,tmpY);

   this.geometryMask.closePath();
    this.geometryMask.fillPath();//completes shape

   var maskI = this.geometryMask.createGeometryMask();

    img.setMask(this);
  }

  drag(pointer,gameObject,dragX,dragY,this,objImgs,{x:i,y:y,xMax:xMax,yMax:yMax})
  {

  }



}
