/*
����״̬��ʾ
*/
function infoShow(x, y) {
    //����ƶ������ǵ�ͼƬ�ϣ���ʾ������Ϣ
    if (MouseOnRoles(x, y)) {
        clearArray(info);
        for (var i = 0; i < rolesArray.length; i++) {
            if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {
                if (rolesArray[i].HP > 0) {
					clearArray(everything2);
					putRec(x,y);
                    roleInfoShow(rolesArray[i]); //������ʾrole����Ϣ����
			
                }
            }
        }
    } else
    //����ƶ������˵�ͼ���ϣ���ʾ���˵���Ϣ
    if (MouseOnEnemys(x, y)) { //judge.js
        clearArray(info);
        for (var i = 0; i < enemysArray.length; i++) {
            if (x >= enemysArray[i].sx && x <= enemysArray[i].sx + rpx && y >= enemysArray[i].sy && y <= enemysArray[i].sy + rpx) {
                if (enemysArray[i].HP > 0) {
					putRec(x,y);
                    enemyInfoShow(enemysArray[i]);
                }
            }
        }
    } else {
        clearArray(info);
		putRec(x,y);
    }
//	drawAll();
}
//��ɫ�ĸ��������һ���߶�
function putRec(x,y){
        clearArray(everything2);
		rec.mapX = (Math.floor((x-mapMovX) / rpx)) * rpx;
        rec.mapY = (Math.floor((y-mapMovY) / rpx)) * rpx;
		everything2.push(rec);
}
/*
����������
*/
function afterRecoverEvent(){
	afterRecoverShow=true;
   //����ͼƬ
   ItemBg = new picture(9 * rpx, 5 * rpx,9 * rpx, 5 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
   itemArray.push(ItemBg);
   //����
   var title="��ѡ�񸴻����";
   var addtitle = new text(title,ItemBg.sx + 96, ItemBg.sy +  2 / 3 *rpx, ItemBg.sx + 96, ItemBg.sy +  2 / 3 *rpx, "#0000C6", "bold 25px SimSun");
   itemArray.push(addtitle);
   //����ͷ�������
   for (var j = 0; j < deadArray.length; j++) {
       var deadrole=deadArray[j].name;
	   var addRoleName=new text(deadrole,ItemBg.sx + 96, ItemBg.sy + 2*rpx-10+j*48, ItemBg.sx + 96, ItemBg.sy + 2*rpx-10+j*48, "#FFFFFF", "bold 25px KaiTi");
	   var roleBg=new Image();
	   roleBg.src=deadArray[j].halfBody;
       var addRoleBg=new picture(ItemBg.sx , ItemBg.sy + rpx+j*48,ItemBg.sx , ItemBg.sy + rpx+j*48, 48,48,roleBg);
	   itemArray.push(addRoleName);
	   itemArray.push(addRoleBg);
	}
  // drawAll();
}
/*
	����غ���ʾ
*/
function clearShow() {
    end = false;
    for (var i = 0; i < rolesArray.length; i++) {
		if(rolesArray[i].sx!=2496)
        {rolesArray[i].dy = 0;}
    }
    for (var j = 0; j < enemysArray.length; j++) {
        enemysArray[j].dy = 0;
    }
    clearArray(everything);
    if(mapLevel==2&&count==1){setTimeout(function(){dialogShowFlag=true;dialogShow();},300);}
  //  drawAll();
   // saveData();
}
/*
	�غ���ʾ
*/
function roundShow() {
	
    end = true;
	enemyTurn.pause();
	ourTurn.currentTime=0;
	ourTurn.play();
    var roundString = "�� " + count + " �� ��";
    var roundRectangle = new rectangle(0, 4 * rpx,0, 4 * rpx, canvasWidth, 4 * rpx, "rgba(0,0,0,0.8)");
    var roundText = new text(roundString, (canvasWidth / 2) - 2 * rpx, 7* rpx - rpx / 2,(canvasWidth / 2) - 2 * rpx, 7* rpx - rpx / 2,"rgb(255,255,255)", "50px Ҷ����ë������");
    everything.push(roundRectangle);
    everything.push(roundText);
	//drawAll();
    setTimeout(clearShow, 2000);
}
function enemyRoundShow() {
	//drawAll();
	ourTurn.pause();
	enemyTurn.currentTime = 0;
	enemyTurn.play();
    var roundString = "�� �� �� ��";
    var roundRectangle = new rectangle(0, 4 * rpx,0, 4 * rpx, canvasWidth, 4 * rpx, "rgba(0,0,0,0.8)");
    var roundText = new text(roundString, (canvasWidth / 2) - 2 * rpx, 7* rpx - rpx / 2,(canvasWidth / 2) - 2 * rpx,7* rpx - rpx / 2, "rgb(255,255,255)", "50px Ҷ����ë������");
    everything.push(roundRectangle);
    everything.push(roundText);
    setTimeout(function() {
        clearArray(everything);
    },
    1000);
}
/*
	ʤ��������ʾ
*/
function victoryConditionShow() {
    end = true;
    var vText = new text("ʤ������:", 0,0,8*rpx,5*rpx+24,"rgb(128,0,128)", "20px FangSong");
    var lText = new text("ʧ������:", 0,0,8*rpx,6*rpx+24, "rgb(128,0,128)", "20px FangSong");
    var victoryConditionRectangle = new picture( 0,0,6*rpx,3*rpx, canvasWidth / 2, canvasHeight / 2, image1);
    var victoryConditionText = new text(victoryCondition,  0,0,10*rpx,5*rpx+24, "rgb(255,0,0)", "15px FangSong");
    var lostConditionText = new text(lostCondition, 0,0, 10*rpx,6*rpx+24, "rgb(255,0,0)", "15px FangSong");
    CloseImg = new picture( 0,0,victoryConditionRectangle.sx + victoryConditionRectangle.swidth - 64, victoryConditionRectangle.sy +64, 1 / 2 * rpx, 1 / 2 * rpx, close);

    everything.push(victoryConditionRectangle);
    everything.push(vText);
    everything.push(lText);
    everything.push(lostConditionText);
    everything.push(victoryConditionText);
    everything.push(CloseImg);
    //drawAll();
}
/*
	�Ի��¼�����ʾ
*/
function dialog() {
    var tf = false;
    var tt = dialogString[0][0] + ": " + dialogString[0][1];//����ˮ: �������ǡ�����
    for (var i = 0; i < rolesArray.length; i++) {
        if (rolesArray[i].name == dialogString[0][0]) {
            dialogRoleImage.src = rolesArray[i].halfBody;
            tf = true;
        }
    }
    for (var j = 0; j < enemysArray.length; j++) {
        if (enemysArray[j].name == dialogString[0][0]) {
            dialogRoleImage.src = enemysArray[j].halfBody;
            tf = true;
        }
    }
	
    var dialogBox = new picture(0,340,0, 340, 960, 250, dialogBoxImage);
    dialogRole = new picture(96,390,96, 390, 170, 170, dialogRoleImage);
    //drawAll();
    dialogText = new text(tt,270,470, 270,470, "rgb(0,0,0)", "20px FangSong");
    dialogArray.push(dialogBox);
    if (tf) {
        dialogArray.push(dialogRole);
    }
    dialogArray.push(dialogText);
    //drawAll();
}
/*
	�ж���û�д����Ի��¼�   
*/
function dialogShow() {
    if (!dialogShowFlag) {
        roundShow();
    }else{
      for (var i = 0; i < dialogRoundArray.length; i++) {
		if(IntoGuanKa){
		    dialogShowFlag = true;
			openBigMap=true;
            dialogContentId = dialogRoundArray[1][2];
            dialogFunction = dialogRoundArray[1][1];		
			
		}else
        if (count == dialogRoundArray[i][0]) {//�Ի��¼��ڵڼ��غϴ���
            dialogShowFlag = true;
            dialogContentId = dialogRoundArray[i][2];//1
            dialogFunction = dialogRoundArray[i][1];
        }
		    request1();
            var tt = setInterval(function() {
                if (finish) {
                    finish = false;
                    clearInterval(tt);
                    eval(dialogFunction + '()');
                }
            });
			break;
		}
   }
}
/*
	����״̬��ʾ
*/
function roleInfoShow(obj) {
    var x;
	var y;
    if (obj.sx < canvasWidth / 2) x = canvasWidth -12 * rpx;
    else x = 0;
	if (obj.sy < canvasHeight / 2) y = canvasHeight -4 * rpx;
	else y = 0;
    var img = new Image();
    img.src = obj.halfBody;
    var n = obj.HP / obj.fullHP;
    var m = obj.MP / obj.fullMP;
	var s = obj.SP / obj.fullSP;
   // console.log("���ǵ�fullSP"+obj.fullSP);
    var j = obj.pow / obj.fullPow;
    var row1 = new text(obj.name + "  LV " + obj.level + "   " + obj.EXP + "/" + obj.nextEXP,0,0, x + 240, y+35, "#FFFFFF", "bold 20px FangSong");
    var hp = new text("   HP    " + obj.HP + "/" + obj.fullHP,0,0, x + 142, y+80, "#FFFFFF", "bold 20px FangSong");
    var mp = new text("   MP    " + obj.MP + "/" + obj.fullMP,0,0, x + 142, y+105, "#FFFFFF", "bold 20px FangSong");
    var pow = new text("   POW   " + obj.pow + "/" + obj.fullPow, 0,0,x + 142, y+156, "#FFFFFF", "bold 20px FangSong");
	var sp = new text("   SP    " + obj.SP + "/" + obj.fullSP,0,0, x + 142, y+130, "#FFFFFF", "bold 20px FangSong");
	//---��ʾ������״̬----
    var juesha,shensha,shanbi,shengxing;
	var i=240;
	var jsl=false;
	if(obj.spiritJueSha==1){
    juesha = new text("[��]" , 0,0,x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	if(obj.spiritSheSha==1){
    shensha = new text("[��]" ,0,0, x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	if(obj.spiritShanBi==1){
    shanbi = new text("[��]" ,0,0, x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	if(obj.spiritShenXing==1){
    shengxing = new text("[��]" ,0,0, x + i, y+58, "#00FFFF", "bold 20px FangSong");
	i+=48;
	if(jsl==false){jsl=true;}
	}
	//---------------------------
    var hpRec = new round(hp.sx + 9 * rpx/2 + 30, hp.sy - 6, 3 * rpx * n, 5, "rgb(0,255,0)");
    var hpBg = new round(hpRec.sx - 1, hpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var hpBg2 = new round(hpRec.sx, hpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");

    var mpRec = new round(mp.sx + 9 * rpx/2 + 30, mp.sy - 6, 3 * rpx * m, 5, "rgb(0,0,255)");
    var mpBg = new round(mpRec.sx - 1, mpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var mpBg2 = new round(mpRec.sx, mpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");

    var powRec = new round(pow.sx + 9 * rpx/2 + 30, pow.sy - 6, 3 * rpx * j, 5, "rgb(255,0,0)");
    var powBg = new round(powRec.sx - 1, powRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var powBg2 = new round(powRec.sx, powRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
	
	var spRec = new round(sp.sx + 9 * rpx/2 + 30, sp.sy - 6, 3 * rpx * s, 5, "rgb(255,255,0)");//����ɫ
    var spBg = new round(spRec.sx - 1, spRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var spBg2 = new round(spRec.sx, spRec.sy, 3* rpx, 5, "rgb(128,128,128)");

    var infoBg = new picture(0,0,x, y, 12 * rpx, 10 * rpx / 2.5, renWuBeiJing);
    var infoRI = new picture(0,0,x+1*rpx/2, y+1*rpx/2, 140, 150, img);
    var row2 = new text("�ҷ���ɫ", 0,0,x + 135, y+37, "rgb(0,255,0)", "bold 23px KaiTi");
	var row3 = new text("������", 0,0,x + 135, y+58, "rgb(0,255,0)", "bold 23px KaiTi");
	
	
    info.push(infoBg);
    info.push(infoRI);
    info.push(row1);
    info.push(row2);
	if(jsl){info.push(row3);}
    info.push(hpBg);
    info.push(hpBg2);
    info.push(hp);
    info.push(mpBg);
    info.push(mpBg2);
    info.push(mp);
    info.push(powBg);
    info.push(powBg2);
    info.push(pow);
	info.push(spBg);
    info.push(spBg2);
    info.push(sp);
	
	if(obj.spiritJueSha==1){info.push(juesha);}
	if(obj.spiritSheSha==1){info.push(shensha);}
	if(obj.spiritShanBi==1){info.push(shanbi);}
	if(obj.spiritShenXing==1){info.push(shengxing);}
	info.push(spRec);
    info.push(hpRec);
    info.push(mpRec);
    info.push(powRec);
	
}
function enemyInfoShow(obj) {
    var x;
	var y;
    if (obj.sx < canvasWidth / 2) x = canvasWidth - 12 * rpx;
    else x = 0;
	if (obj.sy < canvasHeight / 2) y = canvasHeight -4 * rpx;
	else y = 0;
    var img = new Image();
    img.src = obj.halfBody;
    var n = obj.HP / obj.fullHP;
    var infoBg = new picture(0,0,x, y, 12 * rpx, 10 * rpx / 2.5, renWuBeiJing);
    info.push(infoBg);
    var infoRI = new picture(0,0,x+10+1*rpx/2, y+10+1*rpx/2, 140, 140, img);
    info.push(infoRI);
    var row2 = new text(obj.name,0,0, x + 175, y+35, "#FFFFFF", "bold 20px FangSong");
    info.push(row2);
    var hp = new text("   HP   " + obj.HP + "/" + obj.fullHP, 0,0,x + 150, y+80, "#FFFFFF", "bold 20px FangSong");
    info.push(hp);
    var hpRec = new round(hp.sx + 9 * rpx/2 + 20, hp.sy - 6, 3 * rpx * n, 5, "rgb(0,255,0)");
    var hpBg = new round(hpRec.sx - 1, hpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
    var hpBg2 = new round(hpRec.sx, hpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
    info.push(hpBg);
	info.push(hpBg2);
    info.push(hpRec);
	if(obj.type==1){//�����BOSS
		var mn = obj.pow / obj.fullPow;
		var pow = new text("   POW  " + obj.pow + "/" + obj.fullPow,0,0, x + 150, y+142, "#FFFFFF", "bold 20px FangSong");
        var powRec = new round(pow.sx + 9 * rpx/2 + 20, pow.sy - 6, 3 * rpx * mn, 5, "rgb(255,0,0)");
		var powBg = new round(powRec.sx - 1, powRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
		var powBg2 = new round(powRec.sx, powRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
		info.push(pow);
		info.push(powBg);
		info.push(powBg2);
		info.push(powRec);
        var m = obj.MP / obj.fullMP;
		var mp = new text("   MP   " + obj.MP + "/" + obj.fullMP,0,0, x + 150, y+112, "#FFFFFF", "bold 20px FangSong");
        var mpRec = new round(mp.sx + 9 * rpx/2 + 20, mp.sy - 6, 3 * rpx * m, 5, "rgb(0,0,255)");
		var mpBg = new round(mpRec.sx - 1, mpRec.sy, 3 * rpx + 2, 8, "rgb(255,255,0)");
		var mpBg2 = new round(mpRec.sx, mpRec.sy, 3 * rpx, 5, "rgb(128,128,128)");
		info.push(mp);
		info.push(mpBg);
		info.push(mpBg2);
		info.push(mpRec);
        var row1 = new text("�з�BOSS", 0,0,x + 280, y+36, "rgb(255,0,0)", "bold 23px KaiTi");
        info.push(row1);
    } else {
        var row1 = new text("�з���ɫ",0,0, x + 280, y+36, "rgb(255,0,0)", "bold 23px KaiTi");
        info.push(row1);
    }
}
/*
	����˵���ʾ
*/
function showMenu(obj) {
    var r = obj.range;
    var sx = obj.mapX;
    var sy = obj.mapY;

    if (sx > canvasWidth / 2) menu.sx = 0;
    else menu.sx = canvasWidth - menu.swidth;

    if (judgeEnemyOnRange(obj)) {
        var x = sx - r * rpx;
        for (var j = 0; j < 2 * r + 1; j++) {
            var y = sy - r * rpx;
            for (var k = 0; k < 2 * r + 1; k++) {
                var dis = Math.abs(x - sx) + Math.abs(y - sy);
                if (dis <= r * rpx && dis > 0)rangeShow.push(new rectangle(x,y,x, y, rpx - 1, rpx - 1, "rgba(255,0,0,0.3)"));
                y += rpx;
            }
            x += rpx;
        }
        menu.sy = menuC[0].sy;
        menu.sheight = 8 * rpx;
        everything3.push(menu);
        for (var m = 0; m < 3; m++) {
			menuC[m].sx=menu.sx;
            everything3.push(menuC[m]);
        }
    } else {
        menu.sy = menuC[3].sy;
        menu.sheight = 5 * rpx;
        everything3.push(menu);
    }
    for (var l = 0; l < 5; l++) {
        menuC[l + 3].sx = menu.sx;
        everything3.push(menuC[l + 3]);
    }
    menuShow = true;
}

/*
	��ʾ����
*/
function showItem(obj) {
    ItemBg = new picture(0,0,6 * rpx, 4 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
    itemArray.push(ItemBg);
    CloseImg = new picture(0,0,ItemBg.sx + ItemBg.swidth - 1 / 2 * rpx - 4, ItemBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
    itemArray.push(CloseImg);
    var t = 0;
    if (obj.items.length < 6) {
        for (var i = 0; i < obj.items.length; i++) {
            for (var j = 0; j < itemArrays.length; j++) {
                if (obj.items[i].id == itemArrays[j].id) {
                    if (obj.items[i].num > 0) {
                        var img = new Image();
                        img.src = itemArrays[j].img;
                        var itemImg = new picture(0,0,6* rpx, 4 * rpx + t * rpx, rpx, rpx, img);
                        var s = "X " + obj.items[i].num;
                        var num = new text(s, 0,0,itemImg.sx + rpx, itemImg.sy + 2 / 3 * rpx, "rgb(255,255,255)", "bold 20px FangSong");
                        var name = new text(itemArrays[j].name,0,0, itemImg.sx + 2 * rpx, itemImg.sy + 2 / 3 * rpx, "rgb(153,50,204)", "bold 20px KaiTi");
                        var disc = new text(itemArrays[j].discripe,0,0, itemImg.sx + 4 * rpx, itemImg.sy + 2 / 3 * rpx, "rgb(255,255,0)", "bold 20px cursive");
                        itemArray.push(itemImg);
                        itemArray.push(num);
                        itemArray.push(name);
                        itemArray.push(disc);
                        //drawAll();
                        t++;
                    }

                }
            }
        }
    } else {
        alert("ÿ�������Я�����ֵ���");
    }
}
/*
	��ʾ���ܹ���
*/
function showSkill(obj) {
    skillBg = new picture(0,0,5 * rpx, 3* rpx, 14 * rpx, 4 * rpx, infoShowBg);
    skillArray.push(skillBg);
    CloseImg = new picture(0,0,skillBg.sx + skillBg.swidth - 1 / 2 * rpx - 4, skillBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
    skillArray.push(CloseImg);
    if (obj.skills.length < 5) {
        for (var i = 0; i < obj.skills.length; i++) {
            for (var j = 0; j < skillArrays.length; j++) {
                if (obj.skills[i] == skillArrays[j].id) {
                    var img = new Image();
                    img.src = skillArrays[j].img;
                    var skillImg = new picture(0,0,skillBg.sx + 10, skillBg.sy + 6 + i * rpx, rpx - 10, rpx - 10, img);
                    var name = new text(skillArrays[j].name, 0,0,skillImg.sx + rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(255,215,0)", "bold 20px KaiTi");
                    var mp = new text("MP:" + skillArrays[j].mp,0,0, skillImg.sx + 3 * rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(0,0,255)", "bold 20px cursive");
                    var suc = new text("�ɹ���:" + skillArrays[j].success + "%",0,0, skillImg.sx + 9 / 2 * rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(255,0,0)", "bold 20px FangSong");
                    var dis = new text("˵��:" + skillArrays[j].discripe, 0,0,skillImg.sx + 7 * rpx, skillImg.sy + 2 / 3 * rpx - 6, "rgb(0,255,0)", "bold 20px FangSong");
                    skillArray.push(skillImg); //��������ӵ�ԭ����ĩβ������������ĳ��� 
                    skillArray.push(name);
                    skillArray.push(mp);
                    skillArray.push(suc);
                    skillArray.push(dis);
                    //drawAll();
                }
            }
        }
    } else {
        alert("ÿ���������4���ؼ�");
    }
}
/*
	��ʾŭ����
*/
function showPower(obj) {
    powerBg = new picture(0,0,5 * rpx, 4* rpx, 14 * rpx, 4 * rpx, infoShowBg);
    powerArray.push(powerBg);
    CloseImg = new picture(0,0,powerBg.sx + powerBg.swidth - 1 / 2 * rpx - 4, powerBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
    powerArray.push(CloseImg);
    if (obj.powers.length < 2) {
        for (var i = 0; i < obj.powers.length; i++) {
            for (var j = 0; j < powerArrays.length; j++) {
                if (obj.powers[i] == powerArrays[j].id) {
                    var img = new Image();
                    img.src = powerArrays[j].img;
                    var powerImg = new picture(0,0,powerBg.sx + 10, powerBg.sy + 6 + i * rpx, rpx - 10, rpx - 10, img);
                    var name = new text(powerArrays[j].name,0,0, powerImg.sx + rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(255,215,0)", "bold 20px KaiTi");
                    var p = new text("POW:" + powerArrays[j].p,0,0, powerImg.sx + 3 * rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(0,0,255)", "bold 20px cursive");
                    var suc = new text("�ɹ���:" + powerArrays[j].success + "%",0,0, powerImg.sx + 9 / 2 * rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(255,0,0)", "bold 20px FangSong");
                    var dis = new text("˵��:" + powerArrays[j].discripe, 0,0,powerImg.sx + 7 * rpx, powerImg.sy + 2 / 3 * rpx - 6, "rgb(0,255,0)", "bold 20px FangSong");
                    powerArray.push(powerImg);
                    powerArray.push(name);
                    powerArray.push(p);
                    powerArray.push(suc);
                    powerArray.push(dis);
                   // drawAll();
                }
            }
        }
    } else {
        alert("ÿ���������1��ŭ������");
    }
}

/*
	��ʾ������
*/
function showSpirit(obj){
      spiritBg = new picture(0,0,6 * rpx, 3* rpx, 12 * rpx+20, 5 * rpx+10, spirit_Bg);
	  spiritArray.push(spiritBg);
	  CloseImg = new picture(0,0,spiritBg.sx + spiritBg.swidth - 1 / 2 * rpx - 4, spiritBg.sy + 4, 1 / 2 * rpx, 1 / 2 * rpx, close);
	  spiritArray.push(CloseImg);
	  var t = 0;
      for (var i = 0; i < obj.spirits.length; i++) {
            for (var j = 0; j < spiritArrays.length; j++) {
                if (obj.spirits[i].id == spiritArrays[j].id) {  
                        var img = new Image();
                        img.src = spiritArrays[j].img;
                        var spiritImg = new picture(0,0,6 * rpx+5, 3 * rpx+5 + t * rpx, rpx, rpx, img);                   
                        var name = new text(spiritArrays[j].name, 0,0,spiritImg.sx +rpx, spiritImg.sy + 2 / 3 * rpx, "rgb(255,215,0)", "bold 20px KaiTi");
						var sp = new text("SP:" + spiritArrays[j].gold,0,0, spiritBg.sx + 2.5* rpx, spiritBg.sy +5+ t * rpx+2 / 3 * rpx , "#28FF28", "bold 20px cursive");
                        var disc = new text(spiritArrays[j].discripe, 0,0,spiritImg.sx + 4 * rpx, spiritImg.sy + 2 / 3 * rpx, "#FFFFFF", "bold 20px Microsoft Yahei");
                        spiritArray.push(spiritImg);            
                        spiritArray.push(name);
						spiritArray.push(sp);
                        spiritArray.push(disc);
                       // drawAll();
						t++;
						
                }
            }
        }
}

//---------ȷ��ʹ�����Ź�������-------------------------------------
function showSkillConfirm() {
	//console.log("hello");
    skillConfirmShow = true;
    var confirmBg = new picture(0,0,9 * rpx, 4 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg);
    var s = "ȷ��Ҫʹ�ü�����";
    var confirmText = new text(s,0,0, confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
    confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
}
//-----------------ȷ��ʹ��ŭ��������--------------------------
function showPowerConfirm() {
    powerConfirmShow = true;
     var confirmBg = new picture(0,0,9 * rpx, 4 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg);
    confirmArray.push(confirmBg); //push3����Ϊ�˸��ǵ�ԭ�����Ǹ��ܼ����б��еı���
    var s = "ȷ��Ҫʹ�ü�����";
    var confirmText = new text(s, 0,0,confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
    confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
	//drawAll();
}
//---------------------ȷ��ʹ�õ��ߺ���------------
function showItemConfirm() {
	clearArray(confirmArray);
    itemConfirmShow = true;
    var confirmBg = new picture(0,0,7* rpx, 5 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
    var s = "ȷ��Ҫʹ�õ�����";
    var confirmText = new text(s,0,0, confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
    confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
	//drawAll();
}
function showSpiritConfirm() {
    spiritConfirmShow = true;
    var confirmBg = new picture(0,0,10 * rpx, 4 * rpx, 6 * rpx, 3 * rpx, confirm);
    confirmArray.push(confirmBg);
   var s = "ȷ��Ҫʹ�øþ�������";
   var confirmText = new text(s, 0,0,confirmBg.sx + rpx, confirmBg.sy + rpx, "rgb(32,11,225)", "bold 20px FangSong");
   confirmArray.push(confirmText);
    ensure = new picture(0,0,confirmBg.sx + 1 / 2 * rpx, confirmBg.sy + 2 * rpx, 2 * rpx, 8 / 15 * rpx, qd);
    cancel = new picture(0,0,ensure.sx + 3 * rpx, ensure.sy, 2 * rpx, 8 / 15 * rpx, qx);
    confirmArray.push(ensure);
    confirmArray.push(cancel);
	//drawAll();
}
function mpAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="MP���㣡";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
   // drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500);
}

function powAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="POW���㣡";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
   // drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500);   
}
function spAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="SP���㣡";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
    //drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500);
}

function hasusedItemAlert(){
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="ÿλ����ÿ�غ�ֻ��ʹ��һ�ε��ߣ�";
	var r1 = new text(aa,5*rpx,4*rpx ,5*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
    setTimeout(function() {
        clearArray(tishi);
    },
    2500); 
}
function noDeadAlert() {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="����������";
	var r1 = new text(aa,9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
    //drawAll();
    setTimeout(function() {
        clearArray(tishi);
        //drawAll();
    },
    2500); 
}

function sellItemAlert(a) {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="�˵�������";
	var r1 = new text(aa+a+"��",9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
	drawBigMap();
    setTimeout(function() {
        clearArray(tishi);
		drawBigMap();
    },
    2500); 
}

function sellEquipAlert(a) {
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var aa="��װ������";
	var r1 = new text(aa+a+"��",9*rpx,4*rpx ,9*rpx ,4*rpx , "#F9F900", "bold 40px KaiTi");
    tishi.push(shadow);
    tishi.push(r1);
	drawBigMap();
    setTimeout(function() {
        clearArray(tishi);
		drawBigMap();
    },
    2500); 
}

function spiritAlert(a) {
    var s;
	if(a==1){s="����ҷ������ش���";}
	else if(a==2){s="�����ͨ������ɱ��";}
	else if(a==3){s="�����ͨ������ɱ��";}
	else if(a==4){s="���غ϶���´ι���";}
	else if(a==5){s="����ҷ��������а�";}
	var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	var nextGuanKaBG = new picture(0,0,6 * rpx, 4 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
    var confirmText = new text(s, 0,0, nextGuanKaBG.sx+48 ,nextGuanKaBG.sy+3*rpx,"#FAF4FF", "bold 30px FangSong");
	var title = new text("��ʾ", 0,0,nextGuanKaBG.sx +150, nextGuanKaBG.sy + 2 / 3 * rpx, "#000000", "bold 30px Microsoft Yahei");
	
	confirmArray.push(shadow);
	confirmArray.push(nextGuanKaBG);
	confirmArray.push(title);
    confirmArray.push(confirmText);
	
//    drawAll();
    setTimeout(function() {
        clearArray(confirmArray);
   //     drawAll();
    },
    1000);
}
function showRolesDetailStatus(obj,a,b) {
	clearArray(statusArray);
	var aa=a||5* rpx-24;
	var bb=b||24;
    statusBg = new picture(0,0,aa,bb , 700, 550, statusShowBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
	
    CloseImg = new picture(0,0,statusBg.sx + statusBg.swidth - rpx - 4, statusBg.sy, 2 / 3 * rpx, 2 / 3 * rpx, close);
    statusArray.push(CloseImg);
    leftArrow = new picture(0,0,statusBg.sx + 1 / 2 * rpx+2, statusBg.sy + 3 * rpx - 10, 44, 37, zjt);
    rightArrow = new picture(0,0,statusBg.sx + 11 / 2 * rpx + 22, statusBg.sy + 3 * rpx - 10, 44, 37, yjt);
    statusArray.push(leftArrow);
    statusArray.push(rightArrow);
    skill = new picture(0,0,statusBg.sx + 1 / 2 * rpx - 3, statusBg.sy + 8 * rpx + 9, 110, 30, mj2);
    power = new picture(0,0,skill.sx + skill.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, nj1);
    equip = new picture(0,0,power.sx + power.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, zb1);
    statusArray.push(skill);
    statusArray.push(power);
    statusArray.push(equip);
    var hf = new Image();
    hf.src = obj.halfBody;
    var halfBody = new picture(0,0,statusBg.sx + 5 / 4 * rpx+20, statusBg.sy + rpx, 200, 200, hf);
    statusArray.push(halfBody);
    //drawAll();
    var name = new text(obj.name, 0,0,statusBg.sx + 8 * rpx + 1 / 4 * rpx+4, statusBg.sy + 5 / 3 * rpx + 4, "rgb(255,255,255)", "bold 25px KaiTi");
    statusArray.push(name);
    var lv = new text("LV " + obj.level + "  " + obj.EXP + "/" + obj.nextEXP,0,0, statusBg.sx + 8 * rpx + 1 / 4 * rpx+4, statusBg.sy + 8 / 3 * rpx + 2, "rgb(255,255,255)", "bold 25px KaiTi");
    statusArray.push(lv);
    var hp = new text(obj.HP + "/" + obj.fullHP,0,0, statusBg.sx + 7 * rpx + 2 / 3 * rpx+15, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi");
	statusArray.push(hp);
    var mp = new text(obj.MP + "/" + obj.fullMP, 0,0,statusBg.sx + 11 * rpx+15, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi");
	statusArray.push(mp);
    var sp = new text(obj.SP + "/" + obj.fullSP,0,0, statusBg.sx + 7 * rpx + 2 / 3 * rpx+15, statusBg.sy + 14 / 3 * rpx - 4, "rgb(255,255,255)", "bold 20px KaiTi"); 
	statusArray.push(sp);
    var pow = new text(obj.pow + "/" + obj.fullPow,0,0, statusBg.sx + 11 * rpx+15, statusBg.sy + 14 / 3 * rpx - 4, "rgb(255,255,255)", "bold 20px KaiTi"); 
	statusArray.push(pow);
    var movement = new text(obj.movement, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(movement);
    var atk = new text(obj.ATK, 0,0,statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(atk);
    var speed = new text(obj.speed, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(speed);
    var range = new text(obj.range,0,0, statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(range);
    var def = new text(obj.DEF, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 8 * rpx - 10, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(def);
	
	
	var i=10;//����ʹ��˳����������
		
		if(obj.spiritJueSha==1)
		{
		  var SJueSha=new text("[��]",0,0, statusBg.sx + i* rpx+3 ,  statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SJueSha);
		  i++;
		}
		if(obj.spiritSheSha==1)
		{
		  var SSheSha=new text("[��]",0,0, statusBg.sx + i * rpx+3 , statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SSheSha);
		 i++;
		}
		if(obj.spiritShanBi==1)
		{
		  var SShanBi=new text("[��]",0,0, statusBg.sx + i * rpx+3 ,  statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SShanBi);
		  i++;
		}
		if(obj.spiritShenXing==1)
		{
		  var SShenXing=new text("[��]", 0,0,statusBg.sx + i * rpx+3,  statusBg.sy + 5 / 3 * rpx + 4, "#00FFFF", "bold 25px KaiTi"); 
		  statusArray.push(SShenXing);
		  i++;
		}
	skillStatus(rolesArray[tmpIndex]);//������ʾ����
 //   drawAll();
}
function showEnemysDetailStatus(obj,a,b) {
	console.log(obj.halfBody);
	clearArray(statusArray);
	var aa=a||5* rpx-24;
	var bb=b||24;
    statusBg = new picture(0,0,aa, bb, 670, 550, statusShowBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
    statusArray.push(statusBg);
    CloseImg = new picture(0,0,statusBg.sx + statusBg.swidth - rpx - 4, statusBg.sy, 2 / 3 * rpx, 2 / 3 * rpx, close);
    statusArray.push(CloseImg);
    leftArrow = new picture(0,0,statusBg.sx + 1 / 2 * rpx, statusBg.sy + 3 * rpx - 10, 44, 37, zjt);
    rightArrow = new picture(0,0,statusBg.sx + 11 / 2 * rpx + 10, statusBg.sy + 3 * rpx - 10, 44, 37, yjt);
    statusArray.push(leftArrow);
    statusArray.push(rightArrow);
    skill = new picture(0,0,statusBg.sx + 1 / 2 * rpx - 3, statusBg.sy + 8 * rpx + 9, 110, 30, mj2);
    power = new picture(0,0,skill.sx + skill.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, nj1);
    equip = new picture(0,0,power.sx + power.swidth - 2, statusBg.sy + 8 * rpx + 9, 110, 30, zb1);
    statusArray.push(skill);
    statusArray.push(power);
    statusArray.push(equip);
    var hf = new Image();
    hf.src = obj.halfBody;
    var halfBody = new picture(0,0,statusBg.sx + 5 / 4 * rpx, statusBg.sy + rpx, 200, 200, hf);
    statusArray.push(halfBody);
   // drawAll();
    var name = new text(obj.name + "   {" + (enemysIndex + 1) + "}",0,0, statusBg.sx + 8 * rpx + 1 / 4 * rpx, statusBg.sy + 5 / 3 * rpx + 4, "rgb(255,255,255)", "bold 25px KaiTi");
    statusArray.push(name);
    var hp = new text(obj.HP + "/" + obj.fullHP,0,0, statusBg.sx + 7 * rpx + 2 / 3 * rpx, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi"); 
	statusArray.push(hp);
    if (obj.MP != 0) {
        var mp = new text(obj.MP + "/" + obj.fullMP,0,0, statusBg.sx + 11 * rpx, statusBg.sy + 11 / 3 * rpx, "rgb(255,255,255)", "bold 20px KaiTi"); 
		statusArray.push(mp);
        var tp = new Image();
        tp.src = "image/button/BS.png";
        var bs = new picture(0,0,statusBg.sx + 4 * rpx, statusBg.sy + rpx, 72, 22, tp);
        statusArray.push(bs);
    }
    var movement = new text(obj.movement,0,0, statusBg.sx + 3 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(movement);
    var atk = new text(obj.ATK, 0,0,statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 6 * rpx, "rgb(255,255,255)", "bold 25px KaiTi");
	statusArray.push(atk);
    var speed = new text(obj.speed, 0,0,statusBg.sx + 3 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi");
	statusArray.push(speed);
    var range = new text(obj.range,0,0, statusBg.sx + 9 * rpx + 1 / 2 * rpx, statusBg.sy + 7 * rpx - 4, "rgb(255,255,255)", "bold 25px KaiTi");
	statusArray.push(range);
    var def = new text(obj.DEF,0,0, statusBg.sx + 3 * rpx, statusBg.sy + 8 * rpx - 10, "rgb(255,255,255)", "bold 25px KaiTi"); 
	statusArray.push(def);
	//if(obj.type==1){
	skillStatus(enemysArray[enemysIndex]);
	//	}
   // drawAll();
}
function skillStatus(obj) {
	clearArray(speArray);
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < skillArrays.length; j++) {
            if (obj.skills[i] == skillArrays[j].id) {
                var img = new Image();
                img.src = skillArrays[j].img;
                var skillImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(skillArrays[j].name,0,0, skillImg.sx + 2 / 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var mp = new text("MP:" + skillArrays[j].mp, 0,0,skillImg.sx + 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("�ɹ���:" + skillArrays[j].success + "%",0,0, skillImg.sx + 9 / 2 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("˵��:" + skillArrays[j].discripe, 0,0,skillImg.sx + 7 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                speArray.push(skillImg);
                speArray.push(name);
                speArray.push(mp);
                speArray.push(suc);
                speArray.push(dis);
                //drawAll();
            }
        }
    }
}
function powerStatus(obj) {
	console.log(obj.powers.length);
	if(obj.powers.length > 0){
    for (var i = 0; i < obj.powers.length; i++) {
        for (var j = 0; j < powerArrays.length; j++) {
            if (obj.powers[i] == powerArrays[j].id) {
                var img = new Image();
                img.src = powerArrays[j].img;
                var powerImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(powerArrays[j].name,0,0, powerImg.sx + 2 / 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var p = new text("POW:" + powerArrays[j].p,0,0, powerImg.sx + 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("�ɹ���:" + powerArrays[j].success + "%",0,0, powerImg.sx + 9 / 2 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("˵��:" + powerArrays[j].discripe,0,0, powerImg.sx + 7 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                speArray.push(powerImg);
                speArray.push(name);
                speArray.push(p);
                speArray.push(suc);
                speArray.push(dis);
                //drawAll();
            }
        }
    }
  }
	//drawAll();
}
function failAlert(a, obj) {
    var r1 = new text(a,obj.sx, obj.sy,  obj.sx, obj.sy, "rgb(255,0,0)", "bold 20px FangSong");
    confirmArray.push(r1);
    //drawAll();
    setTimeout(function() {
        clearArray(confirmArray);
        //drawAll();
    },
    1000);
}
function getSomething(a, obj) {
    var r1 = new text(a,obj.sx, obj.sy-10,  obj.sx, obj.sy-10, "rgb(0,0,255)", "bold 20px FangSong");
    confirmArray.push(r1);
	var at1 = setInterval(function() {
        r1.sy--;
        if (r1.sy == (obj.sy-60)) {
            clearInterval(at1);       
            clearArray(confirmArray);
        }
    },
    50);
}
function getSomething2(a, obj) {
    var r1 = new text(a,obj.sx, obj.sy-30,  obj.sx, obj.sy-30, "rgb(0,0,255)", "bold 20px FangSong");
    confirmArray.push(r1);
    var at1 = setInterval(function() {
        r1.sy--; 
        if (r1.sy == obj.sy-80) {
            clearInterval(at1);       
            clearArray(confirmArray);
            }
        },
    50);
}

//ѭ����������������ݵ�����
function getRoleUpData(arr){
   var temp=0;
   for(var i=0;i<arr.length;i++){
      temp+=arr[i];
   }
   clearArray(arr);
   return temp;
 
}
function aftLevelEvent(objAttack){	 
	 //�����ı���ͼƬ
	 var aftLBg =new picture(9 * rpx,5 * rpx,9 * rpx, 5 * rpx, 8* rpx, 4 * rpx, levelBG);
	 powerArray.push(aftLBg);
	 if(levelupinfo!='0'){
		 //��˵��������
		 var LUSM=new picture(9 * rpx,  9* rpx,9 * rpx,  9* rpx,  8*rpx,  rpx, levelUpShuoMing); 
		 powerArray.push(LUSM);
		  //˵��������
	      var LUSMinfo= new text(levelupinfo,LUSM.sx+50 , LUSM.sy+35 , LUSM.sx+50 , LUSM.sy+35 , "#FAF4FF", "bold 25px ����");
          powerArray.push(LUSMinfo);
	 }
	
	 //title����ͼƬ
	 var title=new picture(10* rpx-24, 3* rpx+24,10* rpx-24, 3* rpx+24, 7*rpx, 1*rpx, lvtitleBG);
	 powerArray.push(title);
	 //��������������
	 var sname=objAttack.name;
     var name = new text(sname,title.sx+50 , title.sy+35 , title.sx+50 , title.sy+35 , "F9F900", "bold 25px ����");
	 powerArray.push(name);
	 var jia="+";
	 //���ǵȼ�
	 var s3="LV";
	 var slv=objAttack.level;
     var lv=new text(s3,title.sx+4*rpx , title.sy+37 , title.sx+4*rpx , title.sy+37 , "#F9F900", "bold 30px FangSong");
	 var lvnum=new text(slv,title.sx+6*rpx-30 , title.sy+37 , title.sx+6*rpx-30 , title.sy+37 , "#00DB00", "bold 25px ����");
	 powerArray.push(lv);
	 powerArray.push(lvnum);
	 //Ѫ��
	 var s1="HP";
	 var roleHp=objAttack.fullHP;
	 var addHp=getRoleUpData(objAttack.addHP);
	 var hp1 = new text(s1, aftLBg.sx+16 , aftLBg.sy+ 38 ,aftLBg.sx+16 , aftLBg.sy+ 38 , "#F9F900", "bold 20px FangSong");
	 var hp2 = new text(roleHp,aftLBg.sx+70 , aftLBg.sy+ 38 , aftLBg.sx+70 , aftLBg.sy+ 38 , "#00FFFF", "bold 20px FangSong");
	 if(addHp!=0){
	   var hp3 = new text(jia, aftLBg.sx+120 , aftLBg.sy+ 38 ,aftLBg.sx+120 , aftLBg.sy+ 38 , "#F9F900", "bold 20px FangSong");
	   var hp = new text(addHp, aftLBg.sx+140 , aftLBg.sy+ 38 , aftLBg.sx+140 , aftLBg.sy+ 38 , "#00DB00", "bold 20px FangSong");
	   powerArray.push( hp3);
	   powerArray.push( hp); 
	 }
	 powerArray.push( hp1);
	 powerArray.push( hp2);
	 //SP��
	 var s2="SP";
	 var roleSP=objAttack.fullSP;
	 var addSp=getRoleUpData(objAttack.addSP);
	 var sp2 = new text(s2,  aftLBg.sx+16 , aftLBg.sy+88,aftLBg.sx+16 , aftLBg.sy+88, "#F9F900", "bold 20px FangSong");
	 var sp1 = new text(roleSP, aftLBg.sx+70 , aftLBg.sy+88 ,aftLBg.sx+70 , aftLBg.sy+88 , "#00FFFF", "bold 20px FangSong");
	 if(addSp!=0){
	   var sp3 = new text(jia,aftLBg.sx+120 , aftLBg.sy+88 , aftLBg.sx+120 , aftLBg.sy+88 , "#F9F900", "bold 20px FangSong");
	   var sp = new text(addSp,aftLBg.sx+140 ,aftLBg.sy+88  , aftLBg.sx+140 ,aftLBg.sy+88  , "#00DB00", "bold 20px FangSong");
	   powerArray.push(sp3);
	   powerArray.push(sp);
	 }
	 powerArray.push(sp1);
	 powerArray.push(sp2);
	 //mp
	 var s4="MP";
	 var roleMp=objAttack.fullMP;
	 var addmp=getRoleUpData(objAttack.addMP);
	 var mp1= new text(s4, aftLBg.sx+16 , aftLBg.sy+140 , aftLBg.sx+16 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	 var mp2= new text(roleMp,aftLBg.sx+70 , aftLBg.sy+140 , aftLBg.sx+70 , aftLBg.sy+140 , "#00FFFF", "bold 20px FangSong");
	 if(addmp!=0){
	   var mp3 = new text(jia, aftLBg.sx+120 , aftLBg.sy+140 , aftLBg.sx+120 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	   var mp4 = new text(addmp,  aftLBg.sx+140 ,aftLBg.sy+140 ,aftLBg.sx+140 ,aftLBg.sy+140 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(mp3);
	   powerArray.push(mp4);
	 }
	 powerArray.push(mp1);
	 powerArray.push(mp2);
	
	 //MOV
	 var s3="MOV";	
	 var rolemov=objAttack.movement;
	 var addMOV=getRoleUpData(objAttack.addMOV);
	 var mov2 = new text(rolemov, aftLBg.sx+70 , aftLBg.sy+185 ,aftLBg.sx+70 , aftLBg.sy+185 , "#00FFFF", "bold 20px FangSong");
	 var mov3 = new text(s3,  aftLBg.sx+16 , aftLBg.sy+185 ,aftLBg.sx+16 , aftLBg.sy+185 , "#F9F900", "bold 20px FangSong");
     if(addMOV!=0){
	   var mov1 = new text(jia,aftLBg.sx+120 , aftLBg.sy+185 , aftLBg.sx+120 , aftLBg.sy+185 , "#F9F900", "bold 20px FangSong");
	   var mov = new text(addMOV,aftLBg.sx+140 ,aftLBg.sy+185 , aftLBg.sx+140 ,aftLBg.sy+185 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(mov1);
	   powerArray.push(mov);
	 }
	 powerArray.push(mov2);
	 powerArray.push(mov3);
	 //ATK
	 var s5="��";
	 var roleAtk=objAttack.ATK;
	 var addATK=getRoleUpData(objAttack.addATK);
	 var atk1=new text(roleAtk,aftLBg.sx+274 , aftLBg.sy+38 , aftLBg.sx+274 , aftLBg.sy+38 , "#00FFFF", "bold 20px FangSong");
	 var atk2 = new text(s5,aftLBg.sx+220 , aftLBg.sy+38 , aftLBg.sx+220 , aftLBg.sy+38 , "#F9F900", "bold 20px FangSong");
	 powerArray.push(atk1);
	 powerArray.push(atk2);
	 if(addATK!=0){
	   var atk3 = new text(jia,aftLBg.sx+324 , aftLBg.sy+38 , aftLBg.sx+324 , aftLBg.sy+38 , "#F9F900", "bold 20px FangSong");
	   var atk4 = new text(addATK, aftLBg.sx+344 ,aftLBg.sy+38 ,aftLBg.sx+344 ,aftLBg.sy+38 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(atk3);
	   powerArray.push(atk4);
	 }
	 //��
	 var s6="��";
	 var roleDef=objAttack.DEF;
	 var addDEF=getRoleUpData(objAttack.addDEF);
	 var def1=new text(roleDef, aftLBg.sx+274 , aftLBg.sy+88 ,aftLBg.sx+274 , aftLBg.sy+88 , "#00FFFF", "bold 20px FangSong");
	 var def2 = new text(s6, aftLBg.sx+220 , aftLBg.sy+88 ,aftLBg.sx+220 , aftLBg.sy+88 , "#F9F900", "bold 20px FangSong");
	 powerArray.push(def1);
	 powerArray.push(def2);
	 if(addDEF!=0){
	   var def3 = new text(jia,aftLBg.sx+324 , aftLBg.sy+88 , aftLBg.sx+324 , aftLBg.sy+88 , "#F9F900", "bold 20px FangSong");
	   var def4 = new text(addDEF,aftLBg.sx+344 ,aftLBg.sy+88 , aftLBg.sx+344 ,aftLBg.sy+88 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(def3);
	   powerArray.push(def4);
	 }
	 //��
	 var s7="��";
	 var rolespe=objAttack.speed;
	 var addspe=getRoleUpData(objAttack.addSpeed);
	 var spe1=new text(rolespe,aftLBg.sx+274 , aftLBg.sy+140 , aftLBg.sx+274 , aftLBg.sy+140 , "#00FFFF", "bold 20px FangSong");
	 var spe2=new text(s7,aftLBg.sx+220 , aftLBg.sy+140 , aftLBg.sx+220 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	 powerArray.push(spe1);
	 powerArray.push(spe2);
	 if(addspe!=0){
	   var spe3 = new text(jia,aftLBg.sx+324 , aftLBg.sy+140 , aftLBg.sx+324 , aftLBg.sy+140 , "#F9F900", "bold 20px FangSong");
	   var spe4 = new text(addspe,aftLBg.sx+344 ,aftLBg.sy+140 , aftLBg.sx+344 ,aftLBg.sy+140 , "#00DB00", "bold 20px FangSong");
	   powerArray.push(spe3);
	   powerArray.push(spe4);
	   //drawAll();  
	 }
	 //����role��HP,fullHP
     objAttack.fullHP=Number(addHp)+Number(objAttack.fullHP);
	 objAttack.HP=objAttack.fullHP;
     //����role��SP,fullSP
	 objAttack.fullSP=Number(addSp)+Number(objAttack.fullSP);
	 objAttack.SP= objAttack.fullSP;
     //����role��speed
	 objAttack.speed=Number(addspe)+Number(objAttack.speed);
	 //����role��Mp
	 objAttack.fullMP=Number(addmp)+Number(objAttack.fullMP);
	 objAttack.MP=objAttack.fullMP;
     //����role��ATK
	 objAttack.ATK= Number(addATK)+Number(objAttack.ATK);
	 //����role��DEF
	 objAttack.DEF=Number(addDEF)+Number(objAttack.DEF);
	 //����role��mov
	 objAttack.movement=Number(objAttack.movement)+Number(addMOV);
		
     //������
	  var h = new Image();
      h.src = objAttack.halfBody;
      var s3 = new picture(48*5, 48*4,48*5, 48*4, 4 * rpx, 4 * rpx, h);
	  powerArray.push(s3);  
	  //drawAll();  
}
/*
������Χû�п�λ���Ը���
*/
function noEmptyPlace(){	
	 var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	 var aa="������Χû�п�λ���Ը���";
	 var r1 = new text(aa,6*rpx,6*rpx ,6*rpx ,6*rpx , "#F9F900", "bold 40px KaiTi");
    confirmArray.push(shadow);
    confirmArray.push(r1);
   // drawAll();
    setTimeout(function() {
        clearArray(confirmArray);
        //drawAll();
    },
    2000);
 

}
//���ǲ�
function FuGaiCeng(enemy,role){
	 var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	 shadowShow.push(shadow);
	/*
   //-------��Ӹ��ǲ㣬�����Ժ�϶�Ҫ�޸ĵ�--------
   //�ڵ��˵�����(OK)
	if(enemy.mapX==role.mapX&&enemy.mapY>role.mapY){
		var shadow1=new rectangle(0,0,0,0,role.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(role.mapX+48,0,role.mapX+48,0,canvasWidth-role.mapX-48,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(role.mapX,0,role.mapX,0,48,role.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(enemy.mapX,enemy.mapY+48,enemy.mapX,enemy.mapY+48,48,canvasHeight-enemy.mapY-48,"rgba(0,0,0,0.7)");							
	}
	//�ڵ��˵����(OK)
	else if(role.mapX<enemy.mapX&&enemy.mapY==role.mapY){
		var shadow1=new rectangle(0,0,0,0,role.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(role.mapX+96,0,role.mapX+96,0,canvasWidth-role.mapX-96,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(role.mapX,0,role.mapX,0,96,role.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(role.mapX,role.mapY+48,role.mapX,role.mapY+48,96,canvasHeight-role.mapY-48,"rgba(0,0,0,0.7)");
	}
	//�ڵ��˵��ұ�(OK)
	else if(enemy.mapX<role.mapX&&enemy.mapY==role.mapY){
		var shadow1=new rectangle(0,0,0,0,enemy.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(role.mapX+48,0,role.mapX+48,0,canvasWidth-role.mapX-48,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(enemy.mapX,0,enemy.mapX,0,96,enemy.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(enemy.mapX,enemy.mapY+48,enemy.mapX,enemy.mapY+48,96,canvasHeight-enemy.mapY-48,"rgba(0,0,0,0.7)");
	}
	//�ڵ��˵�����(OK)
	else if(enemy.mapX==role.mapX&&enemy.mapY<role.mapY){
		var shadow1=new rectangle(0,0,0,0,enemy.mapX,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow2=new rectangle(enemy.mapX+48,0,enemy.mapX+48,0,canvasWidth-enemy.mapX-48,canvasHeight,"rgba(0,0,0,0.7)");
		var shadow3=new rectangle(enemy.mapX,0,enemy.mapX,0,48,enemy.mapY,"rgba(0,0,0,0.7)");
		var shadow4=new rectangle(enemy.mapX,enemy.mapY+96,enemy.mapX,enemy.mapY+96,48,canvasHeight-enemy.mapY-96,"rgba(0,0,0,0.7)");
	}
	shadowShow.push(shadow1);
	shadowShow.push(shadow2);
	shadowShow.push(shadow3);
	shadowShow.push(shadow4);
	*/
    //drawAll();

}
//�ƶ���ͼ
function moveMap(){
  levelUpOk=true;//����ʹ��Ϸһ��ʼ�Լ��ƶ���ʱ����ֹ�û�����ڻ������ܴ�����ͼ�����¼�
  mapRightMov=true;
  ourTurn.play();
  canvas.removeEventListener('click', cCheck, false);
  drawAll();
//  drawAll();
  clearArray(everything2);
//  mapDraw=setInterval(drawAll,8);
  mapDraw=window.requestAnimationFrame(drawAll);
  // drawAll();
   
	
  //drawAll();
   var t1 = setInterval(function(){
	  if(!mapRightMov){
		  clearInterval(t1);
		  mapLeftMov=true; 
		 // drawAll();
		//  mapDraw=setInterval(drawAll,8);
		  var t2=setInterval(function(){
			  if(!mapLeftMov)
			  	{
			  	clearInterval(t2);
			  	levelUpOk=false;			
			  	showMapName();
			  	}
		  },1000);
	  }
  },1000);
// alert("aa");
 // mapLeftMov=true;
//   drawAll();
//  mapDraw=window.requestAnimationFrame(drawAll);
  
  //if(!mapLeftMov){levelUpOk=false;showMapName();}
  
/*  var t1 = setInterval(function(){
	  if(!mapRightMov){
		  clearInterval(t1);
		  mapLeftMov=true; 
		//  mapDraw=setInterval(drawAll,8);
		  mapDraw=window.requestAnimationFrame(drawAll);
		  var t2=setInterval(function(){
			  if(!mapLeftMov){clearInterval(t2);levelUpOk=false;showMapName();}
		  },1000);
	  }
  },1000);*/
}
//��Ϸ����չʾ   


function gameBGShow()
{
  
   gameBackGroundShow=true;
   gamebgShow.currentTime=0;
   gamebgShow.play(); 
   ctx.clearRect(0, 0, canvasWidth, canvasHeight);   
   //var dElem = document.getElementById("canvas");
   //var dCtx = dElem.getContext('2d');    
   ctx.font ="20px Ҷ����ë������";  
   ctx.fillStyle = "white";
   var jump = new text("�������",0,0,700,520, "#FFFFFF", "bold 20px FangSong");
   ctx.drawImage(imagehand,800,500,83,37); 
   jump.draw();
   tick();
}

var handle=0;
var sub=0;
var wx=46;
var wy=96;


function ingamewords()
{ 
   var dElem = document.getElementById("canvas");
   var dCtx = dElem.getContext('2d');
   var text1 = "�ڹŴ���������,��һ������Ľ��ɽвл��,�ִ�ˮ�ǲл�̵Ľ���,����һ���ĵ��������ˣ��л�������Ĵ����£���������׳�����ճ�Ϊ��ԭ��һ���.Ȼ����ĳ����ҹ������л���⵽��һȺ�����˵�Ϯ������Ⱥ�������Գ�������һ���������ꡱ����֯��������һ�������������еĻ�ɫ�������ѽ������������꣬����������Ļ��άϵ�������е�ƽ�⣬ÿ�������г�����һ��ǿ�����֯�������п�����в�����ǵĴ��ڣ����Ǳ����������ˣ�ȥĨɱ����Щ�����������������е�ƽ�⣬���仰˵������ȷ�����ꡱ�������еĵ�λ����Щ�����˵������Ȳл��ǿ���̫���ˣ���Ȼ�л�̵Ľ�Ա��ƴ���ֿ���ȴ������ɱ¾�������ִ�ˮΪ�˱�����������ˮ�������Լ������ֻ������ˮһ�������������ɱ¾�� ";
   var arr = text1.split('');    
   dCtx.font ="20px Ҷ����ë������";  
   dCtx.fillStyle = "white";
    
   if(gameBackGroundShow)
	   {
	   dCtx.fillText(arr[sub],wx,wy);
	   wx += ctx.measureText(arr[sub]).width; 
	   if(sub==46){wx=0;wy=wy+48;}
				else if(sub==70){wx=48;wy=wy+48;}
				else if(sub==115){wx=0;wy=wy+48;}
				else if(sub==163){wx=0;wy=wy+48;}
				else if(sub==211){wx=0;wy=wy+48;}
                else if(sub==240){wx=48;wy=wy+48;}
				else if(sub==285){wx=0;wy=wy+48;}	   				
	   }
	   if(sub<318)
		   {
		   //handle = window.requestAnimationFrame(ingamewords);
		   
		   sub++;
		   }   

	   else if(sub==318)
			{		   
		   window.cancelAnimationFrame(handle); 
		   handle = null;
           gameBackGroundShow=false;
		 
		   //setTimeout(,5000);
		   gamebgShow.pause();
		   setTimeout(moveMap,2000);
		   } 
}

var fps = 15;
var now;
var pauseyyy=false;
var then = Date.now();
var interval = 1000/fps;
var delta;
function tick() {
    handle=window.requestAnimationFrame(tick);
    now = Date.now();  
    delta = now - then;
    if (delta > interval) {
    // ���ﲻ�ܼ�then=now�����򻹻�����ϱ߼�������ϸ΢ʱ������⡣����fps=10��ÿ֡100ms��������ÿ16ms��60fps��ִ��һ��draw��16*7=112>100����Ҫ7�β�ʵ�ʻ���һ�Ρ��������£�ʵ��10֡��Ҫ112*10=1120ms>1000ms�Ż�����ɡ�
    then = now - (delta % interval);
    ingamewords(); //Code for Drawing the Frame
	}
}

//����ĺ���
var DJZLBg;
function ZhengLi(obj,index){
	//ȫ���ĸ��ǲ�
	  clearArr(shadowShow);
	  var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	  shadowShow.push(shadow);
	if(index==5){
		//��������ı���
		 DJZLBg =new picture(0,0,24, 48, 670,550, DJZL);
		 shadowShow.push(DJZLBg);
	}else if(index==6){
		//ŭ������ı���
		 DJZLBg =new picture(0,0,24, 48, 670,550, NJZL);
		 shadowShow.push(DJZLBg);
	}else if(index==7){
		//�ܼ�����ı���
		 DJZLBg =new picture(0,0,24, 48, 670,550, MJZL);
		 shadowShow.push(DJZLBg);
	}else if(index==8){
		 DJZLBg =new picture(0,0,24, 48, 670,550, ZBZL);
		 shadowShow.push(DJZLBg);
	}else if(index==9){
		 DJZLBg =new picture(0,0,24, 48, 670,550, DJSD);
		 shadowShow.push(DJZLBg);
	}else if(index==10){
		 DJZLBg =new picture(0,0,24, 48, 670,550, WQSD);
		 shadowShow.push(DJZLBg);
	}
	//�رյİ�ť
	CloseImg = new picture(0,0,DJZLBg.sx + DJZLBg.swidth - rpx - 4, DJZLBg.sy+2 / 3 * rpx, 2 / 3 * rpx, 2 / 3 * rpx, close);
	shadowShow.push(CloseImg);
	//ͷ��
	var hf = new Image();
	hf.src = obj.halfBody;
	var halfBody = new picture(0,0,DJZLBg.sx+60, DJZLBg.sy+80,60, 60, hf);
	shadowShow.push(halfBody);
	//���Ҽ�ͷ
	leftArrow=new picture(0,0,DJZLBg.sx+25, DJZLBg.sy+95,25, 25, zjt);
	rightArrow=new picture(0,0,DJZLBg.sx+277, DJZLBg.sy+95,25, 25, yjt);
	shadowShow.push(leftArrow);
	shadowShow.push(rightArrow);
	if(index!=9&&index!=10){
		//����
		var name = new text(obj.name, 0,0,DJZLBg.sx+140 , DJZLBg.sy+100 , "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(name);
		//�ȼ�
		var lv = new text("LV " + obj.level + "  " + obj.EXP + "/" + obj.nextEXP,0,0, DJZLBg.sx +140,DJZLBg.sy+140, "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(lv);
	}else{
	    //ȫ�ӽ�Ǯ
		var name = new text("ȫ�ӽ�Ǯ", 0,0,DJZLBg.sx+140 , DJZLBg.sy+100 , "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(name);
		//��Ǯ
		var lv = new text(teamMoney,0,0, DJZLBg.sx +140,DJZLBg.sy+140, "rgb(255,255,255)", "bold 25px KaiTi");
		shadowShow.push(lv);
	}
if(index==5){
	//�ֿ��еĵ���
	var tt=0;
	if(storehouse.additems.length!=0){
	    for (var i = 0; i < storehouse.additems.length; i++) {
		   for (var j = 0; j < itemArrays.length; j++) {
			   if (storehouse.additems[i].id == itemArrays[j].id) {
				     var img1 = new Image();
                     img1.src = itemArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +storehouse.additems[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(itemArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//�����б�
	var t = 0;
    for (var i = 0; i < obj.items.length; i++) {
        for (var j = 0; j < itemArrays.length; j++) {
            if (obj.items[i].id == itemArrays[j].id) {
                if (obj.items[i].num > 0) {
                	 var img = new Image();
                     img.src = itemArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+40,DJZLBg.sy+170+t*60, rpx, rpx, img);
                     var s = "" + obj.items[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+80,DJZLBg.sy+220+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(itemArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+200+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
}else
if(index==6){
	//�ֿ��е�ŭ��
	var tt=0;
	if(storehouse.addpowers.length!=0){
	    for (var i = 0; i < storehouse.addpowers.length; i++) {
		   for (var j = 0; j < powerArrays.length; j++) {
			   if (storehouse.addpowers[i]== powerArrays[j].id) {
				     var img1 = new Image();
                     img1.src = powerArrays[j].img;
                     var powerImg1 = new picture(0,0,DJZLBg.sx+330,DJZLBg.sy+90+tt*60,50,50, img1);
                     var name1 = new text(powerArrays[j].name,0,0,DJZLBg.sx+424,DJZLBg.sy+125+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(powerImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//ŭ���б�
	var t = 0;
	if(obj.powers.length!=0){
		for (var i = 0; i < obj.powers.length; i++) {
			for (var j = 0; j < powerArrays.length; j++) {
				if (obj.powers[i] == powerArrays[j].id) { 
						 var img = new Image();
						 img.src = powerArrays[j].img;
						 var powerImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+177,50,50, img);
						 var name = new text(powerArrays[j].name,0,0,DJZLBg.sx+124,DJZLBg.sy+210, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
						 var name1 = new text(powerArrays[j].name+":",0,0,DJZLBg.sx+50,DJZLBg.sy+340, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
						 var powerDis=new text(powerArrays[j].discripe,0,0,DJZLBg.sx+50,DJZLBg.sy+380, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
						 shadowShow.push(powerImg);
						 shadowShow.push(name);
						 shadowShow.push(name1);
						 shadowShow.push(powerDis);
						 t++;
				}
			}
		}
	}
}else 
if(index==7){
	//�ֿ��е��ܼ�
	var tt=0;
	if(storehouse.addskills.length!=0){
	    for (var i = 0; i < storehouse.addskills.length; i++) {
		   for (var j = 0; j < skillArrays.length; j++) {
			   if (storehouse.addskills[i]== skillArrays[j].id) {
				     var img1 = new Image();
                     img1.src = skillArrays[j].img;
                     var skillImg1 = new picture(0,0,DJZLBg.sx+331,DJZLBg.sy+90+tt*60, 50,50, img1);
                     var name1 = new text(skillArrays[j].name,0,0,DJZLBg.sx+419,DJZLBg.sy+122+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(skillImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//�ܼ��б�
	var t = 0;
	for (var i = 0; i < obj.skills.length; i++) {
	    for (var j = 0; j < skillArrays.length; j++) {
	        if (obj.skills[i] == skillArrays[j].id) { 
	            var img = new Image();
	            img.src = skillArrays[j].img;
	            var skillImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+195+t*60, 50, 50, img);
	            var name = new text(skillArrays[j].name,0,0,DJZLBg.sx+126,DJZLBg.sy+225+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
	            shadowShow.push(skillImg);
	            shadowShow.push(name);
	            t++;
	        }
	    }
	}
}else
if(index==8){
	//�ֿ��е�װ��
	var tt=0;
	if(storehouse.addequips.length!=0){
	    for (var i = 0; i < storehouse.addequips.length; i++) {
		   for (var j = 0; j < equipArrays.length; j++) {
			   if (storehouse.addequips[i].id == equipArrays[j].id) {
				     var img1 = new Image();
                     img1.src = equipArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +storehouse.addequips[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(equipArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//װ���б�
	var t = 0;
    for (var i = 0; i < obj.equips.length; i++) {
        for (var j = 0; j < equipArrays.length; j++) {
            if (obj.equips[i].id == equipArrays[j].id) {
                if (obj.equips[i].num > 0) {
                	 var img = new Image();
                     img.src = equipArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+40,DJZLBg.sy+170+t*60, rpx, rpx, img);
                     var s = "" + obj.equips[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+80,DJZLBg.sy+220+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(equipArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+200+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
}else
if(index==9){
	//���еĵ���
	var tt=0;
	if(store.items.length!=0){
	    for (var i = 0; i < store.items.length; i++) {
		   for (var j = 0; j < itemArrays.length; j++) {
			   if (store.items[i].id == itemArrays[j].id) {
				     var img1 = new Image();
                     img1.src = itemArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +store.items[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(itemArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//�ֿ�����б�
                    
	var t = 0;
    for (var i = 0; i < storehouse.additems.length; i++) {
        for (var j = 0; j < itemArrays.length; j++) {
            if (storehouse.additems[i].id == itemArrays[j].id) {
                if (storehouse.additems[i].num > 0) {
                	 var img = new Image();
                     img.src = itemArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+180+t*60, rpx, rpx, img);
                     var s = "" + storehouse.additems[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+85,DJZLBg.sy+225+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(itemArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+210+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
}else
if(index==10){
    //�̵��е�����
	var tt=0;
	if(store.equips.length!=0){
	    for (var i = 0; i < store.equips.length; i++) {
		   for (var j = 0; j < equipArrays.length; j++) {
			   if (store.equips[i].id == equipArrays[j].id) {
				     var img1 = new Image();
                     img1.src = equipArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+326,DJZLBg.sy+90+tt*60, rpx, rpx, img1);
					 var s1 = "" +store.equips[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+365, DJZLBg.sy+142+tt*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(equipArrays[j].name,0,0,432,170+tt*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	//�ֿ��е�װ���б�                  
	var t = 0;
    for (var i = 0; i < storehouse.addequips.length; i++) {
		console.log("equipArrays.length                   "+equipArrays.length);
        for (var j = 0; j < equipArrays.length; j++) {
		
            if (storehouse.addequips[i].id == equipArrays[j].id) {
                if (storehouse.addequips[i].num > 0) {
                	 var img = new Image();
                     img.src = equipArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+45,DJZLBg.sy+180+t*60, rpx, rpx, img);
                     var s = "" + storehouse.addequips[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+85,DJZLBg.sy+225+t*60, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(equipArrays[j].name,0,0,DJZLBg.sx+120,DJZLBg.sy+200+t*60, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
	}
}
	drawArr(shadowShow);
	bigMapoption=false;
	if(index==5){DJZhengLi=true;}
	else if(index==6){NJZhengLi=true;}
	else if(index==7){MJZhengLi=true;}
	else if(index==8){ZBZhengLi=true;}
	else if(index==9){itemStore=true;}
	else if(index==10){equipStore=true;}
}
//˵����,������arr���ҵ�index�ĵ���,which==0˵���ǵ�������ĵ��ߣ�==1˵�����ؼ�,==2˵���������̵�==3˵����ŭ������Ĳֿ�
function getShuoMingText(arr,index,which){ 
	
	if(which==0){//����
		everything2.push(informaitionSow);//����˵���ı�����
        for (var j = 0; j < itemArrays.length; j++) {
            if (arr[index].id == itemArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(itemArrays[j].name+":",0,0,informaitionSow.sx+70,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=itemArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+10,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(itemArrays[j].discripe,0,0,informaitionSow.sx+20,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==1){//�ؼ�
		everything2.push(informaitionSow);//����˵���ı�����
	    for (var j = 0; j < skillArrays.length; j++) {
			if(arr[index]==skillArrays[j].id){
			   var skillname = new text(skillArrays[j].name+":",0,0,informaitionSow.sx+10,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               var allText=skillArrays[j].discripe;
               if(allText.length>10){
				   var subAllText=allText.substring(10,allText.length);
				   allText=allText.substring(0,10);
			   }
			   var dis = new text(allText,0,0,informaitionSow.sx+10,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
			   var dis1 = new text(subAllText,0,0,informaitionSow.sx+10,informaitionSow.sy+248, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               everything2.push(skillname);
			   everything2.push(dis);
			   everything2.push(dis1);
			}
		}
	}else if(which==2){//����
		everything2.push(informaitionSow);//����˵���ı�����
		 for (var j = 0; j < equipArrays.length; j++) {
            if (arr[index].id == equipArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(equipArrays[j].name+":",0,0,informaitionSow.sx+70,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=equipArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+10,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(equipArrays[j].discripe,0,0,informaitionSow.sx+20,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==3){//ŭ���ܵ�˵��
	     for (var j = 0; j < powerArrays.length; j++) {
            if (arr[index] == powerArrays[j].id) {
                 var name1 = new text(powerArrays[j].name+":",0,0,DJZLBg.sx+50,DJZLBg.sy+340, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
				 var powerDis=new text(powerArrays[j].discripe,0,0,DJZLBg.sx+50,DJZLBg.sy+380, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
				 everything2.push(name1);
				 everything2.push(powerDis);
            }
        }
	}
}
/*
�ֿ��е�˵��
*/
function getShuoMingText1(arr,index,which){ 
		if(which==00){//����
		everything2.push(informaitionSow1);//����˵���ı�����
        for (var j = 0; j < itemArrays.length; j++) {
            if (arr[index].id == itemArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(itemArrays[j].name+":",0,0,informaitionSow.sx+90,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=itemArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+30,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(itemArrays[j].discripe,0,0,informaitionSow.sx+40,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==10){//�ؼ�
		everything2.push(informaitionSow1);//����˵���ı�����
	    for (var j = 0; j < skillArrays.length; j++) {
			if(arr[index]==skillArrays[j].id){
			   var skillname = new text(skillArrays[j].name+":",0,0,informaitionSow.sx+30,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               var allText=skillArrays[j].discripe;
               if(allText.length>10){
				   var subAllText=allText.substring(10,allText.length);
				   allText=allText.substring(0,10);
			   }
			   var dis = new text(allText,0,0,informaitionSow.sx+25,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
			   var dis1 = new text(subAllText,0,0,informaitionSow.sx+25,informaitionSow.sy+248, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
               everything2.push(skillname);
			   everything2.push(dis);
			   everything2.push(dis1);
			}
		}
	}else if(which==20){//����
		everything2.push(informaitionSow1);//����˵���ı�����
		 for (var j = 0; j < equipArrays.length; j++) {
            if (arr[index].id == equipArrays[j].id) {
                if (arr[index].num > 0) {
					 var itemname = new text(equipArrays[j].name+":",0,0,informaitionSow.sx+90,informaitionSow.sy+150, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
		             var itempicture=new Image();
                     itempicture.src=equipArrays[j].img;
					 var itemP=new picture(0,0,informaitionSow.sx+30,informaitionSow.sy+120,rpx,rpx,itempicture);
                     var dis = new text(equipArrays[j].discripe,0,0,informaitionSow.sx+40,informaitionSow.sy+200, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     everything2.push(itemP);
					 everything2.push(itemname);
					 everything2.push(dis);
                }
            }
        }
	}else if(which==30){//ŭ���ܵ�˵��
		everything2.push(informaitionSow1);//����˵���ı�����
	     for (var j = 0; j < powerArrays.length; j++) {
            if (arr[index] == powerArrays[j].id) {
                 var name1 = new text(powerArrays[j].name+":",0,0,DJZLBg.sx+565,DJZLBg.sy+230, "rgb(255,255,255)", "bold 18px Microsoft Yahei");
				 var powerDis=new text(powerArrays[j].discripe,0,0,DJZLBg.sx+565,DJZLBg.sy+270, "rgb(255,255,255)", "bold 18px Microsoft Yahei");
				 everything2.push(name1);
				 everything2.push(powerDis);
            }
        }
	}
}
/*
�Ѻ�ɫ��ס
*/
function DZKuang(copyMrec){
 var dingZhuKuan= new box(0,0,copyMrec.sx,copyMrec.sy,copyMrec.swidth,copyMrec.sheight, "rgb(255,0,0)");everything1.push(dingZhuKuan);
}
/*
�ѵ��ߵĽ�ס,which=0,��ʾ�ڱ�����߶�ס��1��ʾ�ڲֿ���߶�ס,2��ʾ�������̵���߶�ס
*/
function DZGold(index,which){
   if(which==0){
	  var itemMoney=returnItemPrice(storehouse.additems[index].id);
	  var Money=new text(itemMoney,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money);
   }else if(which==1){
      var itemMoney1=returnItemPrice(store.items[index].id);
	  var Money1=new text(itemMoney1,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money1);
   }else if(which==2){//�����̵���ұ�
      var itemMoney2=returnEquipPrice(store.equips[index].id);
	  var Money2=new text(itemMoney2,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money2);
   }else if(which==3){
      var itemMoney3=returnEquipPrice(storehouse.addequips[index].id);
	  var Money3=new text(itemMoney3,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything1.push(Money3);
   }
}
/*
  ȷ�ϵĻ���
*/

var huaKuai;//����
var selsectNum;//��ʾ�Ѿ�ѡ�ж��ٵ��ַ���
function changeItemNumber(option){
 if(tempp==10||tempp==30){dragNum=1;}
 itemNumChange=true;
 DJZhengLi=false;
 itemStore=false;
 equipStore=false;
 cangKuShow=false;
 var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
 minusButton = new picture(0,0,confirmBg.sx+250,confirmBg.sy+55,16,17, minus);
 addButton = new picture(0,0,confirmBg.sx+250,confirmBg.sy+75,16,17, add);
 var numAll = new round(DJZLBg.sx +250, DJZLBg.sy +240, 4*rpx, 7, "#0080FF");//��׼������
 selsectNum=new text("��ѡ����  "+dragNum+"  �ݸõ���",0,0,DJZLBg.sx+250,DJZLBg.sy +210, "#000000", "bold 20px Microsoft Yahei");
 huaKuai=new rectangle(DJZLBg.sx+250,0,DJZLBg.sx+250,DJZLBg.sy +230, 10, 20, "red");
 confirmArray.push(confirmBg);
 confirmArray.push(minusButton);
 confirmArray.push(addButton);
 confirmArray.push(numAll);
 confirmArray.push(selsectNum);
 confirmArray.push(huaKuai);
 ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
 cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
 confirmArray.push(ensure);
 confirmArray.push(cancel);
 drawBigMap();
}
//ȷ����ӡ
function areUSureFX(){
   sureToFX=true;
   NJZhengLi=false;
   ZBZhengLi=false;
   equipStore=false;
   if(itemOption==4||itemOption==6){ 
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
       ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
       cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
       confirmArray.push(confirmBg);
       var dis= new text("ȷ����ӡ��",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==5||itemOption==7){
	   var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("ȷ��������",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==10){
	  var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	  confirmArray.push(shadow);
	  var confirmBg = new picture(0,0,350,210, 6 * rpx, 3 * rpx, confirm);
      ensure = new picture(0,0,confirmBg.sx+30,confirmBg.sy+100 , 2 * rpx, 8 / 15 * rpx, qd);
      cancel = new picture(0,0,ensure.sx + 130,confirmBg.sy+100, 2 * rpx, 8 / 15 * rpx, qx);
      confirmArray.push(confirmBg);
      var dis= new text("ȷ��������һ�أ�",0,0,confirmBg.sx+70,confirmBg.sy +60, "#000000", "bold 20px Microsoft Yahei");
      confirmArray.push(dis);
   }else if(itemOption==11){
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("ȷ������һ�ݣ�",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==12){
	   var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("ȷ��װ����",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==13){
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("ȷ��ж�أ�",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }else if(itemOption==14){
       var confirmBg = new picture(0,0,DJZLBg.sx+210,DJZLBg.sy+167, 6 * rpx, 3 * rpx, confirm);
	   ensure = new picture(0,0,DJZLBg.sx +250 , DJZLBg.sy +270, 2 * rpx, 8 / 15 * rpx, qd);
	   cancel = new picture(0,0,ensure.sx + 120, DJZLBg.sy+270, 2 * rpx, 8 / 15 * rpx, qx);
	   confirmArray.push(confirmBg);
       var dis= new text("ȷ��������",0,0,DJZLBg.sx+280,DJZLBg.sy +230, "#000000", "bold 30px Microsoft Yahei");
       confirmArray.push(dis);
   }
   confirmArray.push(ensure);
   confirmArray.push(cancel);
   drawBigMap();

}
//�Żزֿ�ĺ���
function backToStoreHouse(obj,fromArr,destArr,caSeNum,select,drop){
    for(var i=0;i<select.length;i++){
	  //==1��ʾ��I�����ӱ�ѡ����
	  if(select[i]==1){
		  //caSeNum==5,��ʾ�Ե��߽��в���
	      if(caSeNum==5){
			  //����Ƕ���
		      if(drop){
                  fromArr[i].num-=dragNum;
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
					  copyItem1.id=fromArr[i].id;
					  copyItem1.num=fromArr[i].num;
					  //�ж���תս�Ƿ������ID�ĵ�������
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
			  }
			  //����ǷŻزֿ�
			  else{
				  //���Ƹõ��ߵ�ID������
				  var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=dragNum;
				  //���±������������
				  fromArr[i].num-=dragNum;
				  //�ж���תս�Ƿ������ID�ĵ�������
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
				      copyItem1.id=fromArr[i].id;
				      copyItem1.num=fromArr[i].num;
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
				  //�ж��Ƿ��Ѿ��и�ID�ڲֿ���
				  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){destArr[j].num+=copyItem.num;}
					 }
				  }else{destArr.push(copyItem);}//�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
			  }
		  }else if(caSeNum==6){
			   if(drop){
			   }else{
				 //��copypowerID����ֿ�
				 var copypowerID=fromArr[i];
			     destArr.push(copypowerID);
			   }
		  }else if(caSeNum==7){
               if(drop){
			   }else{
				 //��copypowerID����ֿ�
				 var copyskillID=fromArr[i];
			     destArr.push(copyskillID);
			   }
		  }else if(caSeNum==8){
			     //����Ҫ���Ƶ�װ��
		         var copyequip=new equipZB();
			     copyequip.id=fromArr[i].id;
                 copyequip.num=fromArr[i].num;
                 fullFillEquip(obj,copyequip.id);
				 //�ж��ڲֿ����Ƿ��Ѿ��и�װ��������
				 if(isIdOfItemThere(destArr,copyequip.id)){
                     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyequip.id){destArr[j].num+=copyequip.num;}
					 }
			     }else{destArr.push(copyequip);}
		  }else if(caSeNum==9){
			     //�����˵ĵ��ߵ�Ǯ�ӵ�ȫ�ӵ�Ǯ��
		         var itemMoney=dragNum*returnItemPrice(fromArr[i].id);
				 sellItemAlert(itemMoney);
			     teamMoney+=itemMoney;
                 //���Ƹõ��ߵ�ID������
				  var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=dragNum;
				  //���²ֿ����������
				  fromArr[i].num-=dragNum;
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
					  copyItem1.id=fromArr[i].id;
					  copyItem1.num=fromArr[i].num;
					  //�ж���תս�Ƿ������ID�ĵ�������
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
				  //�ж��Ƿ��Ѿ��и�ID���̵���
				  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){destArr[j].num+=copyItem.num;}
					 }
				  }else{destArr.push(copyItem);}//�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
		  }else if(caSeNum==10){
			  //��װ����Ǯ����ȥ
              var equipMoney=returnEquipPrice(fromArr[i].id);
              sellEquipAlert(equipMoney);
			  teamMoney+=equipMoney;
			  //��Ҫ����װ�������̵�
			  var copyequip=new equipZB();
			  copyequip.id=fromArr[i].id;
			  copyequip.num=1;
			  //�ж���dextArr���Ƿ��и�ID����������
			  if(isIdOfItemThere(destArr,copyequip.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyequip.id){destArr[j].num+=copyequip.num;}
					 }
			  }else{destArr.push(copyequip);}
		  }
	  }else{//˵���������û�б�ѡ��
	      if(caSeNum==5){
		      //�����������
			  var copyItem;
			  copyItem=new item();
              copyItem.id=fromArr[i].id;
              copyItem.num=fromArr[i].num;
			  //�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
              if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
				     for(var j=0;j<storehouse.tempArr.length;j++){
					     if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
					 }
			  }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==7){//û��ѡ�е��ؼ�������תվ
                var copyskillID=obj.skills[i];
			    storehouse.tempArr.push(copyskillID);
		  }else if(caSeNum==8){
			    //����δ��ѡ�е�װ��������תվ
                var copyEquip1=new equipZB();
				copyEquip1.id=fromArr[i].id;
				copyEquip1.num=fromArr[i].num;
			    storehouse.tempArr.push(copyEquip1);
		  }else if(caSeNum==9){
		        //�����������
				var copyItem=new item();
				copyItem.id=fromArr[i].id;
				copyItem.num=fromArr[i].num;
			    //�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
                if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
				     for(var j=0;j<storehouse.tempArr.length;j++){
					     if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
					 }
			    }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==10){
		          var copyequip=new equipZB();
				  copyequip.id=fromArr[i].id;
				  copyequip.num=fromArr[i].num;
				  //�Ѳֿ���ûѡ�е�װ��������תվ
				  if(isIdOfItemThere(storehouse.tempArr,copyequip.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip.id){storehouse.tempArr[j].num+=copyequip.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip);}
		  }
	  }
	  if(caSeNum==5){if(i==obj.items.length-1){break;}}
	  else if(caSeNum==6){if(i==obj.powers.length-1){break;}}
	  else if(caSeNum==7){if(i==obj.skills.length-1){break;}}
	  else if(caSeNum==8){if(i==obj.equips.length-1){break;}}
	  else if(caSeNum==9){if(i==storehouse.additems.length-1){break;}}
	  else if(caSeNum==10){if(i==storehouse.addequips.length-1){break;}}
	}
	//����תս�ĵ��߷Ż�����ı���
	if(caSeNum==5){
		clearArr(obj.items);
		obj.items=[].concat(storehouse.tempArr);
	}else if(caSeNum==6){
	    clearArr(obj.powers);
	}else if(caSeNum==7){
		clearArr(obj.skills);
		obj.skills=[].concat(storehouse.tempArr);
	}else if(caSeNum==8){
        clearArr(obj.equips);
		obj.equips=[].concat(storehouse.tempArr);
	}else if(caSeNum==9){
	    clearArr(storehouse.additems);
		storehouse.additems=[].concat(storehouse.tempArr);
	}else if(caSeNum==10){
	    clearArr(storehouse.addequips);
		storehouse.addequips=[].concat(storehouse.tempArr);
	}
	dingzhukuangLeft=[0,0,0,0,0];
	dragNum=0;
	clearArr(everything1);
	itemNumChange=false;
	sureToFX=false;
	clearArr(confirmArray);
	clearArr(storehouse.tempArr);
    ZhengLi(obj,caSeNum);
}

//ʵ��װ���Ĺ���,num=0˵����װ����num=1˵����ж��
function fullFillEquip(obj,id,num){
    for (var j = 0; j < equipArrays.length; j++) {
	     if(id==equipArrays[j].id){
			 //��skillVar,fl������
		    if(num){skillVar=equipArrays[j].equipVar;}
			else{skillVar=-equipArrays[j].equipVar;}
			fl=equipArrays[j].func;
			eval(fl + '(obj,skillVar)');
		 }
	}
}
//����Żزֿ�ĺ����ͷŻر����ĺ����ǿ��Ժϲ��ģ�����û����������Ϊ���Ժ��Լ�������
//�Żر����ĺ���
function backToBag(obj,fromArr,destArr,caSeNum,select,drop){
    for(var i=0;i<select.length;i++){
	  //==1��ʾ��I�����ӱ�ѡ����
	  if(select[i]==1){
	      if(caSeNum==5){
			  //����Ƕ���
		      if(drop){
				  console.log(fromArr[i].num+"   1 ");
                  fromArr[i].num-=dragNum;console.log(dragNum+"aa"+fromArr[i].num+"   2 ");
				  if(fromArr[i].num!=0){
					  var copyItem1=new item();
					  copyItem1.id=fromArr[i].id;
					  copyItem1.num=fromArr[i].num;
					  //�ж���תս�Ƿ������ID�ĵ�������
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
					  }
			  }
			  //����ǷŻر���
			  else{
				  //���Ƹõ��ߵ�ID������
				  var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=dragNum;
				  //���±������������
				  fromArr[i].num-=dragNum;
				  var copyItem1=new item();
				  copyItem1.id=fromArr[i].id;
				  copyItem1.num=fromArr[i].num;
				  if(fromArr[i].num!=0){
					  //�ж���תս�Ƿ������ID�ĵ�������
					  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
					  }else{storehouse.tempArr.push(copyItem1);}
				  }
				  //�ж��Ƿ��Ѿ��и�ID�ڱ�����
				  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){obj.items[j].num+=copyItem.num;}
					 }
				  }else{destArr.push(copyItem);}//�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
			  }
		  }else if(caSeNum==6){
			  if(drop){
			   }else{
				 //��copypowerID����ֿ�
				 var copypowerID=fromArr[i];
			     destArr.push(copypowerID);
			   }
		  }else if(caSeNum==7){
			     var copyskillID=fromArr[i];
			     destArr.push(copyskillID);
		  }else if(caSeNum==8){
			     //����Ҫ���Ƶ�װ��
		         var copyequip=new equipZB();
			     copyequip.id=fromArr[i].id;
                 copyequip.num=1;
				 //�õ���װ��������
			     for (var j = 0; j < equipArrays.length; j++) {  
                    if(copyequip.id==equipArrays[j].id){
					   copyequip.type=equipArrays[j].type;
					}
				 }
				 //�ֳֵ�����
				 var equipHandNum=0;
				 //��Ʒ������
				 var equipAdornNum=0;
				 //�õ��ֳֵ�װ������Ʒװ��������
                 for (var m = 0; m < obj.equips.length; m++) {
                      for (var j = 0; j < equipArrays.length; j++) {
                         if (obj.equips[m].id == equipArrays[j].id) {
							 //˵�����ֳֵ�
                             if(equipArrays[j].type==0){equipHandNum++;}
							 else {equipAdornNum++;}
						 }
					  }
				 }
				 //�����װ�����ֳֵ�,�����Ѿ�װ����������С��2��
				 if(copyequip.type==0&&equipHandNum<2){
				     //�жϱ������Ƿ��Ѿ�װ���˸�׼��
				     if(isIdOfItemThere(destArr,copyequip.id)){
				        alert("�Ѿ�װ����װ��");
			         }else{destArr.push(copyequip); fromArr[i].num-=1;fullFillEquip(obj,copyequip.id,true);}
				 }else if(copyequip.type==1&&equipAdornNum==0){//����Ǹ�װ������Ʒ���һ�û��װ������Ʒ
				     if(isIdOfItemThere(destArr,copyequip.id)){
				        alert("�Ѿ�װ����װ��");
			         }else{destArr.push(copyequip); fromArr[i].num-=1;fullFillEquip(obj,copyequip.id,true);}
				 }
				 //���̵���ʣ�µķ�����תվ
			    
				 if(fromArr[i].num!=0){
				    var copyequip1=new equipZB();
				    copyequip1.id=fromArr[i].id;
				    copyequip1.num=fromArr[i].num;
					//������̵����תվ���Ѿ��и�װ����
				    if(isIdOfItemThere(storehouse.tempArr,copyequip1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip1.id){storehouse.tempArr[j].num+=copyequip1.num;}
						 }
				    }else{storehouse.tempArr.push(copyequip1);}
			    }
		  }else if(caSeNum==9){
			  //�۳�����ĵ���
              var itemMoney=dragNum*returnItemPrice(fromArr[i].id);
			  teamMoney-=itemMoney;
			  //��Ҫ��ĵ��߷��뱳��
			  var copyItem=new item();
			  copyItem.id=fromArr[i].id;
			  copyItem.num=dragNum;
			  if(isIdOfItemThere(destArr,copyItem.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyItem.id){destArr[j].num+=copyItem.num;}
					 }
			  }else{destArr.push(copyItem);}
			  //���̵���ʣ�µķ�����תվ
			  fromArr[i].num-=dragNum;
			  if(fromArr[i].num!=0){
				  var copyItem1=new item();
				  copyItem1.id=fromArr[i].id;
				  copyItem1.num=fromArr[i].num;
				  if(isIdOfItemThere(storehouse.tempArr,copyItem1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem1.id){storehouse.tempArr[j].num+=copyItem1.num;}
						 }
				  }else{storehouse.tempArr.push(copyItem1);}
			  }
		  }else if(caSeNum==10){
		      //�۳����������
              var equipMoney=dragNum*returnEquipPrice(fromArr[i].id);
			  teamMoney-=equipMoney;
			  //��Ҫ���װ������ֿ�
			  var copyequip=new equipZB();
			  copyequip.id=fromArr[i].id;
			  copyequip.num=dragNum;
			  //�ж���dextArr���Ƿ��и�ID����������
			  if(isIdOfItemThere(destArr,copyequip.id)){
				     for(var j=0;j<destArr.length;j++){
					     if(destArr[j].id==copyequip.id){destArr[j].num+=copyequip.num;}
					 }
			  }else{destArr.push(copyequip);}
			  //���̵���ʣ�µķ�����תվ
			  fromArr[i].num-=dragNum;
			  if(fromArr[i].num!=0){
				  var copyequip1=new equipZB();
				  copyequip1.id=fromArr[i].id;
				  copyequip1.num=fromArr[i].num;
				  if(isIdOfItemThere(storehouse.tempArr,copyequip1.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip1.id){storehouse.tempArr[j].num+=copyequip1.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip1);}
			  }
		  }
	  }else{//˵���������û�б�ѡ��
	      if(caSeNum==5){
		      //�����������
			  var copyItem=new item();
              copyItem.id=fromArr[i].id;
              copyItem.num=fromArr[i].num;
			  //�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
              if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
				     for(var j=0;j<storehouse.tempArr.length;j++){
					     if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
					 }
			  }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==6){
		        var copypowerID=fromArr[i];
			    storehouse.tempArr.push(copypowerID);
		  }else if(caSeNum==7){
			    var copyskillID=obj.skills[i];
			    storehouse.tempArr.push(copyskillID);
		  }else if(caSeNum==8){
			     var copyequip=new equipZB();
				  copyequip.id=fromArr[i].id;
				  copyequip.num=fromArr[i].num;
				  //�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
				  if(isIdOfItemThere(storehouse.tempArr,copyequip.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip.id){storehouse.tempArr[j].num+=copyequip.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip);}
		  }else if(caSeNum==9){
			      var copyItem=new item();
				  copyItem.id=fromArr[i].id;
				  copyItem.num=fromArr[i].num;
				  //�Ѹ��Ƶĵ��߷ŵ������additems�У�����ǵ��ߵĲֿ�
				  if(isIdOfItemThere(storehouse.tempArr,copyItem.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyItem.id){storehouse.tempArr[j].num+=copyItem.num;}
						 }
				  }else{storehouse.tempArr.push(copyItem);}
		  }else if(caSeNum==10){
			      var copyequip=new equipZB();
				  copyequip.id=fromArr[i].id;
				  copyequip.num=fromArr[i].num;
				  //�Ѹ��Ƶ������ŵ������addequips�У������׼���Ĳֿ�
				  if(isIdOfItemThere(storehouse.tempArr,copyequip.id)){
						 for(var j=0;j<storehouse.tempArr.length;j++){
							 if(storehouse.tempArr[j].id==copyequip.id){storehouse.tempArr[j].num+=copyequip.num;}
						 }
				  }else{storehouse.tempArr.push(copyequip);}
		  }
	  }
	  if(caSeNum==5){
		  if((i==storehouse.additems.length-1)&&tempp==00){break;}
		  else if((i==storehouse.addpowers.length-1)&&tempp==30){break;}
		  else if((i==storehouse.addequips.length-1)&&tempp==20){break;}
		  else if((i==storehouse.addskills.length-1)&&tempp==10){break;}
		  else if(i==storehouse.additems.length-1){break;}
		  }
	  else if(caSeNum==6){if(i==storehouse.addpowers.length-1){break;}}
	  else if(caSeNum==7){if(i==storehouse.addskills.length-1){break;}}
      else if(caSeNum==8){if(i==storehouse.addequips.length-1){break;}}
	  else if(caSeNum==9){if(i==store.items.length-1){break;}}
	  else if(caSeNum==10){if(i==store.equips.length-1){break;}}
	}
    //����תս�ĵ��߷Ż������
	if(caSeNum==5){
		if(tempp==00){clearArr(storehouse.additems);
		storehouse.additems=[].concat(storehouse.tempArr);}
		else if(tempp==20){clearArr(storehouse.addequips);
		storehouse.addequips=[].concat(storehouse.tempArr);}
		else if(tempp==10){clearArr(storehouse.addskills);
		storehouse.addskills=[].concat(storehouse.tempArr);}
		else if(tempp==30){clearArr(storehouse.addpowers);
		storehouse.addpowers=[].concat(storehouse.tempArr);}
		else{clearArr(storehouse.additems);
		storehouse.additems=[].concat(storehouse.tempArr);}
	}else if(caSeNum==6){
	    clearArr(storehouse.addpowers);
		storehouse.addpowers=[].concat(storehouse.tempArr);
	}else if(caSeNum==7){
		clearArr(storehouse.addskills);
		storehouse.addskills=[].concat(storehouse.tempArr);
	}else if(caSeNum==8){
		clearArr(storehouse.addequips);
		storehouse.addequips=[].concat(storehouse.tempArr);
	}else if(caSeNum==9){
	    clearArr(store.items);
		store.items=[].concat(storehouse.tempArr);
	}else if(caSeNum==10){
	    clearArr(store.equips);
		store.equips=[].concat(storehouse.tempArr);
	}
	dingzhukuangRight=[0,0,0,0,0,0];
	dragNum=0;
	clearArr(everything1);
	itemNumChange=false;
	sureToFX=false;
	clearArr(confirmArray);
	clearArr(storehouse.tempArr);
	if(caSeNum==5&&(tempp==00||tempp==10||tempp==20||tempp==30)){showCangKU(fromArr,tempp);}
	else {ZhengLi(obj,caSeNum);}
	
}
//�ֿ�ĺ���
var CKselect;//�ֿ��
function showCangKU(obj,tempp){

	   clearArr(shadowShow);
	   //ȫ���ĸ��ǲ�
	   var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	   shadowShow.push(shadow);
	   //����ͼƬ
	   DJZLBg =new picture(0,0,144, 48,561,495, CKZL);
	   shadowShow.push(DJZLBg);
	   //ѡ�е�ͼƬ
	   CKselect=new picture(0,0,173,64 ,116,45, CKSelect);
	   shadowShow.push(CKselect);
	   //4������
	   var title=new picture(0,0,DJZLBg.sx+40,DJZLBg.sy+20 ,469,24, titleOfCK);
	   shadowShow.push(title);
	   CloseImg = new picture(0,0,DJZLBg.sx + DJZLBg.swidth-28, DJZLBg.sy+2 / 3 * rpx-30, 25, 25, close);
	   shadowShow.push(CloseImg); 


if(tempp==20){
//	cangKuClick(x,y,storehouse.addequips,tempp);
	   	var tt=0;
	if(storehouse.addequips.length!=0){
	    for (var i = 0; i < storehouse.addequips.length; i++) {
		   for (var j = 0; j < equipArrays.length; j++) {
			   if (storehouse.addequips[i].id == equipArrays[j].id) {
				     var img1 = new Image();
                     img1.src = equipArrays[j].img;
                     var itemImg1 = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+tt*57, rpx, rpx, img1);
					 var s1 = "" +storehouse.addequips[i].num;
                     var num1 = new text(s1,0,0,DJZLBg.sx+78, DJZLBg.sy+119+tt*57, "rgb(255,255,255)", "bold 13px FangSong");
                     var name1 = new text(equipArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+tt*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");           
                     shadowShow.push(itemImg1);
					 shadowShow.push(num1);
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	CKselect.sx=173;drawBigMap();
}
if(tempp==00){
//	cangKuClick(x,y,storehouse.additems ,tempp);
		var t = 0;
    for (var i = 0; i < storehouse.additems.length; i++) {
        for (var j = 0; j < itemArrays.length; j++) {
            if (storehouse.additems[i].id == itemArrays[j].id) {
                if (storehouse.additems[i].num > 0) {
                	 var img = new Image();
                     img.src = itemArrays[j].img;
                     var itemImg = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+t*57, rpx, rpx, img);
                     var s = "" + storehouse.additems[i].num;
                     var num = new text(s,0,0,DJZLBg.sx+78,DJZLBg.sy+119+t*57, "rgb(255,255,255)", "bold 13px FangSong");
                     var name = new text(itemArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+t*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(itemImg);
                     shadowShow.push(num);
                     shadowShow.push(name);
                     t++;
                }
            }
        }
    }
	CKselect.sx=302;drawBigMap();
}

if(tempp==10){
//	cangKuClick(x,y,obj,tempp);
              var tt=0;
	if(storehouse.addskills.length!=0){
	    for (var i = 0; i < storehouse.addskills.length; i++) {
		   for (var j = 0; j < skillArrays.length; j++) {
			   if (storehouse.addskills[i]== skillArrays[j].id) {
				     var img1 = new Image();
                     img1.src = skillArrays[j].img;
                     var skillImg1 = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+tt*57, 50,50, img1);
                     var name1 = new text(skillArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+tt*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(skillImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	CKselect.sx=430;drawBigMap();
}

if(tempp==30){
//	cangKuClick(x,y,obj,tempp);
	var tt=0;
	if(storehouse.addpowers.length!=0){
	    for (var i = 0; i < storehouse.addpowers.length; i++) {
		   for (var j = 0; j < powerArrays.length; j++) {
			   if (storehouse.addpowers[i]== powerArrays[j].id) {
				     var img1 = new Image();
                     img1.src = powerArrays[j].img;
                     var powerImg1 = new picture(0,0,DJZLBg.sx+34,DJZLBg.sy+78+tt*57,50,50, img1);
                     var name1 = new text(powerArrays[j].name,0,0,DJZLBg.sx+113,DJZLBg.sy+108+tt*57, "rgb(255,255,255)", "bold 20px Microsoft Yahei");
                     shadowShow.push(powerImg1);			
                     shadowShow.push(name1);
					 tt++;
			   }
		   }
		}
	}
	CKselect.sx=559;drawBigMap();
}
	   drawArr(shadowShow);
	   cangKuShow=true;
	   bigMapoption=false;
}
//�����Ա����������Ϣ,temp������¼�ǵ�����ؼ�0��ŭ��1��װ��2
function teamMember(obj,temp){
   clearArr(shadowShow);
   //ȫ���ĸ��ǲ�
   var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
   shadowShow.push(shadow);
   //����ͼƬ
   DJZLBg =new picture(0,0,48, 48, 670,550, DYBJ);
   shadowShow.push(DJZLBg);
   shadowShow.push(DJZLBg);
   //���Ͻǵ�XX
   CloseImg = new picture(0,0,DJZLBg.sx + DJZLBg.swidth-30, DJZLBg.sy+2 / 3 * rpx-20, 2 / 3 * rpx, 2 / 3 * rpx, close);
   shadowShow.push(CloseImg);
   //�����ͷ��
   var hf = new Image();
   hf.src = obj.halfBody;
   var halfBody = new picture(0,0,DJZLBg.sx+80, DJZLBg.sy+50,200, 200, hf);
   shadowShow.push(halfBody);
   //���ҵļ�ͷ
   leftArrow = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx, DJZLBg.sy + 3 * rpx - 10, 38, 30, zjt);
   rightArrow = new picture(0,0,DJZLBg.sx + 11 / 2 * rpx + 18, DJZLBg.sy + 3 * rpx - 10, 38, 30, yjt);
   shadowShow.push(leftArrow);
   shadowShow.push(rightArrow);
   //����
   var name = new text(obj.name, 0,0,DJZLBg.sx+428 , DJZLBg.sy+80 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(name);
   //�ȼ�
   var lv = new text(obj.level + "  " + obj.EXP + "/" + obj.nextEXP,0,0, DJZLBg.sx +428,DJZLBg.sy+130, "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(lv);
   //�ƶ���
   var MOV=new text(obj.movement,0,0, DJZLBg.sx+155 , DJZLBg.sy+290 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(MOV);
   //�ٶ�
   var speed=new text(obj.speed,0,0,DJZLBg.sx+155 , DJZLBg.sy+330 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(speed);
   //������
   var DEF=new text(obj.DEF,0,0, DJZLBg.sx+155 , DJZLBg.sy+370 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(DEF);
   //HP
   var HP=new text(obj.HP,0,0, DJZLBg.sx+383, DJZLBg.sy+178 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(HP);
   //MP
   var MP=new text(obj.MP,0,0, DJZLBg.sx+545, DJZLBg.sy+178 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(MP);
   //SP
   var SP=new text(obj.SP,0,0, DJZLBg.sx+383, DJZLBg.sy+223 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(SP);
   //POW
   var POW=new text(obj.pow,0,0, DJZLBg.sx+545, DJZLBg.sy+223 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(POW);
   //ATK
   var ATK=new text(obj.ATK,0,0, DJZLBg.sx+500 , DJZLBg.sy+290 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(ATK);
   //������Χ
   var range=new text(obj.range,0,0, DJZLBg.sx+500, DJZLBg.sy+330 , "rgb(255,255,255)", "bold 25px KaiTi");
   shadowShow.push(range);
   //ŭ�����ؼ���װ����ͼƬ
   if(temp==0){
	   skill = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx - 3, DJZLBg.sy + 394, 110, 30, mj2);
	   power = new picture(0,0,skill.sx + skill.swidth - 2, DJZLBg.sy +394, 110, 30, nj1);
	   equip = new picture(0,0,power.sx + power.swidth - 2, DJZLBg.sy + 394, 110, 30, zb1);
   }
   else if(temp==1){
	   skill = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx - 3, DJZLBg.sy + 394, 110, 30, mj1);
	   power = new picture(0,0,skill.sx + skill.swidth - 2, DJZLBg.sy +394, 110, 30, nj2);
	   equip = new picture(0,0,power.sx + power.swidth - 2, DJZLBg.sy + 394, 110, 30, zb1);
   }else if(temp==2){
	   skill = new picture(0,0,DJZLBg.sx + 1 / 2 * rpx - 3, DJZLBg.sy + 394, 110, 30, mj1);
	   power = new picture(0,0,skill.sx + skill.swidth - 2, DJZLBg.sy +394, 110, 30, nj1);
	   equip = new picture(0,0,power.sx + power.swidth - 2, DJZLBg.sy + 394, 110, 30, zb2);
   }
   shadowShow.push(skill);
   shadowShow.push(power);
   shadowShow.push(equip);
 if(temp==0){
   for (var i = 0; i < 4; i++) {
       for (var j = 0; j < skillArrays.length; j++) {
           if (obj.skills[i] == skillArrays[j].id) {
                var img = new Image();
                img.src = skillArrays[j].img;
                var skillImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(skillArrays[j].name, 0,0,skillImg.sx + 2 / 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var mp = new text("MP:" + skillArrays[j].mp, 0,0,skillImg.sx + 3 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("�ɹ���:" + skillArrays[j].success + "%",0,0, skillImg.sx + 9 / 2 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("˵��:" + skillArrays[j].discripe,0,0, skillImg.sx + 7 * rpx, skillImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                shadowShow.push(skillImg);
                shadowShow.push(name);
                shadowShow.push(mp);
                shadowShow.push(suc);
                shadowShow.push(dis);
            }
        }
   }
 }else if(temp==1){
     for (var i = 0; i < obj.powers.length; i++) {
        for (var j = 0; j < powerArrays.length; j++) {
            if (obj.powers[i] == powerArrays[j].id) {
                var img = new Image();
                img.src = powerArrays[j].img;
                var powerImg = new picture(0,0,skill.sx, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(powerArrays[j].name,0,0, powerImg.sx + 2 / 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var p = new text("POW:" + powerArrays[j].p,0,0, powerImg.sx + 3 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,0,255)", "bold 20px cursive");
                var suc = new text("�ɹ���:" + powerArrays[j].success + "%",0,0, powerImg.sx + 9 / 2 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(255,0,0)", "bold 20px FangSong");
                var dis = new text("˵��:" + powerArrays[j].discripe,0,0, powerImg.sx + 7 * rpx, powerImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
                shadowShow.push(powerImg);
                shadowShow.push(name);
                shadowShow.push(p);
                shadowShow.push(suc);
                shadowShow.push(dis);
            }
        }
     }
 }else if(temp==2){
	 var tempp=false;
	for (var i = 0; i < obj.equips.length; i++) {
        for (var j = 0; j < equipArrays.length; j++) {
            if (obj.equips[i].id == equipArrays[j].id) {
                var img = new Image();
                img.src = equipArrays[j].img;
                var equipImg = new picture(0,0,skill.sx+100, skill.sy + 2 / 3 * rpx + i / 2 * rpx, 1 / 2 * rpx, 1 / 2 * rpx, img);
                var name = new text(equipArrays[j].name,0,0, equipImg.sx + 2 / 3 * rpx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi");
                var dis = new text("˵��:" + equipArrays[j].discripe,0,0, name.sx +100, equipImg.sy + 1 / 3 * rpx + 3, "rgb(0,255,0)", "bold 20px FangSong");
				if(equipArrays[j].type==1){ var shipin = new text("��Ʒװ��:",0,0, skill.sx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi"); shadowShow.push(shipin);}
                else if(equipArrays[j].type==0){
					if(!tempp){tempp=true;var lefthand = new text("����װ��:",0,0, skill.sx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi"); shadowShow.push(lefthand);}
					else{var righthand = new text("����װ��:",0,0, skill.sx, equipImg.sy + 1 / 3 * rpx + 3, "rgb(255,215,0)", "bold 20px KaiTi"); shadowShow.push(righthand);}
				}
				shadowShow.push(equipImg);
                shadowShow.push(name);
                shadowShow.push(dis);
            }
        }
     }
	  
 }
   drawArr(shadowShow);
   bigMapoption=false;
   DuiYuan=true;
}
//����ƶ�����Ӧ�ĵ��ߵ�ʱ����ʾ�õ��ߵĽ��which==0��ʾ�Ǳ����ڵĵ��߲���,which==1��ʾ���̵��ڵĵ��߲�����which==2��ʾ���̵��ڵ�׼������
function showItemGold(index,which){
	if(which==0){
	  var itemMoney=returnItemPrice(storehouse.additems[index].id);
	  var Money=new text(itemMoney,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money);
	}else if(which==1){
	  var itemMoney1=returnItemPrice(store.items[index].id);
	  var Money1=new text(itemMoney1,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money1);
	}else if(which==2){
	  var itemMoney2=returnEquipPrice(store.equips[index].id);
	  var Money2=new text(itemMoney2,0,0,DJZLBg.sx+400 ,DJZLBg.sy+498, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money2);
	}else if(which==3){
	  var itemMoney4=returnEquipPrice(storehouse.addequips[index].id);
	  var Money4=new text(itemMoney4,0,0,DJZLBg.sx+87 ,DJZLBg.sy+500, "rgb(255,255,255)", "bold 25px KaiTi");
	  everything2.push(Money4);
	}
}
//���ظõ��ߵĽ�Ǯ
function returnItemPrice(id){
  for(var i=0;i<itemArrays.length;i++){
     if(id==itemArrays[i].id){return itemArrays[i].gold;}
  }
  return false;
}
//���ظ�װ���Ľ�Ǯ
function returnEquipPrice(id){
  for(var i=0;i<equipArrays.length;i++){
     if(id==equipArrays[i].id){return equipArrays[i].gold;}
  }
  return false;
}
//������һ��
function nextLevel(){
  clearAll();
//  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  shumei=false;
  sureToFX=false;
  nextloading=true;
//  recoverSpirit();
  mapLevel++;
  count=1;
  handleNextStataChange();
  drawAll();
  drawAll();
  nextProgress();
  
}
//�ڽ�����һ��֮ǰ����ʾ��������ҹ����ˣ���õĽ�Ʒ����Щ
function nextGuanKaOpen(){
     clearArray(everything2);
     clearArray(everything1);
     clearArray(everything);
     clearArray(info);
	 nextloading=true;
	 IntoGuanKa=true;
	 //���ǲ�
	 var shadow=new rectangle(0,0,0,0,canvasWidth,canvasHeight,"rgba(0,0,0,0.7)");
	 shadowShow.push(shadow);
	 //����
	 var nextGuanKaBG = new picture(0,0,6 * rpx, 4 * rpx, 8 * rpx, 5 * rpx, infoShowBg);
	 shadowShow.push(nextGuanKaBG);
	 //����
	 var title = new text("���ؽ���", 0,0,nextGuanKaBG.sx +110, nextGuanKaBG.sy + 2 / 3 * rpx, "#000000", "bold 30px Microsoft Yahei");
	 shadowShow.push(title);
	 //ȷ����ť
	 ensure = new picture(0,0,nextGuanKaBG.sx +130 , nextGuanKaBG.sy +200, 2 * rpx, 8 / 15 * rpx, qd);
	 shadowShow.push(ensure);
	 recoverSpirit();
}
//��ʾ�ڼ��غ͵�ͼ����
function showMapName(){
	canvas.removeEventListener('click', cCheck, false);
    var roundString = "�� " + mapLevel + " ��   "+mapName;
	//drawAll();
	//drawAll();
//	drawAll();
    var roundRectangle = new rectangle(0, 4 * rpx,0, 4 * rpx, canvasWidth, 4 * rpx, "rgba(0,0,0,0.8)");
    var roundText = new text(roundString, (canvasWidth / 2) - 3 * rpx, 7* rpx - rpx / 2,(canvasWidth / 2) - 3 * rpx, 7* rpx - rpx / 2,"rgb(255,255,255)", "50px Ҷ����ë������");
    everything.push(roundRectangle);
    everything.push(roundText);
//	drawAll();
	setTimeout(function(){
		                  clearArray(everything);	  
						  if(mapLevel==1){
							  setTimeout(function(){
								  dialogShowFlag=true;
								  setTimeout(function(){canvas.addEventListener('click', cCheck, false);},1000);
								  dialogShow();}
							  ,300);
							  }
						  else{
						  roundShow();
						  setTimeout(function(){canvas.addEventListener('click', cCheck, false);},3500);
						  }
						   //drawAll();}
						  clearArray(everything2);}
			    ,2000);
	
}
