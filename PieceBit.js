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
    var tmpX=(img.width/info.xMax)*info.location.x;
    var tmpY=(img.height/info.yMax)*info.location.y;

    //img.x+(info.location.x*)*(img.width/info.xMax)
    //

    var startLocationX=tmpX;
    var startLocationY=tmpY;




    tmpX=(img.x-(img.width/2))+startLocationX;
    tmpY=(img.y-(img.height/2))+startLocationY;// (info.location.x-(img.width/2))+ (info.location.y-(img.height/2))+
    this.geometryMask.moveTo(tmpX,tmpY);

    //tmpX=(img.x-(img.width/2))+(img.width/info.xMax)*info.location.x;
    //tmpY=(img.y-(img.height/2))+(img.width/info.xMax)*info.location.y;
    this.geometryMask.x=tmpX;
    this.geometryMask.y=tmpY;
    //moves it to correct location
    console.log(this);




    var xLength=(img.width/info.xMax);//Length and position
    var yLength=(img.height/info.yMax);
    var bitLength=(img.width/info.xMax)/3;//The length of the small extra bit


    //this.geometryMask.fillRect(0,0,50,50);
    //console.log(img.x+"imgx "+img.y+"imgy "+this.geometryMask.x+"goMX "+this.geometryMask.y+"geMY "+info.location.x*xLength+" " +info.location.y*yLength+" "+xLength+" "+yLength+" PETROOS");
    //this.geometryMask.lineTo(tmpX+xLength,tmpY);
    //tmpX=tmpX+xLength;
    //tmpY same
    //this.geometryMask.moveTo(tmpX,tmpY);
    //img.setCrop();
    //this.setInvertAlpha();


    console.log(this.geometryMask.x+"geoX "+this.geometryMask.y+"geoY ");
    if(info.peg==9)
    {
      this.geometryMask.fillRect(0,0,xLength,yLength);
      //this.geometryMask.fillRect(info.location.x*xLength,info.location.y*yLength,xLength,yLength);
      img.setCrop();
      //this.setInvertAlpha();
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
    this.geometryMask.fillCircle(xLength/2,0,xLength/8,yLength/8);
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

      this.geometryMask.fillCircle(xLength,yLength/2,xLength/8,yLength/8);

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

      this.geometryMask.fillCircle(xLength/2,yLength,xLength/8,yLength/8);

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

      this.geometryMask.fillCircle(0,yLength/2,xLength/8,yLength/8);

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

    if(info.peg==10)
    {
      this.setInvertAlpha();
    }

   //var maskI = this.geometryMask.createGeometryMask();

   img.setMask(this);
  }

  static drag(pointer,gameObject,dragX,dragY,scene,objPieceBit,objImgs,cropInfo)
  {

    if(gameObject.getData('infoX')!=null)
    {//checks if it exists
      var tmpX=(gameObject.x-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/2))+(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax)*gameObject.getData('infoX');
      var tmpY=(gameObject.y-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/2))+(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax)*gameObject.getData('infoY');
      //var tmpY=(img.y-(img.height/2))+(img.width/info.xMax)*info.location.y;

      objPieceBit[gameObject.getData('infoX')][gameObject.getData('infoY')].geometryMask.x=tmpX;
      objPieceBit[gameObject.getData('infoX')][gameObject.getData('infoY')].geometryMask.y=tmpY;
    }




  }

  static dragend(pointer,gameObject,scene,objPieceBit,objImgs,cropInfo)
  {
    if(gameObject.getData('infoX')!=null)
    {//checks if it exists
      var tmpX=(gameObject.x-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/2))+(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].width/cropInfo.xMax)*gameObject.getData('infoX');
      var tmpY=(gameObject.y-(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/2))+(objImgs[gameObject.getData('infoX')][gameObject.getData('infoY')].height/cropInfo.yMax)*gameObject.getData('infoY');
      //var tmpY=(img.y-(img.height/2))+(img.width/info.xMax)*info.location.y;

      objPieceBit[gameObject.getData('infoX')][gameObject.getData('infoY')].geometryMask.x=tmpX;
      objPieceBit[gameObject.getData('infoX')][gameObject.getData('infoY')].geometryMask.y=tmpY;
    }

  }



}
