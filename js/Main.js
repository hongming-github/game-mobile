/*
	��ʼ��������ҳ�����ʱ����(OK)
˵������Index.html��onload����init()����Ҫ�����ǻ�û��������Ļ������󣬶Ի���canvas���������¼����������ƶ��¼���������
*/
function init() {  
    showStart = true;//body onload��ʱ���false��Ϊtrue
    ctx = document.getElementById('canvas').getContext('2d'); //��û��������Ļ�������
    var canvas = document.getElementById('canvas'); //��û�������
    canvas.addEventListener('click', cCheck, false); //���������������¼�
    canvas.addEventListener('mousemove', mMove, false); //�������������ƶ��¼�
	canvas.addEventListener('mousedown', mDown, false); //���������������¼�
	canvas.addEventListener('mouseup', mUp, false); //������������ſ��¼�
	canvas.addEventListener('touchstart', touchStart,false); //��������ӿ�ʼ�����¼� 
    canvas.addEventListener('touchmove', touchMove,false); //��������Ӵ����ƶ��¼�  
    canvas.addEventListener('touchend', touchEnd,false); //��������Ӵ��������¼� 
	Index_page();
}

//��ҳ�Ļ���
function Index_page(){
    var startBg = new picture(0,0,0, 0, 960, 576, startImage);
    startShow.push(startBg);
    startButton1 = new picture(startBg.sx + 450,startBg.sy + 180,startBg.sx + 450, startBg.sy + 180, 310, 70, xdlc);
    startShow.push(startButton1);
    startButton2 = new picture(startBg.sx + 450,startBg.sy + 250,startBg.sx + 450, startBg.sy + 250, 310, 70, jdhy);
    startShow.push(startButton2);
    startButton3 = new picture(startBg.sx + 450,startBg.sy + 320,startBg.sx + 450, startBg.sy + 320, 310, 70, tyjh);
    startShow.push(startButton3);
    drawArr(startShow);  
}
//��Ϸ��������
function game_over_page(){
  gameover=true;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  var endBg = new picture(0, 0, 0, 0, 960, 576, game_over);
  endShow.push(endBg);
  fanHuiButton = new picture(0,0,endBg.sx+320,endBg.sy+350, 130, 48, fanHui);
  endShow.push(fanHuiButton);
  jiaZaiButton = new picture(0,0,endBg.sx+508,endBg.sy+350, 130, 48, jiazai);
  endShow.push(jiaZaiButton);
  drawArr(endShow);  
}


function big_map(a){	

	var temp=a;
	//if(typeof bigMapLoop == 'undefined'){}
	//else{clearInterval(bigMapLoop);}
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	bigMapoption=true;
	IntoGuanKa=false;
	startShow.push(bigBg);
	if(temp==0){big_option=0;}//˵���Ǵ�С��ͼ������
    if(temp==1){startShow.push(zhengLiButton1);}
	else{startShow.push(zhengLiButton);}
	if(temp==2){startShow.push(duiWuButton1);}
	else{startShow.push(duiWuButton);}
	if(temp==3){startShow.push(shangDianButton1);}
	else{startShow.push(shangDianButton);}
	if(temp==4){startShow.push(systemButton1);}
	else{startShow.push(systemButton);}
   
	startShow.push(level_1);
	if(mapLevel==1){startShow.push(level_2);}
	else if(mapLevel==2){startShow.push(level_2);startShow.push(level_3);}
	else if(mapLevel==3){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);}
	else if(mapLevel==4){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);}
	else if(mapLevel==5){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);}
	else if(mapLevel==6){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);}
	else if(mapLevel==7){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);}
	else if(mapLevel==8){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);}
	else if(mapLevel==9){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);}
	else if(mapLevel==10){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);}//startShow.push(level_11);
//	else if(mapLevel==11){startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);startShow.push(level_11);startShow.push(level_12);}
	
//startShow.push(level_2);startShow.push(level_3);startShow.push(level_4);startShow.push(level_5);startShow.push(level_6);startShow.push(level_7);startShow.push(level_8);startShow.push(level_9);startShow.push(level_10);


	//startShow.push(level_9);
	//startShow.push(level_10);
	startShow.push(smallLQS);
	
	drawArr(startShow);
}
