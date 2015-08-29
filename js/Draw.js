/*
˵�����������draw��������Щdraw������Class.js�еĸ�����ĳ�Ա�����ľ���ʵ��(OK)
*/

/*
	�ڻ�������ʾ�ı�
*/
function drawText() {
    ctx.font = this.fonts;
    ctx.fillStyle = this.fillstyle;
    ctx.fillText(this.name, this.sx, this.sy);
}
/*
	�ڻ����ϻ�һ������
*/
function drawRect() {
    ctx.fillStyle = this.fillstyle;
    ctx.fillRect(this.sx, this.sy, this.swidth, this.sheight);
}
/*
	�ڻ����ϻ�һ������
*/
function drawBox() {
    ctx.strokeStyle = this.strokestyle;
    ctx.lineWidth = 4;
    ctx.strokeRect(this.sx, this.sy, this.swidth, this.sheight);
}
/*
	�ڻ����ϻ�Բ������
*/
function drawRound() {
    ctx.strokeStyle = this.fillstyle;
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineWidth = this.sheight;
    ctx.moveTo(this.sx, this.sy);
    ctx.lineTo(this.sx + this.swidth, this.sy);
    ctx.stroke();
}
/*
	�ڻ�������ʾһ��ͼƬ
*/
function drawAnImage() {
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight);
}
function drawPic() {
    ctx.drawImage(this.img, this.dx, this.dy, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh);
}
/*
	����������ã��ڻ����л�������
*/
function draw() {
    var image = new Image();
    image.src = this.img;
    ctx.drawImage(image, this.dx, this.dy, this.dw, this.dh, this.sx, this.sy, this.sw, this.sh);
}
/*
	�ڻ����ϻ������������еĶ���
*/
//�ؿ��Ķ���Ч��
var GK_I=0;
//var a=[0,148,296,444,592,740,909,1097,1267,1430,1595];
//var b=[0,3,4,2,6,2,5,14,4,-2,3];
var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,148,
296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,296,
444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,444,
592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,592,
740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,740,
909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,909,
1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,1097,
1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,1267,
1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,1430,
1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,1595,];
var b=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,
4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3];
var nihao=0;
var shumei=false;
function drawAll() {

	//��ջ���
     ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	 //������ͼƬ
     bg.draw();

	if(mapLevel==1){
		ctx.drawImage(GuanKa,a[GK_I],b[GK_I],142,142,bg.sx+1105,bg.sy+429,142,142);
  	}	
	if(mapLevel==1){ 
		if(GK_I==a.length){GK_I=0;}
		else{GK_I++;}
		ctx.drawImage(GuanKa,a[GK_I],b[GK_I],142,142,bg.sx+1105,bg.sy+429,142,142);
	}		
	
	
	if(mapRightMov){
//	   if(bg.sx==-288){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    if(bg.sx==-288){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    else{bg.sx-=2;mapMovX-=2;}//window.cancelAnimationFrame(mapDraw);mapDraw=null;
	}else
	if(mapLeftMov){
//	  if(bg.sx==0){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    if(bg.sx==0){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    else{ bg.sx+=2;mapMovX+=2;}
	}else
	if(mapUpMov){
//		if(bg.sy==0){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
		if(bg.sy==0){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
		else{ bg.sy+=2;mapMovY+=2;}
	}else
	if(mapDownMov){
//	   if(bg.sy==-192){clearInterval(mapDraw);mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
		if(bg.sy==-192){mapUpMov=false;mapDownMov=false;mapLeftMov=false;mapRightMov=false;}
	    else{bg.sy-=2;mapMovY-=2;}
	}

	if(isTouchMove){
       clearArray(everything3);//�������touchstart�����Ĳ˵���
       bg.sx += slideX;
       bg.sy += slideY;
       mapMovX += slideX;
       mapMovY += slideY;
       if(bg.sx <= -288){bg.sx = -288;mapMovX = -288;}
       if(bg.sx >= 0){bg.sx = 0;mapMovX = 0;}
       if(bg.sy <= -192){bg.sy = -192;mapMovY = -192;}
       if(bg.sy >= 0){bg.sy = 0;mapMovY = 0;}
}
	
    changeSxSy(rolesArray);//changeSxSy���ڸ�����������꣬rolesArray���ҷ���ɫ
    changeSxSy(enemysArray);//changeSxSy���ڸ�����������꣬rolesArray�ŵз���ɫ	
    changeSxSy(everything1);
	  drawArr(everything3);//drawArr�������ڻ���ЩUIλ�ò����ͼ�����仯��UI,�������canvas�ǹ̶������,everything3�ŵ��ǲ˵���������ϵͳ���ǲ˵�
    changeSxSy(rangeShow);
    drawArr(itemArray);
    drawArr(skillArray);
    drawArr(powerArray); 
	  drawArr(spiritArray);
    changeSxSy(everything2);
    drawArr(everything);
  	drawArr(shadowShow);
    changeSxSy(attackShow);
    changeSxSy(hpShow);
    drawArr(statusArray);
    drawArr(speArray);
	  drawArr(dialogArray);
	  drawArr(confirmArray);
	  drawArr(info);
  	drawArr(tishi);
    nihao=window.requestAnimationFrame(drawAll);	
    if(shumei){window.cancelAnimationFrame(nihao);}
}
/*
	�����������飬����ÿ�������draw����
*/
function drawArr(arr) {
    for (var i = 0; i < arr.length; i++) arr[i].draw();
}

/*
  ����sx,sy
*/
function changeSxSy(arr){
    for (var i = 0; i < arr.length; i++) {
		arr[i].sx=arr[i].mapX+bg.sx;
		arr[i].sy=arr[i].mapY+bg.sy;
        arr[i].draw();
	}
}
//���ͼ�Ļ�
function drawBigMap(){
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	drawArr(startShow);
	drawArr(shadowShow);
	drawArr(everything1);//ר�������Ŷ�ס��ɫ�Ŀ�
	drawArr(everything2);//�Ÿ�������ƶ�����ɫ�Ŀ�
	drawArr(confirmArray);//�ŵ������������ı������Լ���ť
	drawArr(tishi);
}
//������ذ�ť��ʱ�򷢶�
function clearAll(){
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    clearArray(enemysArray);
    clearArray(everything1);
    clearArray(rangeShow);
    clearArray(everything2);
    clearArray(info);
    clearArray(everything);
	clearArray(shadowShow);
    clearArray(attackShow);
    clearArray(hpShow);
    clearArray(dialogArray);
    clearArray(confirmArray);
    clearArray(statusArray);
}
