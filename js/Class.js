
/*
˵������������࣬��ĳ�Ա���ݺͳ�Ա����(OK)
*/
/*
 �̵�
*/
function myStore(){
 this.items=[];
 this.equips=[];
}
/*
  �ֿ���
*/
function cangKu(){
    this.additems=[];//���ߵĲֿ�
	this.addpowers=[];//ŭ���Ĳֿ�
	this.addskills=[];//�ؼ��Ĳֿ�
	this.addequips=[];//װ���Ĳֿ�
	this.tempArr=[];//��ʱ���飬����ת�Ķ�����û��ʵ���ô�

}
/*
	������
*/
function box(mapX,mapY,sx, sy, swidth, sheight, stylestring) {
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx; //x������
    this.sy = sy; //y������
    this.swidth = swidth; //���
    this.sheight = sheight; //�߶�
    this.strokestyle = stylestring; //��ɫ
    this.draw = drawBox; //���Ʒ���,��Draw.js�ж���
}
/*
	������
*/
function rectangle(mapX,mapY,sx, sy, swidth, sheight, stylestring) {
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;
    this.sy = sy;
    this.swidth = swidth;
    this.sheight = sheight;
    this.fillstyle = stylestring;
    this.draw = drawRect;
}
/*
	Բ������
*/
function round(sx, sy, swidth, sheight, stylestring) {
    this.sx = sx;
    this.sy = sy;
    this.swidth = swidth;
    this.sheight = sheight;
    this.fillstyle = stylestring;
    this.draw = drawRound;
}
/*
	�ı���
*/
function text(name, mapX,mapY,sx, sy, stylestring, fontstring) {
    this.name = name;
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;
    this.sy = sy;
    this.fillstyle = stylestring;
    this.fonts = fontstring; //��������
    this.draw = drawText;
}
/*
	ͼƬ��
*/
function picture(mapX,mapY,sx, sy, swidth, sheight, imga) {
	this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;
    this.sy = sy;
    this.img = imga; //ͼƬԴ
    this.swidth = swidth;
    this.sheight = sheight;
    this.draw = drawAnImage;
}

function pic(mapX,mapY,sx, sy, sw, sh, dx, dy, dw, dh, img) {
    this.mapX=mapX;
	this.mapY=mapY;
    this.sx = sx;//ͼƬҪ���ƵĿ�ʼλ������
    this.sy = sy;//ͼƬҪ���ƵĿ�ʼλ������
    this.sw = sw;//ͼƬҪ���ƵĿ��
    this.sh = sh;//ͼƬҪ���Ƶĸ߶�
    this.dx = dx;//��ԭͼƬ�н�ȡ��x����
    this.dy = dy;//��ԭͼƬ�н�ȡ��y����
    this.dw = dw;//��ԭͼƬ�н�ȡ���
    this.dh = dh;//��ԭͼƬ�н�ȡ�߶�
    this.img = img;
    this.draw = drawPic;
}


/*
	��ɫ��
*/
function roleInfo(id, sx, sy, name, halfBody, img, HP, MP, pow, equipSkill, furySkill, SP, movement, speed, ATK, range, DEF, EXP, level, errorRate, doubleCRI, tripleCRI) {
    this.id = id;
    this.sx = sx;
    this.sy = sy;
	this.mapX;
	this.mapY;
    this.dx = 0; //��ȡͼƬ������x
    this.dy = 0; //��ȡͼƬ������y
    this.sw = rpx;
    this.sh = rpx;
    this.dw = 48; //��ȡͼƬ�Ŀ��
    this.dh = 48; //��ȡͼƬ�ĸ߶�
    this.draw = draw;
    this.name = name;
    this.halfBody = halfBody;
    this.img = img;
    this.HP = HP;
    this.fullHP;
    this.fullMP;
    this.fullSP;
    this.fullPow;
    this.MP = MP;
    this.pow = pow;
    //-------------------
    this.items=[];
    this.skills=[];
    this.powers=[]; 
	this.spirits=[];
	this.equips=[];
    //-------------------
    this.equipSkill = equipSkill;
    this.furySkill = furySkill;
    this.SP = SP;
    this.movement = movement;
    this.speed = speed;
    this.ATK = ATK;
    this.range = range;
    this.DEF = DEF;
    this.EXP = EXP;
    this.nextEXP;
    this.level = level;
    this.errorRate = errorRate;
    this.doubleCRI = doubleCRI;
    this.tripleCRI = tripleCRI;
	this.spiritJueSha=0;//��ɱ�Ŀ���
	this.spiritSheSha=0;//��ɱ�Ŀ���
	this.spiritShanBi=0;//���ܵĿ���
	this.spiritShenXing=0;//���еĿ���,1��ʾ���ˣ�0��ʾû�򿪣����������û���ÿ�has_used_ShenXing�������������״̬�������ʾ�ǿ����������
	this.not_sure_use_ShenXing=0;//��ȷ���Ƿ���������,0��ʾ���غϻ�ûʹ�����У�1��ʾ���غ��Ѿ�ʹ�ù����У�������ȡ���ƶ��Ŀ���
	this.has_use_ShenXing=0;//���غ�ȷʵʹ�������У�0��ʾû�У�1��ʾ��
	this.walk=0;//0��ʾ���غϻ�û�߹���1��ʾ�Ѿ��߹�
	this.has_walk=0;//��ʾ���غ�ȷʵ�߹��ˣ�0��ʾ���غ�ȷʵ��û�߹���1��ʾ���غ�ȷʵ�߹���
	this.has_use_Item = 0;//�жϽ�ɫ���غ��Ƿ��ù����ߣ�0��ʾ���غϻ�û���ù���1��ʾ���غ�ȷʵ�ù���
	this.addHP=[];
	this.addSP=[];
	this.addMP=[];
	this.addSpeed=[];
	this.addATK=[];
	this.addDEF=[];
	this.addMOV=[];
	
}
/*
	������
*/
function enemyInfo(id, sx, sy, name, halfBody, img, HP, MP, pow, equipSkill,level, furySkill, SP, movement, speed, ATK, range, DEF, EXP, money, errorRate, doubleCRI, tripleCRI,type) {
    this.id = id;
    this.sx = sx;
    this.sy = sy;
	this.mapX;
	this.mapY;
    this.dx = 0;
    this.dy = 0;
    this.sw = rpx;
    this.sh = rpx;
    this.dw = 48;
    this.dh = 48;
    this.draw = draw;
    this.name = name;
    this.halfBody = halfBody;
    this.img = img;
    this.HP = HP;
    this.fullHP;
    this.fullMP;
    this.fullSP;
    this.fullPow;
    this.MP = MP;
    this.pow = pow;
	this.level=level;
	this.skills=[];
    this.powers=[];
    this.equipSkill = equipSkill;
    this.furySkill = furySkill;
    this.SP = SP;
    this.movement = movement;
    this.speed = speed;
    this.ATK = ATK;
    this.range = range;
    this.DEF = DEF;
    this.EXP = EXP;
    this.money = money;
    this.errorRate = errorRate;
    this.doubleCRI = doubleCRI;
    this.tripleCRI = tripleCRI;
	this.type=type;//0��ʾС����1��ʾBOSS
}
function item(id, name, img, gold, discripe, func, itemVar, other, effect) {
    this.id = id;
    this.num;
    this.name = name;
    this.img = img;
    this.gold = gold;
    this.discripe = discripe;
    this.func = func;
    this.itemVar = itemVar;
    this.other = other;
    this.effect = effect;
}

function skill(id, name, img, mp, discripe, success, func, skillVar, other, effect) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.mp = mp;
    this.discripe = discripe;
    this.success = success;
    this.func = func;
    this.skillVar;
    this.other = other;
    this.effect = effect;
	this.num = 1;
}

function power(id, name, img, p, discripe, success, func, powerVar, other, effect) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.p = p;
    this.discripe = discripe;
    this.success = success;
    this.func = func;
    this.powerVar;
    this.other = other;
    this.effect = effect;
	this.num = 1;
}
function spirit(id, name, img, gold, discripe, func, spiritVar, other, effect) {
    this.id = id;//�������ı��
	this.num;//Ϊ��ÿ�غ�ֻ��ʹ��һ�ξ�ɱ����ɱ
    this.name = name;//������������
    this.img = img;//��������ͼƬ
    this.gold = gold;//��Ҫ���Ķ���SP
    this.discripe = discripe;//�þ�����������
    this.func = func;  //�����þ�������Ҫ�����������
    this.spiritVar = spiritVar;//��ɵĺ������������ָ�HP����
    this.other = other;
    this.effect = effect;//��Щ���������������Ч��
}
//װ����
function equipZB(id,name,img,gold,discripe,equipVar,func,type){
    this.id = id;//װ����id
	this.num;//װ��������
	this.name = name;//װ��������
	this.img=img;//װ����ͼƬ
	this.gold=gold;//��Ҫ������Ǯ
	this.discripe=discripe;//װ��������
	this.equipVar=equipVar;//��ɶ��ٵĺ��
	this.func=func;//�ڰ����װ�����뵽����ķ�װ���������е�ʱ�򴥷��������
    this.type=type;//װ�������ͣ�0��ʾ���ֳֵģ�1��ʾ����Ʒ��һ���˿���װ3��װ����2���ֳֵģ�1����Ʒ��
}