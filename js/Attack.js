/*
	��envent.js��cCheck()�������ã�ѡ����ȷ�ĵ��˽��й�����(att=true)�����������۳�����һ��Ѫ��
*/
//����ʹBOSS��ŭ������������
var powerNumber=2;
//BOSS�������������ؼ�
function Boss_skill_attacked(tIndex){
    var n = Math.floor(Math.random() * 100) + 1;
	//��BOSS���ؼ����ؼ�������й�������
	for (var i = 0; i < skillArrays.length; i++) {
         if (enemysArray[tIndex].skills[0] == skillArrays[i].id) {
            fl = skillArrays[i].func;
			skilltmp = skillArrays[i].mp;
			skillVar = skillArrays[i].skillVar;
			skillSuccess = skillArrays[i].success;
			effect = skillArrays[i].effect;
			skillName = skillArrays[i].name;
         }
    }
	
	//��������ɹ�
	if((n<skillSuccess)&&(skilltmp<=enemysArray[tIndex].MP)){
	   console.log("BOSS�����������ؼ�");
	   enemysArray[tIndex].MP -= skilltmp;
	   roleObj=rolesArray[rolesIndex];
       eval(fl + '(tIndex)');
	}
	else
	{//�������ʧ��
		console.log("����ʧ��");
	   rolesArray[rolesIndex].dy = 240;
	   if (judeEnd()) {
		   recoverSpirit();
		   end = true;
		   ai = true;
		   enemyRoundShow();
		   setTimeout(function() {
				enemysAction();
		   },2000);
	   }else{end=false;}
	}
	
}
//BOSS���������������ؼ�
function Boss_skill_attack(){
	var n = Math.floor(Math.random() * 100) + 1;
	console.log("�ؼ��������������   "+n);
	//��BOSS���ؼ����ؼ�������й�������
	for (var i = 0; i < skillArrays.length; i++) {
         if (enemysArray[enemyIndex].skills[0] == skillArrays[i].id) {
            fl = skillArrays[i].func;
			skilltmp = skillArrays[i].mp;
			skillVar = skillArrays[i].skillVar;
			skillSuccess = skillArrays[i].success;
			effect = skillArrays[i].effect;
			skillName = skillArrays[i].name;
         }
    }//for (var i = 0; i < skillArrays.length; i++) 
	console.log("skillSuccess   "+skillSuccess);
	if((n<skillSuccess)&&(skilltmp<=enemysArray[enemyIndex].MP)){
	   enemysArray[enemyIndex].MP -= skilltmp;
	   roleObj.HP -= skillVar;
       eval(fl + '(enemyIndex)');
	}else{
	 finish=true;
	}
}
//BOSS������������ŭ��
function Boss_power_attacked(tIndex){
	    powerNumber--;
	    console.log("powerNumber��   "+powerNumber);
	    var n = Math.floor(Math.random() * 100) + 1;
		console.log("ŭ���������n��   "+n);
		//��BOSS���ؼ���ŭ��������й�������
		for (var i = 0; i < powerArrays.length; i++) {
			 console.log("tIndex  "+enemysArray[tIndex].name);
			 if (enemysArray[tIndex].powers[0] == powerArrays[i].id) {
				fl = powerArrays[i].func;
				powertmp = powerArrays[i].p;
				powerVar = powerArrays[i].powerVar;
				powerSuccess = powerArrays[i].success;
				effect = powerArrays[i].effect;
				powerName = powerArrays[i].name;
			 }
		}
	    roleObj=rolesArray[rolesIndex];
		if((n<powerSuccess)&&(powertmp<=enemysArray[tIndex].pow)){
		   console.log("���㷢�������������ɹ� ");
		   enemysArray[tIndex].pow -= powertmp;
		   rolesArray[rolesIndex].HP -= powerVar;
		   console.log("powerSuccess��   "+powerSuccess);
		   eval(fl + '(tIndex)');
		}
		else
		{
		   if(powerNumber==0){
		      powerNumber=2;
			  console.log("ŭ����2�η�������");
			  bossPowerEnd=true;
		   }else{  console.log("ŭ��������ʧ��");bossPowerEnd=true;}
		}
	
	
}
//���setTimeout��������������
function _Boss_power_attacked(tIndex){
	return function(){Boss_power_attacked(tIndex);};
}
//BOSS��������������ŭ��
function BOSS_power_attack(){
	    //powerNumber������ʾBOSSŭ�����ķ���������������û�з����ɹ�
	    powerNumber--;
		console.log("powerNumber��   "+powerNumber);
		//����1--100�������
		var n = Math.floor(Math.random() * 100) + 1;
		console.log("ŭ���������n��   "+n);
		//��BOSS���ؼ���ŭ��������й�������
		for (var i = 0; i < powerArrays.length; i++) {
		     console.log("enemyIndex  "+enemyIndex);
			 if (enemysArray[enemyIndex].powers[0] == powerArrays[i].id) {
				fl = powerArrays[i].func;
				powertmp = powerArrays[i].p;
				powerVar = powerArrays[i].powerVar;
				powerSuccess = powerArrays[i].success;
				effect = powerArrays[i].effect;
				powerName = powerArrays[i].name;
			 }
		}

		if((n<powerSuccess)&&(powertmp<=enemysArray[enemyIndex].pow)){
		   console.log("���㷢�������������ɹ� ");
		   enemysArray[enemyIndex].pow -= powertmp;
		   roleObj.HP -= powerVar;  
		   eval(fl + '(enemyIndex)');  
		}
		else
		{//�������������ŭ�����ˣ�������û�гɹ�
		  if(powerNumber==0){
		      powerNumber=2;
			  console.log("ŭ����2�η�������");
			  bossPowerEnd=true;
		  }else{
			console.log("����ʧ��");
		    bossPowerEnd=true;
		  }
		 
		}
	
}

//ħץ�޵м���
function PMoZhuaWuDi(bossId){
	 console.log("��ħץ�޵�����");
	 var tVar1 = Math.floor(rpx * roleObj.HP / roleObj.fullHP) + 1;
     var hp = new rectangle(roleObj.sx, roleObj.sy - 9,roleObj.sx, roleObj.sy - 9, tVar1, 5, "rgb(0,255,0)");
     var hpBox = new rectangle(roleObj.sx, roleObj.sy - 10,roleObj.sx, roleObj.sy - 10, rpx, 7, "rgb(0,0,0)");
     var e = new Image();
     e.src = effect;
     var powerShow = new pic(roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15,roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
     var attackText = new text("-" + powerVar,roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
     var h = new Image();
     h.src = enemysArray[bossId].halfBody;
     var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
	 attackShow.push(hs);
//	 drawAll();
	 //���ǲ�
	 FuGaiCeng(enemysArray[bossId],roleObj);
	 //ħץ�޵�4����
     var t2 = setInterval(function() {
         var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
         attackShow.push(sn);
   //      drawAll();
         countInterval++;
         if (countInterval == powerName.length + 1) {
               countInterval = 0;
               clearInterval(t2);
               clearArray(attackShow);
               finish = true;
          }
		}, 
	 500);//t2���� 
		 console.log("��ħץ�޵�����1");
	 var t3=setInterval(function(){
      if (finish) {	
		  clearInterval(t3);
          finish = false;
          attackAction(enemysArray[bossId]);
          flicker(roleObj);
          attackShow.push(attackText);
          attackShow.push(powerShow);
		  var t4 = setInterval(function() {
				attackText.mapY--;
				 if (powerShow.dx < 4900) {powerShow.dx += 350; } 
				 else {powerShow.dx = 0;}
				// drawAll();
				 if (attackText.mapY == roleObj.mapY) {
					   clearInterval(t4);
					   //enemysArray[bossId].dy = 240;
					   clearArray(attackShow);
				  }
			},
		  50);//t4����
		  console.log("��ħץ�޵�����2   "+hp.swidth);
		  if (hp.swidth > 0) {
			  hpShow.push(hpBox);
			  hpShow.push(hp);
              var tVar2 = Math.floor(rpx * powerVar / roleObj.fullHP) + 1;
			  console.log("��ħץ�޵�����3");
              var t5 = setInterval(function() {
                 hp.swidth--;
                 countInterval++;
        //         drawAll();
				  console.log("��ħץ�޵�����4");
                 if (countInterval == tVar2 || hp.swidth <= 0) {
					  console.log("��ħץ�޵�����5");
                    countInterval = 0;
                    clearInterval(t5);
                    clearArray(hpShow);
					clearArray(shadowShow);
					bossPowerEnd=true;
					console.log("ŭ������������");
			     }
			   },
			  50);//t5����
          }else{//�ҷ�����
			  	clearArray(shadowShow);
				bossPowerEnd=true;
		  }
	  }//finish
     });//t3
	
}
//���������
function SPengHuoLong(bossId){
  //��ʾ������
  var tVar1 = Math.floor(rpx * roleObj.HP / roleObj.fullHP) + 1;
  var hp = new rectangle(roleObj.sx, roleObj.sy - 9,roleObj.sx, roleObj.sy - 9, tVar1, 5, "rgb(0,255,0)");
  var hpBox = new rectangle(roleObj.sx, roleObj.sy - 10,roleObj.sx, roleObj.sy - 10, rpx, 7, "rgb(0,0,0)");
  var e = new Image();
  e.src = effect;
  var skillShow = new pic(roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15,roleObj.mapX - rpx - 6, roleObj.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
  var attackText = new text("-" + skillVar,roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, roleObj.mapX + rpx / 4, roleObj.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
  var h = new Image();
  h.src = enemysArray[bossId].halfBody;
  var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
  attackShow.push(hs);
//  drawAll();
  //���������
  var t2 = setInterval(function() {
      var sn = new text(skillName.charAt(countInterval),  hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx,hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
      attackShow.push(sn);
  //    drawAll();
      countInterval++;
      if (countInterval == skillName.length + 1) {
           countInterval = 0;
           clearInterval(t2);
           clearArray(attackShow);
           finish = true;
       }
     },
  500);//t2
  var t3=setInterval(function(){
      if (finish) {
	        clearInterval(t3);
            finish = false;
            attackAction(enemysArray[bossId]);
            flicker(roleObj);
            attackShow.push(attackText);
            attackShow.push(skillShow);
			var t4 = setInterval(function() {
                     attackText.mapY--;
                     if (skillShow.dx < 4900) {
                          skillShow.dx += 350;
                     } else {
                          skillShow.dx = 0;
                     }
         //            drawAll();
                    if (attackText.mapY ==roleObj.mapY) {
                         clearInterval(t4);
                         enemysArray[bossId].dy = 240;
                         clearArray(attackShow);
					     //finish=true;
                      }
                      },
            50);//t4
	        if (hp.swidth > 0) {
                hpShow.push(hpBox);
                hpShow.push(hp);
                var tVar2 = Math.floor(rpx * skillVar / roleObj.fullHP) + 1;
                var t5 = setInterval(function() {
                          hp.swidth--;
                          countInterval++;
           //               drawAll();
                          if (countInterval == tVar2 || hp.swidth <= 0) {
                              countInterval = 0;
                              clearInterval(t5);
                              clearArray(hpShow);
							  finish=true;
                          }
                       },
                50);//t5
            }// if (hp.swidth > 0) 
	  }//finish
  });//t3
  
 
}

function PSoulAttack() {
	//������˵��±�
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//�ҷ�����ͨ�����з�
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]); //1��λ���ҷ�����ͨ�����з�
    
	//���ҷ�����ͨ�����з�����
    att_end = setInterval(function() {console.log("�ҷ���ɫ��ͨ�������˺��finish��"+finish+"   ");
        if (finish) {//1��λ������finish=true��4��λ
            finish = false;
            clearInterval(att_end);
			//������˻�����
            if (enemysArray[tIndex].HP > 0) {
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);//2��λ,������˻����ţ�������ͨ�����ҷ�
                var t1 = setInterval(function() {
                    if (finish) {//2��λ������finish=true��3��λ
                        finish = false;
                        clearInterval(t1);
						//����ҷ�������
                        if (rolesArray[rolesIndex].HP > 0) {
                            var tVar1 = Math.floor(rpx * enemysArray[tIndex].HP / enemysArray[tIndex].fullHP) + 1;
                            var n = Math.floor(Math.random() * 100) + 1; //����1---100�����
							//var n=100;
                            if (n <= powerSuccess) { //�����<ŭ���ɹ���
								console.log("����ŭ�����ɹ�");
                    //            var hp = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                    //            var hpBox = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
                                var hp = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                                var hpBox = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
								var e = new Image();
                                e.src = effect;
                                var powerShow = new pic(enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15,enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
                                var attackText = new text("-" + powerVar, enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2,enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
                                var h = new Image();
                                h.src = rolesArray[rolesIndex].halfBody;
                                var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
								attackShow.push(hs);
								//���ǲ�
								FuGaiCeng(enemysArray[tIndex],rolesArray[rolesIndex]);
                                var t2 = setInterval(function() {
                                    var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
                                    attackShow.push(sn);
                                    //drawAll();
                                    countInterval++;
                                    if (countInterval == powerName.length + 1) {
                                        countInterval = 0;
                                        clearInterval(t2);
                                        clearArray(attackShow);
                                        finish = true;
                                    }
								}, 
								500);//t2����
								var t3 = setInterval(function() {
                                    if (finish) {
                                        clearInterval(t3);
                                        finish = false;
                                        attackAction(rolesArray[rolesIndex]);
                                        flicker(enemysArray[tIndex]);
                                        attackShow.push(attackText);
                                        attackShow.push(powerShow);
                                        var t4 = setInterval(function() {
											attackText.mapY--;
                                            if (powerShow.dx < 4900) {powerShow.dx += 350; } 
											else {powerShow.dx = 0;}
                                           // drawAll();
                                            if (attackText.mapY== enemysArray[tIndex].mapY) {
                                                clearInterval(t4);
                                                rolesArray[rolesIndex].dy = 240;
                                                clearArray(attackShow);
												finish=true;
                                            }
                                        },
                                        50);//t4����
                                        if (hp.swidth > 0) {
                                            hpShow.push(hpBox);
                                            hpShow.push(hp);
                                            var tVar2 = Math.floor(rpx * powerVar / enemysArray[tIndex].fullHP) + 1;
                                            var t5 = setInterval(function() {
                                                hp.swidth--;
                                                countInterval++;
                                              //  drawAll();
                                                if (countInterval == tVar2 || hp.swidth == 0) {
                                                    countInterval = 0;
                                                    clearInterval(t5);
                                                    clearArray(hpShow);
													clearArray(shadowShow);
													
                                                }
                                            },
                                            50);//t5����
                                        }//  if (hp.swidth > 0) ����
										var tb=setInterval(function(){
											if (finish){
												finish=false;
												clearInterval(tb);
												enemysArray[tIndex].HP -= powerVar;
												if (enemysArray[tIndex].HP <= 0) {
													deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
													att_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(att_end);			
															if (judeEnd()) 
															{   //---�ָ�������---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}
															else{end=false;}
														}
													});
												}
												else{
														 if (judeEnd()){
																   recoverSpirit();
																   enemyRoundShow();
																   end = true;
																   ai = true;
																   setTimeout(enemysAction, 500);
																 }
														 else{end=false;}	
												}
											}
										});//tb����
                                       // drawAll();
                                    }
                                });//t3����
                            } 
							//��������������>powerSuccess,����ʧ��
							else{
								console.log("ŭ��ʹ��ʧ��");
                                failAlert("ŭ��ʹ��ʧ�ܣ�", rolesArray[rolesIndex]);
									rolesArray[rolesIndex].dy = 240;
									if (judeEnd()) {
										//---�ָ�������---
										 recoverSpirit();
										//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
									}
									else{ end=false;}
                            }
                        } 
						//����ҷ�HP<0,����
						else {
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//---�ָ�������---
											 recoverSpirit();
											//-----------
											enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } 
									else {game_over_page();}
                                }
                            });//����
                        }
                    }//3��λ����
                });//t1����
            }
			//��������
			else {
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//---�ָ�������---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        //drawAll();
                    }
                });//t8����
            }
        }//4��λ����
    });//t����
}
//--------------------------------------------------------------------------------------------------------------
function SSoulKill() {
	//�ҵ����˵��±�
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//�ҷ���ͨ��������
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]);
	//���ҷ���ͨ�������˽�������
    att_end = setInterval(function() {
	   console.log("���ҷ���ͨ�������˽�������");
        if (finish) {
            finish = false;
            clearInterval(att_end);
			//������˻�����
            if (enemysArray[tIndex].HP > 0) {
				//������ͨ�����ҷ�
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);
				//�Ե�����ͨ�����ҷ���������
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
						//����ҷ�������
                        if (rolesArray[rolesIndex].HP > 0) {
							//���1---100�������
                            var n = Math.floor(Math.random() * 100) + 1;
							//�����ؼ�
                            if (n <= skillSuccess) {	
                                var tVar1 = Math.floor(rpx * enemysArray[tIndex].HP / enemysArray[tIndex].fullHP) + 1;
                                var hp = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                                var hpBox = new rectangle(enemysArray[tIndex].mapX, enemysArray[tIndex].mapY - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
                       //         var hp = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 9, tVar1, 5, "rgb(0,255,0)");
                       //         var hpBox = new rectangle(enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10,enemysArray[tIndex].sx, enemysArray[tIndex].sy - 10, rpx, 7, "rgb(0,0,0)");
                                var e = new Image();
                                e.src = effect;
                                var skillShow = new pic(enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15,enemysArray[tIndex].mapX - rpx - 6, enemysArray[tIndex].mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
                                var attackText = new text("-" + skillVar, enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2,enemysArray[tIndex].mapX + rpx / 4, enemysArray[tIndex].mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
                                var h = new Image();
                                h.src = rolesArray[rolesIndex].halfBody;
                                var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
								attackShow.push(hs);
                                //drawAll();
                                var t2 = setInterval(function() {
                                    var sn = new text(skillName.charAt(countInterval),hs.sx -mapMovX+ hs.swidth + countInterval * rpx, hs.sy -mapMovY+ hs.sheight / 2 + rpx, hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(153,50,204)", "bold 40px KaiTi");
                                    attackShow.push(sn);
                                   // drawAll();
                                    countInterval++;
                                    if (countInterval == skillName.length + 1) {
                                        countInterval = 0;
                                        clearInterval(t2);
                                        clearArray(attackShow);
                                        finish = true;
                                    }
                                },
                                500);
								var t3 = setInterval(function() {
                                    if (finish) {
                                        clearInterval(t3);
                                        finish = false;
                                        attackAction(rolesArray[rolesIndex]);
                                        flicker(enemysArray[tIndex]);
                                        attackShow.push(attackText);
                                        attackShow.push(skillShow);
                                        var t4 = setInterval(function() {
                                            attackText.mapY--;
                                            if (skillShow.dx < 4900) {
                                                skillShow.dx += 350;
                                            } else {
                                                skillShow.dx = 0;
                                            }
                                           // drawAll();
                                            if (attackText.mapY == enemysArray[tIndex].mapY) {
                                                clearInterval(t4);
                                                rolesArray[rolesIndex].dy = 240;
                                                clearArray(attackShow);
												finish=true;
                                            }
                                        },
                                        50);
                                        if (hp.swidth > 0) {
                                            hpShow.push(hpBox);
                                            hpShow.push(hp);
                                            var tVar2 = Math.floor(rpx * skillVar / enemysArray[tIndex].fullHP) + 1;
                                            var t5 = setInterval(function() {
                                                hp.swidth--;
                                                countInterval++;
                                               // drawAll();
                                                if (countInterval == tVar2 || hp.swidth <= 0) {
                                                    countInterval = 0;
                                                    clearInterval(t5);
                                                    clearArray(hpShow);
                                                }
                                            },
                                            50);
                                        }
										att_end=setInterval(function (){
											if (finish){
												finish=false;
												clearInterval(att_end);
												enemysArray[tIndex].HP -= skillVar;
												if (enemysArray[tIndex].HP <= 0) {
													deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
													att_end = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(att_end);
															if (judeEnd()) {
																//---�ָ�������---
															    recoverSpirit();
																//-----------
															  enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}
														}
													});
												}else{if (judeEnd()) {
													          	//---�ָ�������---
															    recoverSpirit();
																//-----------
																enemyRoundShow();
																end = true;
																ai = true;
																setTimeout(enemysAction, 500);
															}else{ end=false;}}
											}
										});
                                       
                                        //drawAll();
                                    }
                                });
                            } else
							//�ؼ�����ʧ��
							{
                                failAlert("�ؼ�ʹ��ʧ�ܣ�", rolesArray[rolesIndex]);
                                rolesArray[rolesIndex].dy = 240;
                                if (judeEnd()) {
								//---�ָ�������---
								 recoverSpirit();
								//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
                                }else{end=false;}
                            }
                        } else 
						//����ҷ�����
						{
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
												//---�ָ�������---
												 recoverSpirit();
												//-----------
												enemyRoundShow();
                                            end = true;
                                            ai = true;
                                            enemysAction();
                                        }else{end=false;}
                                    } else {
                               
									 game_over_page();
                                    }
                                }
                            });
                        }
                        //end=false;
                        //drawAll();
                    }
                });
            } else
			//�����������
			{
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
                        if (judeEnd()) {
								//---�ָ�������---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            enemysAction();
                        }else{end=false;}
                        //drawAll();
                    }
                });
            }
        }
    });
}
//------------------------------------------------------------------------------------------------------------------------------------
function normalAttack(a, b) {//a����b
	//��ͨ����������
    putongattack.volume=0.1;
	//������ͨ����
	putongattack.play();
	//��ȡ�����
    var n = Math.floor(Math.random() * 100) + 1; 
	//����ʧ���� 
    var x = a.errorRate; 
	//˫����������
    var y = a.doubleCRI; 
	//������������
    var z = a.tripleCRI;
	//����һ�²������˺�ֵ
    var hurt; 
	//Ѫ������
    var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
    var attackText = new text("miss!", b.mapX + rpx / 4,b.mapY + rpx / 2,b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
    var hp = new rectangle(b.mapX, b.mapY- 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
    var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
	//��̬�Ĺ���Ч��
    attackAction(a); 
	//ʹ����������һ��
    flicker(b);
	//-------------------------------------������ŭ����----------------------
    var m1 = Math.floor(Math.random() * 5) + 1; //��ȡ1---6�������,���ҷ��õ�
	var m2 = Math.floor(Math.random() * 5) + 1; //��ȡ1---6�������,���з�BOSS�õ�
	//--------------------------------------������ŭ����----------------------
    if ((n <= x)||(a instanceof enemyInfo )&&((b instanceof roleInfo)&&(b.spiritShanBi==1)) ){//-���ܹ��ܵ�ģ��-����ҷ������ܹ����ˣ������˹����ҷ�ʱ����������--
		hurt = 0; //��������������С������ʧ���ʣ�����MISS��
		if((a instanceof roleInfo)&&(a.spiritJueSha==1)){
			a.spiritJueSha=0;
		}else
		if((a instanceof enemyInfo )&&(b instanceof roleInfo)&&(b.spiritShanBi==1)){
		   b.spiritShanBi=0;
		   var js=new spirit();
				js.id=4;
				js.num=1;
				b.spirits.splice(3,0,js );//�ӻ��������������
				console.log("����������������������");
		}
	}
    else {
        //----------------------ŭֵ��������--------------------------------------
		//�ҷ���з���С��
		if((a instanceof roleInfo )&&(b instanceof enemyInfo)&&(b.type==0)){
			if(a.pow<a.fullPow){
				a.pow+=m1;
				if(a.pow>=a.fullPow){a.pow=a.fullPow;}
				}
		}else
		//�ҷ���з�BOSS
		if((a instanceof roleInfo )&&(b instanceof enemyInfo)&&(b.type==1)){
		   if(a.pow<a.fullPow){ 
			   a.pow+=m1;
			   if(a.pow>=a.fullPow){a.pow=a.fullPow;}
			}
		   if(b.pow<b.fullPow){
		       b.pow+=m2;
			   if(b.pow>=b.fullPow){b.pow=b.fullPow;}

		   }
		}else
		//�з�С�����ҷ�
		if((a instanceof enemyInfo)&&(a.type==0)&&(b instanceof roleInfo)){
		  if(b.pow<b.fullPow){
		   b.pow+=m1;
		   if(b.pow>=b.fullPow){b.pow=b.fullPow;}
		  }
		 
		  //console.log("�з�С�����ҷ�,�ҷ���ŭֵ"+m1);
		}else
		//�з�BOSS���ҷ�
		if((a instanceof enemyInfo)&&(a.type==1)&&(b instanceof roleInfo)){
		    if(b.pow<b.fullPow){
				b.pow+=m1;
				if(b.pow>=b.fullPow){b.pow=b.fullPow;}
			}
			if(a.pow<a.fullPow){
		       a.pow+=m2;
			   if(a.pow>=a.fullPow){a.pow=a.fullPow;}
			}
		}
        //----------------------ŭֵ�������ӽ���--------------------------------------
		//���������������ڡ�����ʧ���� ������ʧ���� +˫���������ʡ�
		if (n > x && n <= x + y) {
			//�����ɱ����ɱ�������ˣ�����ɱ���Ǿ�ɱ
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 	if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//��ɾ���ľ�ɱ�ӻ�a.spirits����
					var js=new spirit();
					js.id=2;
					js.num=1;
					//�ӻؾ�ɱ���������
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
			  	var js=new spirit();
				js.id=3;
				js.num=1;
				//�ӻ���ɱ���������
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 6; 
				attackText.name = "Crit:-" + hurt;
			}else
			//��Ϊʹ�þ�ɱ��ɵ�
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//��ɾ���ľ�ɱ�ӻ�a.spirits����
				var js=new spirit();
				js.id=2;
				js.num=1;
				//�ӻؾ�ɱ���������
				a.spirits.splice(1,0,js );
			    hurt = (a.ATK - b.DEF) * 4; //4������
				attackText.name = "Crit:-" + hurt;
			}else
			//��ͨ��2������
			{
				hurt = (a.ATK - b.DEF) * 2; //2������
				attackText.name = "Crit:-" + hurt;
		    }	
        } else 
		//���������������ڡ�����ʧ���� ������ʧ���� +˫����������+�����������ʡ�
		if (n > x + y && n <= x + y + z) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 		if(a.spiritJueSha==1){
						a.spiritJueSha=0;
						//��ɾ���ľ�ɱ�ӻ�a.spirits����
						var js=new spirit();
						js.id=2;
						js.num=1;
						//�ӻؾ�ɱ���������
						a.spirits.splice(1,0,js );
					}
			    a.spiritSheSha=0;
			    var js=new spirit();
				js.id=3;
				js.num=1;
				//�ӻ���ɱ���������
				a.spirits.splice(2,0,js );
				//��Ϊͬʱʹ���˾�ɱ����ɱ����ʹ������ɱ
                hurt = (a.ATK - b.DEF) * 9;
				attackText.name = "Crit:-" + hurt;
			}else
			if(a.spiritJueSha==1){//��Ϊʹ�þ�ɱ��ɵ�
				a.spiritJueSha=0;
				//��ɾ���ľ�ɱ�ӻ�a.spirits����
				var js=new spirit();
				js.id=2;
				js.num=1;
				a.spirits.splice(1,0,js );//�ӻؾ�ɱ���������
				
			    hurt = (a.ATK - b.DEF) * 6; //6������
				attackText.name = "Crit:-" + hurt;
			}else{
				hurt = (a.ATK - b.DEF) * 3; //3������
				attackText.name = "Crit:-" + hurt;
		    }
        } else
		if (n > x + y + z && n <= 100) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
				if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//��ɾ���ľ�ɱ�ӻ�a.spirits����
					var js=new spirit();
					js.id=2;
					js.num=1;
					//�ӻؾ�ɱ���������
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
				var js=new spirit();
				js.id=3;
				js.num=1;
				//�ӻ���ɱ���������
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 3; //2������
				attackText.name = "Crit:-" + hurt;
			}else
			//��Ϊʹ�þ�ɱ��ɵ�
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//��ɾ���ľ�ɱ�ӻ�a.spirits����
				var js=new spirit();
				js.id=2;
				js.num=1;
				//�ӻؾ�ɱ���������
				a.spirits.splice(1,0,js );
				recoverSpirit();
			    hurt = (a.ATK - b.DEF) * 2; //2������
				attackText.name = "Crit:-" + hurt;
			}
			else{
				 //��ͨ����
				hurt = a.ATK - b.DEF;
				attackText.name = "-" + hurt;
			}
        }
	}

    var tVar2 = Math.floor(rpx * hurt / b.HP) + 1;
    b.HP -= hurt;
    attackShow.push(attackText);

    var at1 = setInterval(function() {
        attackText.mapY--;
   //     drawAll();
        if (attackText.mapY == b.mapY) {
            clearInterval(at1);
            finish = true;
            clearArray(attackShow);
        }
    },
    50);
    if (hurt != 0 && hp.swidth > 0) {
        hpShow.push(hpBox);
        hpShow.push(hp);
        var at2 = setInterval(function() {
            hp.swidth--;
            countInterval++;
//            drawAll();
            if (countInterval == tVar2 || hp.swidth <= 0) {
                countInterval = 0;
                clearInterval(at2);
                clearArray(hpShow);
            }
        },
        50);
    }
}
//---------------------------------------------------------------------
function clearArray(arr) {
    while (arr.length > 0) arr.pop();
   // drawAll();
}
function clearArr(arr) {
    while (arr.length > 0) arr.pop();
}
//----------------��2��------------------------------------------------------
function flicker(obj) {
    var tw = obj.sw;
    var th = obj.sh;
    function a() {
        obj.sw = tw;
        obj.sh = th;
       // drawAll();
    }
    function b() {
        obj.sw = 0;
        obj.sh = 0;
       // drawAll();
    }
    b();
    setTimeout(a, 100);
    setTimeout(b, 200);
    setTimeout(a, 300);

}
//------------------------------��̬�Ĺ���--------------------------------
function attackAction(obj) {
    obj.dy = 192;
    function a() {
        obj.dx = 0;
       // drawAll();
    }
    function b() {
        obj.dx = 48;
        //drawAll();
    }
    function c() {
        obj.dx = 0;
        obj.dy = 0;
       // drawAll();
    }
    b();
    setTimeout(a, 100);
    setTimeout(b, 200);
    setTimeout(a, 300);
    setTimeout(c, 400);
}
//------------------------------------------------------------------------------
function deadEvent(objAttack,objDead) {
	clearArray(everything2);
	//����������ǵ������͵�
	if(objDead instanceof enemyInfo){
		//����ȫ�ӵ�Ǯ
		teamMoney=teamMoney+objDead.money;
		roleUpIndex=objAttack.id-1;
		getSomething("��Ǯ+"+objDead.money,objAttack);
		getSomething2("����+"+objDead.EXP,objAttack);
        //�����ؼ�ŭ��
		if(objDead.skills.length>0 || objDead.powers.length>0)
			{
			for(var i=0;i<objDead.skills.length;i++)
				objAttack.skills.push(objDead.skills[i]);			
			//for(var j=0;j<objDead.powers.length;j++)
			   // objAttack.powers.push(objDead.powers[j]);
			}
		//���Ǿ���+���˵ľ���
		rolesArray[roleUpIndex].EXP=parseInt(objDead.EXP)+parseInt(rolesArray[roleUpIndex].EXP);
		//������ǵ�ǰ�������һ�ȼ��ľ���ֵ>=,requestLevel()
	    if(rolesArray[roleUpIndex].EXP>=rolesArray[roleUpIndex].nextEXP){requestLevel();}
	 }
	else{
		deadArray.push(objDead);
	}
    var dt = setInterval(function() {
        objDead.sh--;
        objDead.dh--;
        //alert(finish);
        if (objDead.sh == 0) {
            clearInterval(dt);
          
            objDead.mapX = 2496;
            objDead.mapY = 0;
			objDead.dy=240;
			if(levelUpOk){
				aftLevelEvent(objAttack);             
			}
			else{
					if(isEnemyAllDead()&&(mapLevel==1||mapLevel==2||mapLevel==4||mapLevel==5||mapLevel==6||mapLevel==7||mapLevel==8||mapLevel==12||mapLevel==9||mapLevel==10)){
		                enemyTurn.pause();
						clearInterval(att_end);
						nextGuanKaOpen();
					}else if(isBossDead()&&mapLevel==3){//&&mapLevel==9&&mapLevel==10
						enemyTurn.pause();
               	        clearInterval(att_end);
				        nextGuanKaOpen();
						}
					else {finish=true;}
				}		
        }
      //  drawAll();
    },
    80);
}