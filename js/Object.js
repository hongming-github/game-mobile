/*
	˵��������Class,js�ж��壬Ȼ��������ʵ��������OK��
*/

//-------------------------------------------------------------------------------------

var rec;// = new box(0, 0, rpx, rpx, "rgb(0,255,0)"); //ʵ��������ƶ�ʱ����
var mrec;// = new box(0, 0, rpx * 4, rpx, "rgb(0,255,0)"); //ʵ�����˵���ѡ���
var menu;// = new picture(0, 4 * rpx, rpx * 4, rpx * 8, menuImage); //ʵ��������˵�
var menu2;// = new picture(0, 5 * rpx, rpx * 4, rpx * 4, menuImage); //ʵ�������˵�
//---------------��һ��ͼƬ---
var bgImage = new Image(); //��ͼ����ͼ��SRC��ReadXml.js���ж���
var dialogRoleImage = new Image(); //�Ի��¼����������
var loadPicArr=new Array();//��ͼƬ����
var loadPicArrSrc=new Array();//��ͼƬ��ַ
//-------------------------------------------------------------------------------------------------------------------

var lvlup=new Image();//������Ч��
lvlup.src="image/effect/10.png";
var getAlive=new Image();//�����Ч��
getAlive.src="image/effect/6.png";
var GuanKa = new Image();//�ؿ��Ķ���
GuanKa.src="image/effect/GK.png";
/*
var startImage = new Image();//����ͼƬ
startImage.src="image/background/StartShow.png";
var xdlc = new Image();//�µ��ó̰�ť
xdlc.src="image/button/Xdlc.png";
var jdhy = new Image();//�ɵĻ��䰴ť
jdhy.src= "image/button/Jdhy.png";
var tyjh = new Image();//����������ť
tyjh.src="image/button/Tyjh.png";


var bigMap = new Image();//���ͼͼƬ
bigMap.src = "image/map/bigmap.jpg";
var smallMap= new Image();//���ͼ�Ϲؿ���ͼƬ
smallMap.src = "image/map/smallmap.png";
var DJSD=new Image();//�����̵�ı���
DJSD.src="image/background/DJSD.png";
var DYBJ=new Image();//������Ϣ�ı���
DYBJ.src="image/background/DYBJ.png";
var SuoMing=new Image();//˵��ͼƬ�İ�ť
SuoMing.src="image/background/SuoMing.png";
var ZBZL=new Image();//װ������ť
ZBZL.src="image/background/ZBZL.png";
var MJZL=new Image();//�ܼ�����ť
MJZL.src="image/background/MJZL.png";
var NJZL=new Image();//ŭ������ť
NJZL.src="image/background/NJZL.png";
var DJZL=new Image();//��������ť
DJZL.src="image/background/DJZL.png";
var UI_butto=new Image();//���ͼ�Ĺ��ܰ�ť
UI_butto.src="image/button/UI_butto.png";

var game_over=new Image();//��Ϸ������ͼƬ
game_over.src="image/background/gameover.jpg"; 
var jiazai=new Image();//���ذ�ť��ͼƬ
jiazai.src="image/button/jia_zai.jpg"; 
var fanHui=new Image();//���ذ�ť��ͼƬ
fanHui.src="image/button/fan_hui.jpg"; 

var levelBG=new Image();//�����ı���
levelBG.src = "image/background/levelBG.jpg";
var lvtitleBG=new Image();//�����ķ�����������ͼƬ
lvtitleBG.src = "image/background/LVtitle.png";

var loadpic= new Image();//���ص�ͼƬ
loadpic.src = "image/background/loadpic.png";
var loadline= new Image();//���ص���
loadline.src = "image/background/loadline.png";
var statusShowBg = new Image();//������Ϣ�ı�����ʾ
statusShowBg.src = "image/background/Rwzt.png";
var spirit_Bg=new Image();//��������ͼƬ
spirit_Bg.src="image/background/spirit_bg.png"; 
var image1 = new Image(); //ʤ��������
image1.src = "image/background/Kk.png";
var menuImage = new Image(); //����˵�
menuImage.src = "image/background/Menu.png"; 
var dialogBoxImage = new Image(); //�Ի��¼�����ͼƬ
dialogBoxImage.src = "image/background/Dialog.png";
var infoShowBg = new Image(); //����״̬����ͼƬ
infoShowBg.src = "image/background/Info.png"; 
var renWuBeiJing=new Image();//���ﱳ����ͼƬ
renWuBeiJing.src = "image/background/RWBJ.png";

var Dz=  new Image();//����ͼƬ
Dz.src = "image/halfbody/Dz.png";
var Lqs=  new Image();//����ͼƬ
Lqs.src = "image/halfbody/Lqs.png";
var Lj=  new Image();//����ͼƬ
Lj.src = "image/halfbody/Lj.png";
var Kj=  new Image();//�콣ͼƬ
Kj.src = "image/halfbody/Kj.png";

var Dxc=  new Image();//��Ч��ͼƬ
Dxc.src = "image/item/Dxc.png";
var Dbw=  new Image();//����ͼƬ
Dbw.src = "image/item/Dbw.png";
var Fhc=  new Image();//�����ͼƬ
Fhc.src = "image/item/Fhc.png";

var Chdf = new Image();//�л��ͼƬ
Chdf.src = "image/skill/Chdf.jpg";
var Lhfs = new Image();//�һ����ͼƬ
Lhfs.src = "image/skill/Lhfs.jpg";

var Cstd = new Image();//��ʳ���ͼƬ
Cstd.src = "image/skill/Cstd.jpg";
var Lhz = new Image();//�һ���ͼƬ
Lhz.src = "image/skill/Lhz.jpg";

var Huichun = new Image();//�ش�ͼƬ
Huichun.src = "image/spirit/Huichun.jpg";
var Juesha  = new Image();//��ɱͼƬ
Juesha.src = "image/spirit/Juesha.jpg";
var Shanbi  = new Image();//����ͼƬ
Shanbi.src = "image/spirit/Shanbi.jpg";
var Shesha  = new Image();//��ɱͼƬ
Shesha.src = "image/spirit/Shesha.jpg";
var Shexing = new Image();//����ͼƬ
Shexing.src = "image/spirit/Shexing.jpg";

var confirm=new Image();//ȷ�ϰ�ť
confirm.src="image/background/Confirm.png";
var close = new Image(); //���Ͻǹص��İ�ť
close.src = "image/button/Close.png"; 
var zjt = new Image();//���ͷ��ťͼƬ
zjt.src = "image/button/Jt1.png"; 
var yjt = new Image();//�Ҽ�ͷ��ťͼƬ
yjt.src = "image/button/Jt2.png";
var mj1 = new Image();//�ؼ���ťͼƬ
mj1.src = "image/button/Mj1.png"; 
var mj2 = new Image();//�ؼ���ťͼƬ
mj2.src = "image/button/Mj2.png";
var nj1 = new Image();//ŭ����ťͼƬ
nj1.src = "image/button/Nj1.png"; 
var nj2 = new Image();//ŭ����ťͼƬ
nj2.src = "image/button/Nj2.png"; 
var zb1 = new Image();//װ����ťͼƬ
zb1.src = "image/button/Zb1.png"; 
var zb2 = new Image();//װ����ťͼƬ
zb2.src = "image/button/Zb2.png";
var qd = new Image(); //ȷ����ť
qd.src = "image/button/Qd.png"; 
var qx = new Image(); //ȡ����ť
qx.src = "image/button/Qx.png"; 

var c2 = []; //�����հ״���û���������ϵģ������Ĳ˵����������˵�
for (var j = 0; j < 5; j++) {
    c2[j] = new Image();
}

var c1 = [];//����˵�����ѡ��ͼƬ���߽�ʱ�����Ĳ˵���c1����������˵��ĸ�������
for (var i = 0; i < 8; i++) {
		c1[i] = new Image();
}

var c3 = [];//ʵ��������ƶ���ϵͳ���Ƶ������Ĳ˵�
for (var i = 0; i < 3; i++) {
		c3[i] = new Image();
}
c1[0].src = "image/menu/C11.png";
c1[1].src = "image/menu/C12.png";
c1[2].src = "image/menu/C13.png";
c1[3].src = "image/menu/C14.png";
c1[4].src = "image/menu/C15.png";
c1[5].src = "image/menu/C16.png";
c1[6].src = "image/menu/C17.png";
c1[7].src = "image/menu/C18.png";
c2[0].src = "image/menu/C21.png";
c2[1].src = "image/menu/C22.png";	
c2[2].src = "image/menu/C23.png";
c2[3].src = "image/menu/C24.png";
c2[4].src = "image/menu/C25.png";
c3[0].src = "image/menu/C26.png";
c3[1].src = "image/menu/C27.png";
c3[2].src = "image/menu/C28.png";
*/	

var menu3C=[];//����Ƶ�ϵͳ��������������ͼƬ
var menu2C = [];//�ŵ���հ׵�ʱ�����������˵�
var menuC = [];//�������߽���ʱ������������˵�


//--------------music----------------------
var begin =new Audio();//��ʼ������
	begin.src ='music/begin.mp3';
var gamebgShow =new Audio();//��Ϸ�������ܵı�������
    gamebgShow.src ='music/gamebgShow.mp3';
var recoverHP=new Audio();//��Ѫ����Ч
    recoverHP.src ='music/HealTarget.mp3';
var putongattack=new Audio();//��������Ч
    putongattack.src ='music/putongattack.mp3';	
var enemyTurn=new Audio();//�з��ж�
    enemyTurn.src='music/enemy.mp3';	
var ourTurn=new Audio();//�ҷ��ж�
    ourTurn.src='music/our_turn.mp3';
var bigMapAudio=new Audio();//���ͼ����Ч
    bigMapAudio.src='music/bigmap.mp3';

//--------------------------------------------
function picOnload(){
/*
 ��ҳ��ͼƬ
*/
	startImage = new Image();//����ͼƬ
	startImage.src="image/background/StartShow.png";
	xdlc = new Image();//�µ��ó̰�ť
	xdlc.src="image/button/Xdlc.png";
	jdhy = new Image();//�ɵĻ��䰴ť
	jdhy.src= "image/button/Jdhy.png";
	tyjh = new Image();//����������ť
	tyjh.src="image/button/Tyjh.png";
/*
 ���ͼ��ͼƬ
*/
	bigMap = new Image();//���ͼͼƬ
	bigMap.src = "image/map/bigmap.jpg";
	smallMap= new Image();//���ͼ�Ϲؿ���ͼƬ
	smallMap.src = "image/map/smallmap.png";
	DJSD=new Image();//�����̵�ı���
	DJSD.src="image/background/DJSD.png";
	WQSD=new Image();//�����̵�ı���
    WQSD.src="image/background/WQSD.png";
	DYBJ=new Image();//������Ϣ�ı���
	DYBJ.src="image/background/DYBJ.png";
	SuoMing=new Image();//˵��ͼƬ�İ�ť
	SuoMing.src="image/background/SuoMing.png";
	ZBZL=new Image();//װ������ť
	ZBZL.src="image/background/ZBZL.png";
	MJZL=new Image();//�ܼ�����ť
	MJZL.src="image/background/MJZL.png";
	NJZL=new Image();//ŭ������ť
	NJZL.src="image/background/NJZL.png";
	DJZL=new Image();//��������ť
	DJZL.src="image/background/DJZL.png";
	UI_butto=new Image();//���ͼ�Ĺ��ܰ�ť
	UI_butto.src="image/button/UI_butto.png";
	CKZL=new Image();//�ֿ������ͼƬ
	CKZL.src="image/background/CKZL.png";
	titleOfCK=new Image();//�ֿ��ϰ�ť��ͼ��
	titleOfCK.src="image/background/titleOfCangKu.png";
	CKSelect=new Image();//�ֿ��ϰ�ť��ͼ��
	CKSelect.src="image/background/cangKuSelect.png";
	
/*
 �����Ļ���
*/
	game_over=new Image();//��Ϸ������ͼƬ
	game_over.src="image/background/gameover.jpg";
	jiazai=new Image();//���ذ�ť��ͼƬ
	jiazai.src="image/button/jia_zai.jpg"; 
	fanHui=new Image();//���ذ�ť��ͼƬ
	fanHui.src="image/button/fan_hui.jpg";
/*
 ����
*/
	levelBG=new Image();//�����ı���
	levelBG.src = "image/background/levelBG.jpg";
    lvtitleBG=new Image();//�����ķ�����������ͼƬ
	lvtitleBG.src = "image/background/LVtitle.png";
	levelUpShuoMing=new Image();//˵���ı���
	levelUpShuoMing.src = "image/background/LVSM.png";
/*
 ���������ı���
*/
	loadpic= new Image();//���ص�ͼƬ
	loadpic.src = "image/background/loadpic.png";
	loadline= new Image();//���ص���
	loadline.src = "image/background/loadline.png";
	statusShowBg = new Image();//������Ϣ�ı�����ʾ
	statusShowBg.src = "image/background/Rwzt.png";
	spirit_Bg=new Image();//��������ͼƬ
	spirit_Bg.src="image/background/spirit_bg.png"; 
	image1 = new Image(); //ʤ��������
	image1.src = "image/background/Kk.png";
	menuImage = new Image(); //����˵�
	menuImage.src = "image/background/Menu.png"; 
	dialogBoxImage = new Image(); //�Ի��¼�����ͼƬ
	dialogBoxImage.src = "image/background/Dialog.png";
	infoShowBg = new Image(); //����״̬����ͼƬ
	infoShowBg.src = "image/background/Info.png"; 
	renWuBeiJing=new Image();//���ﱳ����ͼƬ
	renWuBeiJing.src = "image/background/RWBJ.png";
/*
 ������
*/
	Dz=  new Image();//����ͼƬ
	Dz.src = "image/halfbody/Dz.png";
	Lqs=  new Image();//����ͼƬ
	Lqs.src = "image/halfbody/Lqs.png";
	Xlh=new Image();//С�һ�ͼƬ
	Xlh.src="image/halfbody/Xlh.png";
	Lj=  new Image();//����ͼƬ
	Lj.src = "image/halfbody/Lj.png";
	Kj=  new Image();//�콣ͼƬ
	Kj.src = "image/halfbody/Kj.png";
	smallLqs=new Image();//����ˮ��Сͷ��
	smallLqs.src="image/halfbody/smallLqs.png";
/*
 ����
*/
	Dxc=  new Image();//��Ч��ͼƬ
	Dxc.src = "image/item/Dxc.png";
	Dbw=  new Image();//����ͼƬ
	Dbw.src = "image/item/Dbw.png";
	Fhc=  new Image();//�����ͼƬ
	Fhc.src = "image/item/Fhc.png";
/*
 װ��
*/
    Qszj= new Image();//��ʿ֮��ͼƬ
    Qszj.src = "image/equip/QSZJ.jpg";
/*
 ŭ����
*/
	Chdf = new Image();//�л��ͼƬ
	Chdf.src = "image/skill/Chdf.jpg";
	Lhfs = new Image();//�һ����ͼƬ
	Lhfs.src = "image/skill/Lhfs.jpg";
/*
 �ؼ�����
*/
	Cstd = new Image();//��ʳ���ͼƬ
	Cstd.src = "image/skill/Cstd.jpg";
	Lhz = new Image();//�һ���ͼƬ
	Lhz.src = "image/skill/Lhz.jpg";
/*
 ������
*/
	Huichun = new Image();//�ش�ͼƬ
	Huichun.src = "image/spirit/Huichun.jpg";
	Juesha  = new Image();//��ɱͼƬ
	Juesha.src = "image/spirit/Juesha.jpg";
	Shanbi  = new Image();//����ͼƬ
	Shanbi.src = "image/spirit/Shanbi.jpg";
	Shesha  = new Image();//��ɱͼƬ
	Shesha.src = "image/spirit/Shesha.jpg";
	Shexing = new Image();//����ͼƬ
	Shexing.src = "image/spirit/Shexing.jpg";
/*
 ���ְ�ť
*/
	confirm=new Image();//ȷ�ϰ�ť
	confirm.src="image/background/Confirm.png";
	close = new Image(); //���Ͻǹص��İ�ť
	close.src = "image/button/Close.png"; 
	zjt = new Image();//���ͷ��ťͼƬ
	zjt.src = "image/button/Jt1.png"; 
	yjt = new Image();//�Ҽ�ͷ��ťͼƬ
	yjt.src = "image/button/Jt2.png";
	mj1 = new Image();//�ؼ���ťͼƬ
	mj1.src = "image/button/Mj1.png"; 
	mj2 = new Image();//�ؼ���ťͼƬ
	mj2.src = "image/button/Mj2.png";
	nj1 = new Image();//ŭ����ťͼƬ
	nj1.src = "image/button/Nj1.png"; 
	nj2 = new Image();//ŭ����ťͼƬ
	nj2.src = "image/button/Nj2.png"; 
	zb1 = new Image();//װ����ťͼƬ
	zb1.src = "image/button/Zb1.png"; 
	zb2 = new Image();//װ����ťͼƬ
	zb2.src = "image/button/Zb2.png";
	qd = new Image(); //ȷ����ť
	qd.src = "image/button/Qd.png"; 
	qx = new Image(); //ȡ����ť
	qx.src = "image/button/Qx.png";
	minus=new Image();//���İ�ť
    minus.src="image/button/minus.png";
	add=new Image();//�ӵİ�ť
	add.src="image/button/add.png";
	imagehand=new Image();
	imagehand.src="image/button/hand.png";
/*
 �˵����İ�ť
*/
	c2 = []; //�����հ״���û���������ϵģ������Ĳ˵����������˵�
	c1 = [];//����˵�����ѡ��ͼƬ���߽�ʱ�����Ĳ˵���c1����������˵��ĸ�������
	c3 = [];//ʵ��������ƶ���ϵͳ���Ƶ������Ĳ˵�

 //��ҳ
  loadPicArr.push(startImage);
  loadPicArr.push(xdlc);
  loadPicArr.push(jdhy);
  loadPicArr.push(tyjh);
 //���ͼ
  loadPicArr.push(bigMap);
  loadPicArr.push(smallMap);
  loadPicArr.push(DJSD);
  loadPicArr.push(WQSD);
  loadPicArr.push(DYBJ);
  loadPicArr.push(SuoMing);
  loadPicArr.push(ZBZL);
  loadPicArr.push(MJZL);
  loadPicArr.push(NJZL);
  loadPicArr.push(DJZL);
  loadPicArr.push(UI_butto);
 //����
  loadPicArr.push(game_over);
  loadPicArr.push(jiazai);
  loadPicArr.push(fanHui);
 //����
  loadPicArr.push(levelBG);
  loadPicArr.push(lvtitleBG);
//�������ֱ���
  loadPicArr.push(loadpic);
  loadPicArr.push(loadline);
  loadPicArr.push(statusShowBg);
  loadPicArr.push(spirit_Bg);
  loadPicArr.push(image1);
  loadPicArr.push(menuImage);
  loadPicArr.push(dialogBoxImage);
  loadPicArr.push(infoShowBg);
  loadPicArr.push(renWuBeiJing);
//������
  loadPicArr.push(Dz);
  loadPicArr.push(Lqs);
  loadPicArr.push(Xlh);
  loadPicArr.push(Lj);
  loadPicArr.push(Kj);
  loadPicArr.push(smallLqs);
//����
  loadPicArr.push(Dxc);
  loadPicArr.push(Dbw);
  loadPicArr.push(Fhc);
//װ��
  loadPicArr.push(Qszj);
//ŭ��
  loadPicArr.push(Chdf);
  loadPicArr.push(Lhfs);
//�ؼ�
  loadPicArr.push(Cstd);
  loadPicArr.push(Lhz);
//������
  loadPicArr.push(Huichun);
  loadPicArr.push(Juesha);
  loadPicArr.push(Shanbi);
  loadPicArr.push(Shesha);
  loadPicArr.push(Shexing);
//���ְ�ť
  loadPicArr.push(confirm);
  loadPicArr.push(close);
  loadPicArr.push(zjt);
  loadPicArr.push(yjt);
  loadPicArr.push(mj1);
  loadPicArr.push(mj2);
  loadPicArr.push(nj1);
  loadPicArr.push(nj2);
  loadPicArr.push(zb1);
  loadPicArr.push(zb2);
  loadPicArr.push(qd);
  loadPicArr.push(qx);
  loadPicArr.push(minus);
  loadPicArr.push(add);
  loadPicArr.push(imagehand);
//�˵�����ť
	for (var i = 0; i < 8; i++) {
		c1[i] = new Image();
	    loadPicArr.push(c1[i]);
	}
    for (var j = 0; j < 5; j++) {
        c2[j] = new Image();
	    loadPicArr.push(c2[j]);
    }
	for (var i = 0; i < 3; i++) {
		c3[i] = new Image();
		loadPicArr.push(c3[i]);
    }
	c1[0].src = "image/menu/C11.png";
	c1[1].src = "image/menu/C12.png";
	c1[2].src = "image/menu/C13.png";
	c1[3].src = "image/menu/C14.png";
	c1[4].src = "image/menu/C15.png";
	c1[5].src = "image/menu/C16.png";
	c1[6].src = "image/menu/C17.png";
	c1[7].src = "image/menu/C18.png";
	c2[0].src = "image/menu/C21.png";
	c2[1].src = "image/menu/C22.png";	
	c2[2].src = "image/menu/C23.png";
	c2[3].src = "image/menu/C24.png";
	c2[4].src = "image/menu/C25.png";
	c3[0].src = "image/menu/C26.png";
	c3[1].src = "image/menu/C27.png";
	c3[2].src = "image/menu/C28.png";
//����һ��
	zhengLiButton=new pic(0,0,885,10,75,75,0,124,120,120,UI_butto);
	zhengLiButton1=new pic(0,0,885,10,70,70,124,124,120,120,UI_butto);
	daojuZLButton=new pic(0,0,810,6,75,75,0,0,120,120,UI_butto);
	zhuangbeiButton=new pic(0,0,735,6,75,75,0,372,120,120,UI_butto);
	nujiButton=new pic(0,0,585,6,75,75,0,1612,120,120,UI_butto);
	mijiButton=new pic(0,0,660,6,75,75,0,744,120,120,UI_butto);
	informaitionSow=new picture(0,0,685,76, 207,501, SuoMing);
	informaitionSow1=new picture(0,0,702,47, 207,501, SuoMing);
//����һ��
	duiWuButton=new pic(0,0,885,85,75,75,0,868,120,120,UI_butto);
	duiWuButton1=new pic(0,0,885,85,70,70,124,868,120,120,UI_butto);
	changkuButton=new pic(0,0,810,80,75,75,0,620,120,120,UI_butto);
	duiyuanButton=new pic(0,0,735,80,75,75,0,1240,120,120,UI_butto);
//�̵�һ��
	shangDianButton=new pic(0,0,885,160,75,75,0,1364,120,120,UI_butto);
	shangDianButton1=new pic(0,0,885,160,70,70,124,1364,120,120,UI_butto);
	daojuStore=new pic(0,0,810,160,75,75,0,1488,120,120,UI_butto);
	wuqiStore=new pic(0,0,735,160,75,75,0,1116,120,120,UI_butto);
//ϵͳһ��
	systemButton=new pic(0,0,885,235,75,75,0,1860,120,120,UI_butto);
	systemButton1=new pic(0,0,885,235,70,70,124,1860,120,120,UI_butto);
	CDButton=new pic(0,0,810,235,75,75,0,248,120,120,UI_butto);
	JZButton=new pic(0,0,735,235,75,75,0,496,120,120,UI_butto);
	TCButton=new pic(0,0,660,235,75,75,0,1736,120,120,UI_butto);
//���ͼ
	smallLQS=new picture(0,0,40,170,50,50,smallLqs);//40,170;140,205
	bigBg = new picture(0,0,0, 0, 960, 576, bigMap);
	level_1=new pic(0,0,0,144,100,100,0,0,100,100,smallMap);
	level_2=new pic(0,0,100,180,100,100,100,0,100,100,smallMap);
	level_3=new pic(0,0,144,104,100,100,200,0,100,100,smallMap);
	level_4=new pic(0,0,240,80,100,100,300,0,100,100,smallMap);
	level_5=new pic(0,0,310,30,100,100,400,0,100,100,smallMap);
	level_6=new pic(0,0,450,0,100,100,0,100,100,100,smallMap);
	level_7=new pic(0,0,430,96,100,100,100,100,100,100,smallMap);
	level_8=new pic(0,0,370,160,100,100,200,100,100,100,smallMap);
	level_9=new pic(0,0,520,140,100,100,300,100,100,100,smallMap);
	level_10=new pic(0,0,600,100,100,100,400,100,100,100,smallMap);

//����һ���ֿ�	
	storehouse=new cangKu();
	
	rec = new box(0,0,0, 0, rpx, rpx, "rgb(0,255,0)"); //ʵ��������ƶ�ʱ����
	mrec = new box(0,0,0, 0, rpx * 4, rpx, "rgb(0,255,0)"); //ʵ�����˵���ѡ���
	menu = new picture(0,2 * rpx,0, 2* rpx, rpx * 4, rpx * 8, menuImage); //ʵ��������˵�
	menu2 = new picture(0, 4 * rpx,0, 4 * rpx, rpx * 4, rpx * 5, menuImage); //ʵ�������˵�
	menu3= new picture(rpx * 4,8* rpx,rpx * 4, 8* rpx, rpx * 4, rpx * 3, menuImage); //ʵ�������˵�
	for (var k = 0; k < 8; k++) { //ʵ���������߽���ʱ������������˵�
	menuC[k] = new picture(0, menu.sy + k * rpx,0, menu.sy + k * rpx, menu.swidth, rpx, c1[k]);
	}
	for (var l = 0; l < 5; l++) { //ʵ��������հ׵�ʱ�����������˵�
	menu2C[l] = new picture(0,menu2.sy + l * rpx,0, menu2.sy + l * rpx, menu2.swidth, rpx, c2[l]);
	}
	for(var m=0;m<3;m++){         //ʵ��������ƶ���ϵͳ���Ƶ������Ĳ˵�
		menu3C[m] = new picture(menu3.sx+m*rpx,menu3.sy + m* rpx,menu3.sx+m*rpx, menu3.sy + m* rpx, menu3.swidth, rpx, c3[m]);
	}
	
}//�����������


//��ʼ����
var loadX=0;//380
var next=0;
var handle=0;
function progress(){
	picOnload();
	//��ʼ���ֵĲ���
	begin.play();
	//xml��������
	startRequest();
    //var dElem = document.getElementById("canvas");
    //var dCtx = dElem.getContext('2d');
    //dCtx.drawImage(loadpic,0,0,960,576);
    //�õ��Ǹ����صĵ�
    //dCtx.drawImage(loadline,410,15,40,30,loadX+265,380,40,30);
    //���صĽ�����
    //dCtx.drawImage(loadline,0,20,loadX,20,286,380,loadX,20);
	drawProgress();
}
/*
function upload()
	{ 
	
	  if (handle) 
	  {
      window.cancelAnimationFrame(handle);
      handle = null;
      } 
      else {
		  
    	  drawProgress();
      }
}
*/	
	/*var addTime=0;        
        for(var i=0; i<loadPicArr.length; i++){	
		loadPicArr[i].onload = function()
		{
							setTimeout(function(){drawProgress();},  addTime);
							//���ӵȴ�ʱ�䣬Ҳ����˵ÿ����һ�ž��õ�250ms
							addTime+=100;						
	    };
	    }	
}
*/
function drawProgress(){
	        next++;
			var dElem = document.getElementById("canvas");
            var dCtx = dElem.getContext('2d');
			loadX+=Math.floor(400/loadPicArr.length);
			 dCtx.drawImage(loadpic,0,0,960,576);
			//�õ��Ǹ����صĵ�
			dCtx.drawImage(loadline,410,15,40,30,loadX+266,380,40,30);
			//���صĽ�����
			dCtx.drawImage(loadline,0,20,loadX,20,286,385,loadX,20);
			
			if(next<loadPicArr.length)
			   handle = window.requestAnimationFrame(drawProgress);
			
			if(next==loadPicArr.length){
				next=0;
				loadX=0;
				     dCtx.clearRect(0, 0, canvasWidth, canvasHeight);
					  window.cancelAnimationFrame(handle);
			         console.log("ͼƬһ������"+next);
				  
				init();}
}

function nextProgress(){
	next++;
	var dElem = document.getElementById("canvas");
    var dCtx = dElem.getContext('2d');
    loadX+=Math.floor(400/loadPicArr.length);
    //�õ��Ǹ����صĵ�
	
	        
		    //�õ��Ǹ����صĵ�
		    //dCtx.clearRect(0, 0, canvasWidth, canvasHeight);
		    dCtx.drawImage(loadpic,0,0,960,576);
			dCtx.drawImage(loadline,410,15,40,30,loadX+260,380,40,30);
			//���صĽ�����
			dCtx.drawImage(loadline,0,20,loadX,20,286,385,loadX,20);
			if(next<loadPicArr.length)
			   handle = window.requestAnimationFrame(nextProgress);
			
			if(next==loadPicArr.length){
				next=0;
				loadX=0;
				     dCtx.clearRect(0, 0, canvasWidth, canvasHeight);
					  window.cancelAnimationFrame(handle);
					  bigMapoption=false;nextloading=false;openBigMap=false;
					  pass=mapObstancle[mapLevel-1];
			          showMapName();
					  
			}
				  
			//alert(openBigMap);
			/*var tt=setInterval(function()
			{if(loadX==390){
				clearInterval(tt);bigMapoption=false;nextloading=false;openBigMap=false;
				pass=mapObstancle[mapLevel-1];
				drawAll();
				showMapName();
			}
	},200);*/
	

}

