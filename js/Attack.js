/*
	ÓÉenvent.jsÖÐcCheck()º¯Êýµ÷ÓÃ£¬Ñ¡ÔñÕýÈ·µÄµÐÈË½øÐÐ¹¥»÷ºó(att=true)´¥·¢º¯Êý£¬¿Û³ýµÐÈËÒ»¶¨ÑªÁ¿
*/


//BOSS±»¹¥»÷£¬·¢¶¯ÃØ¼¼
function Boss_skill_attacked(tIndex){
    var n = Math.floor(Math.random() * 100) + 1;
	//°ÑBOSSµÄÃØ¼¼ºÍÃØ¼¼Êý×é½øÐÐ¹ØÁªÆðÀ´
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
	
	//Èç¹û·¢¶¯³É¹¦
	if((n<skillSuccess)&&(skilltmp<=enemysArray[tIndex].MP)){
	   console.log("BOSS±»¹¥»÷·¢¶¯ÃØ¼¼");
	   enemysArray[tIndex].MP -= skilltmp;
	   roleObj=rolesArray[rolesIndex];
       eval(fl + '(tIndex)');
	}
	else
	{//Èç¹û·¢¶¯Ê§°Ü
		console.log("·¢¶¯Ê§°Ü");
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
//BOSSÖ÷¶¯¹¥»÷£¬·¢¶¯ÃØ¼¼
function Boss_skill_attack(){
	var n = Math.floor(Math.random() * 100) + 1;
	console.log("ÃØ¼¼¹¥»÷µÄËæ»úÊýÊÇ   "+n);
	//°ÑBOSSµÄÃØ¼¼ºÍÃØ¼¼Êý×é½øÐÐ¹ØÁªÆðÀ´
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

function BossPowerAttacked(a,b){
	console.log("进入BOSS的怒攻击");
	for (var i = 0; i < powerArrays.length; i++) {		     
			if (a.powers[0] == powerArrays[i].id) {
				fl = powerArrays[i].func;
				powertmp = powerArrays[i].p;
				powerVar = powerArrays[i].powerVar;
				powerSuccess = powerArrays[i].success;
				effect = powerArrays[i].effect;
				powerName = powerArrays[i].name;
			}
	}
	//var n = Math.floor(Math.random() * 100) + 1;
	var n=0;
    if((n<powerSuccess)&&(powertmp<=a.pow)){
           console.log("开始调用怒攻击");	
            		   
		   eval(fl+"(a,b)");  
	}
}

function PMoZhuaWuDi(a,b){//a attack b
	var countpowerNumber=2;
    console.log("into mozhuawudi");	
	function realMoZhuaWuDi(a,b){
	   		
           countpowerNumber--;

           a.pow -= powertmp;
		   b.HP -= powerVar;  

		   var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
           var hp = new rectangle(b.sx, b.sy - 9,b.sx, b.sy - 9, tVar1, 5, "rgb(0,255,0)");
           var hpBox = new rectangle(b.sx, b.sy - 10,b.sx, b.sy - 10, rpx, 7, "rgb(0,0,0)");
           var e = new Image();
           e.src = effect;
           var powerShow = new pic(b.mapX - rpx - 6, b.mapY - rpx - 15,b.mapX - rpx - 6, b.mapY - rpx - 15, 3 * rpx, 3 * rpx, 0, 0, 350, 350, e);
	       var attackText = new text("-" + powerVar,b.mapX + rpx / 4, b.mapY + rpx / 2, b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
	       var h = new Image();
	       h.src = a.halfBody;
	       var hs = new picture(48*5-mapMovX, 48*4-mapMovY,48*5-mapMovX, 48*4-mapMovY, 4 * rpx, 4 * rpx, h);
		   attackShow.push(hs);

		   FuGaiCeng(a,b);

		    var t2 = setInterval(function() {
	         var sn = new text(powerName.charAt(countInterval), hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx,hs.sx-mapMovX + hs.swidth + countInterval * rpx, hs.sy-mapMovY + hs.sheight / 2 + rpx, "rgb(255,255,255)", "bold 40px KaiTi");
	         attackShow.push(sn);
	         countInterval++;
	         if (countInterval == powerName.length + 1) {
	               countInterval = 0;
	               clearInterval(t2);
	               clearArray(attackShow);
	               finish = true;
	          }
		    }, 500);//t2½
            
            var t3=setInterval(function(){
                if (finish) {	
				  clearInterval(t3);
		          finish = false;
		          attackAction(a);
		          flicker(b);
		          attackShow.push(attackText);
		          attackShow.push(powerShow);
				  var t4 = setInterval(function() {
						attackText.mapY--;
						 if (powerShow.dx < 4900) {powerShow.dx += 350; } 
						 else {powerShow.dx = 0;}
						
						 if (attackText.mapY == b.mapY) {
							   clearInterval(t4);
							   clearArray(attackShow);
						  }
				  },50);//t4

                  if (hp.swidth > 0) {
			          hpShow.push(hpBox);
			          hpShow.push(hp);
                      var tVar2 = Math.floor(rpx * powerVar / b.fullHP) + 1;
                      var t5 = setInterval(function() {
	                      hp.swidth--;
	                      countInterval++;
	       				  if (countInterval == tVar2 || hp.swidth <= 0) {					  
	                        countInterval = 0;
	                        clearInterval(t5);
	                        clearArray(hpShow);
						    clearArray(shadowShow);
						    bossPowerEnd=true;
				          }
			          },50);
			      }else{
			  	      clearArray(shadowShow);
				      bossPowerEnd=true;
		          }
				  //finish's else
				}
            });//t3
         
         //
        if(judeEnd()){
            var boss_attack_us_boss_power_end=setInterval(function(){
						    if(bossPowerEnd){
									clearInterval(boss_attack_us_boss_power_end);
									bossPowerEnd = false;
																	  
									if (b.HP > 0) {
										console.log("2 time mozhuawudi");
										console.log("countpowerNumber:   "+countpowerNumber);
										if(countpowerNumber!=0){
											setTimeout(function(){
											   realMoZhuaWuDi(a,b);
										    }, 2000); 
										}else{
											if (b.HP > 0) {
												console.log("here over");							  
												a.dy = 240;
												enemyIndex++;
												if (enemyIndex < enemysArray.length) {
														setTimeout(enemysAction, 2000);
												} else {	
													enemyIndex = 0;
													count++;
													setTimeout(dialogShow, 2000);
													ai = false;
												}									 
											}else{
												deadEvent(null,b);
												var tm3 = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(tm3);
															enemyIndex++;
															if (enemyIndex < enemysArray.length) {
													            setTimeout(enemysAction, 2000);
															} else {
																enemyIndex = 0;
																count++;
																setTimeout(dialogShow, 2000);
																ai = false;
															}
														}//finish
												}); //tm3   
											}
										}
										
																 
									}else{
											deadEvent(null,b);
											var tm3 = setInterval(function() {
														if (finish) {
															finish = false;
															clearInterval(tm3);
															enemyIndex++;
															if (enemyIndex < enemysArray.length) {
																		setTimeout(enemysAction, 2000);
															} else {
																	enemyIndex = 0;
																	count++;
																	setTimeout(dialogShow, 2000);
																	ai = false;
															}
														}//finish
											}); //tm3   
									}//else
							}//finish
			});//boss_power_end1
        }else{
           var we_attack_boss_boss_power_end=setInterval(function(){
                                                     if(bossPowerEnd){
                                                         console.log("侦听到第一次怒攻击发动结束（不管有没有发动成功）");
                                                          clearInterval(we_attack_boss_boss_power_end);
                                                          bossPowerEnd = false;
                                                          if(b.HP>0){
                                                            if(countpowerNumber!=0){  
	                                                            setTimeout(function(){
												                    realMoZhuaWuDi(a,b);
											                    }, 2000); 
                                                            }else{
                                                                   	 b.dy = 240;
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
                                                          else{
                                                                
                                                                deadEvent(a,b);
                                                                a.dy = 240;
                                                                if(a instanceof roleInfo){
                                                                	console.log("solve still could walk");
                                                                    var t8 = setInterval(function() {
													                    if (finish) {
													                        finish = false;
													                        clearInterval(t8);
                                                                            a.dy = 240;
													                        if (judeEnd()) {
													                        	console.log("solve still could walk111");
																					//---»Ö¸´¾«ÉñÁ¦---
																					recoverSpirit();
																					//-----------
																					enemyRoundShow();
													                            end = true;
													                            ai = true;
													                            setTimeout(enemysAction);
													                        }else{ console.log("solve still could walk22222");end=false;}
													                        //drawAll();
													                    }
													                });//t8½áÊø
                                                                }else{
                                                                	 var our_role_dead = setInterval(function() {
	                                                                    if (finish) {
	                                                                        finish = false;
	                                                                        clearInterval(our_role_dead);
	                                                                        if (!judgeOver()) {
	                                                                            if (judeEnd()) {
	                                                                                recoverSpirit();
	                                                                                end = true;
	                                                                                ai = true;
	                                                                                enemyRoundShow();
	                                                                                setTimeout(function() {
	                                                                                    enemysAction();
	                                                                                },
	                                                                                2000);
	                                                                            }else{end=false;}
	                                                                        } else {
	                                                                            game_over_page();
	                                                                            
	                                                                        }
	                                                                    }//finish
                                                                    });
                                                                }
                                                               
                                                                
                                                                
                                                          }//else
                                                     }//finish
            });//we_attack_boss_boss_power_end
        }
            
           
            
            
            
		   

	}//realMoZhuaWuDi
    console.log("real mozhuawudi");
    //normal attack
    if(a instanceof roleInfo){
          normalAttack(a,b); 
          att_end = setInterval(function() {
          if (finish) {
            finish = false;
            clearInterval(att_end);
			
            if (b.HP > 0) {
                normalAttack(b,a);
                var t1 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t1);
						//Èç¹ûÎÒ·½»¹»î×Å
                        if (a.HP > 0) {
                            
                            //var n = Math.floor(Math.random() * 100) + 1; //²úÉú1---100Ëæ»úÊý
							var n=0;
                            if (n <= powerSuccess) { //Ëæ»úÊý<Å­¼¼³É¹¦ÂÊ
							    realMoZhuaWuDi(a,b);
								
                            } 	
							else{
								console.log("Å­¼¼Ê¹ÓÃÊ§°Ü");
                                failAlert("Å­¼¼Ê¹ÓÃÊ§°Ü£¡",a);
									a.dy = 240;
									if (judeEnd()) {
										//---»Ö¸´¾«ÉñÁ¦---
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
						//Èç¹ûÎÒ·½HP<0,ËÀÁË
						else {
                            deadEvent(null,a);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//---»Ö¸´¾«ÉñÁ¦---
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
                            });//½áÊø
                        }
                    }//3ºÅÎ»½áÊø
                });//t1½áÊø
            }
			//µÐÈËËÀÁË
			else {
                a.dy = 240;
                deadEvent(a,b);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//---»Ö¸´¾«ÉñÁ¦---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        //drawAll();
                    }
                });//t8½áÊø
            }
        }//4ºÅÎ»½áÊø
    });//t½áÊø
    }else{
    	realMoZhuaWuDi(a,b);
    }
    
}
/*
//Åç»ðÁú¼¼ÄÜ
function SPengHuoLong(bossId){
  //ÏÔÊ¾°ëÉíÏñ
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
  //Åç»ðÁú×ÖÑù
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
*/
function PSoulAttack() {
	rolesArray[rolesIndex].pow -= powertmp;
	//±£´æµÐÈËµÄÏÂ±ê
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//ÎÒ·½ÏÈÆÕÍ¨¹¥»÷µÐ·½
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]); //1ºÅÎ»£¬ÎÒ·½ÏÈÆÕÍ¨¹¥»÷µÐ·½
    
	//¶ÔÎÒ·½ÏÈÆÕÍ¨¹¥»÷µÐ·½ÕìÌý
    att_end = setInterval(function() {console.log("ÎÒ·½½ÇÉ«ÆÕÍ¨¹¥»÷µÐÈËºóµÄfinish£º"+finish+"   ");
        if (finish) {//1ºÅÎ»½áÊøºó£¬finish=true£¬4ºÅÎ»
            finish = false;
            clearInterval(att_end);
			//Èç¹ûµÐÈË»¹»î×Å
            if (enemysArray[tIndex].HP > 0) {
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);//2ºÅÎ»,Èç¹ûµÐÈË»¹»î×Å£¬µÐÈËÆÕÍ¨¹¥»÷ÎÒ·½
                var t1 = setInterval(function() {
                    if (finish) {//2ºÅÎ»½áÊøºó£¬finish=true£¬3ºÅÎ»
                        finish = false;
                        clearInterval(t1);
						//Èç¹ûÎÒ·½»¹»î×Å
                        if (rolesArray[rolesIndex].HP > 0) {
                            var tVar1 = Math.floor(rpx * enemysArray[tIndex].HP / enemysArray[tIndex].fullHP) + 1;
                            var n = Math.floor(Math.random() * 100) + 1; //²úÉú1---100Ëæ»úÊý
							//var n=100;
                            if (n <= powerSuccess) { //Ëæ»úÊý<Å­¼¼³É¹¦ÂÊ
								console.log("½øÈëÅ­¹¥»÷³É¹¦");
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
								//¸²¸Ç²ã
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
								500);//t2½áÊø
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
                                        50);//t4½áÊø
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
                                            50);//t5½áÊø
                                        }//  if (hp.swidth > 0) ½áÊø
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
															{   //---»Ö¸´¾«ÉñÁ¦---
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
										});//tb½áÊø
                                       // drawAll();
                                    }
                                });//t3½áÊø
                            } 
							//Èç¹û²úÉúµÄËæ»úÊý>powerSuccess,·¢¶¯Ê§°Ü
							else{
								console.log("Å­¼¼Ê¹ÓÃÊ§°Ü");
                                failAlert("Å­¼¼Ê¹ÓÃÊ§°Ü£¡", rolesArray[rolesIndex]);
									rolesArray[rolesIndex].dy = 240;
									if (judeEnd()) {
										//---»Ö¸´¾«ÉñÁ¦---
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
						//Èç¹ûÎÒ·½HP<0,ËÀÁË
						else {
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
											//---»Ö¸´¾«ÉñÁ¦---
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
                            });//½áÊø
                        }
                    }//3ºÅÎ»½áÊø
                });//t1½áÊø
            }
			//µÐÈËËÀÁË
			else {
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                var t8 = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(t8);
                        if (judeEnd()) {
								//---»Ö¸´¾«ÉñÁ¦---
								recoverSpirit();
								//-----------
								enemyRoundShow();
                            end = true;
                            ai = true;
                            setTimeout(enemysAction);
                        }else{ end=false;}
                        //drawAll();
                    }
                });//t8½áÊø
            }
        }//4ºÅÎ»½áÊø
    });//t½áÊø
}
//--------------------------------------------------------------------------------------------------------------
function SSoulKill() {
	//ÕÒµ½µÐÈËµÄÏÂ±ê
    var tIndex;
    for (var i = 0; i < enemysArray.length; i++) {
       if (Math.floor((x-mapMovX) / rpx) * rpx== enemysArray[i].mapX && Math.floor((y-mapMovY) / rpx) * rpx== enemysArray[i].mapY) {
               tIndex = i;	  
       }
    }
	//ÎÒ·½ÆÕÍ¨¹¥»÷µÐÈË
    normalAttack(rolesArray[rolesIndex], enemysArray[tIndex]);
	//¶ÔÎÒ·½ÆÕÍ¨¹¥»÷µÐÈË½øÐÐÕìÌý
    att_end = setInterval(function() {
	   console.log("¶ÔÎÒ·½ÆÕÍ¨¹¥»÷µÐÈË½øÐÐÕìÌý");
        if (finish) {
            finish = false;
            clearInterval(att_end);
			//Èç¹ûµÐÈË»¹»î×Å
            if (enemysArray[tIndex].HP > 0) {
				//µÐÈËÆÕÍ¨¹¥»÷ÎÒ·½
                normalAttack(enemysArray[tIndex], rolesArray[rolesIndex]);
				//¶ÔµÐÈËÆÕÍ¨¹¥»÷ÎÒ·½½øÐÐÕìÌý
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
						//Èç¹ûÎÒ·½»¹»î×Å
                        if (rolesArray[rolesIndex].HP > 0) {
							//»ñµÃ1---100µÄËæ»úÊý
                            var n = Math.floor(Math.random() * 100) + 1;
							//·¢¶¯ÃØ¼¼
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
																//---»Ö¸´¾«ÉñÁ¦---
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
													          	//---»Ö¸´¾«ÉñÁ¦---
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
							//ÃØ¼¼·¢¶¯Ê§°Ü
							{
                                failAlert("ÃØ¼¼Ê¹ÓÃÊ§°Ü£¡", rolesArray[rolesIndex]);
                                rolesArray[rolesIndex].dy = 240;
                                if (judeEnd()) {
								//---»Ö¸´¾«ÉñÁ¦---
								 recoverSpirit();
								//-----------
										setTimeout(enemyRoundShow,1500);
										end = true;
										ai = true;
										setTimeout(enemysAction,3000);
                                }else{end=false;}
                            }
                        } else 
						//Èç¹ûÎÒ·½ËÀÁË
						{
                            deadEvent(null,rolesArray[rolesIndex]);
                            var t7 = setInterval(function() {
                                if (finish) {
                                    finish = false;
                                    clearInterval(t7);
                                    if (!judgeOver()) {
                                        if (judeEnd()) {
												//---»Ö¸´¾«ÉñÁ¦---
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
			//Èç¹ûµÐÈËËÀÁË
			{
                rolesArray[rolesIndex].dy = 240;
                deadEvent(rolesArray[rolesIndex],enemysArray[tIndex]);
                att_end = setInterval(function() {
                    if (finish) {
                        finish = false;
                        clearInterval(att_end);
                        if (judeEnd()) {
								//---»Ö¸´¾«ÉñÁ¦---
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
function normalAttack(a, b) {//a¹¥»÷b
	//ÆÕÍ¨¹¥»÷µÄÒôÁ¿
    putongattack.volume=0.1;
	//²¥·ÅÆÕÍ¨¹¥»÷
	putongattack.play();
	//»ñÈ¡Ëæ»úÊý
    var n = Math.floor(Math.random() * 100) + 1; 
	//ÃüÖÐÊ§ÎóÂÊ 
    var x = a.errorRate; 
	//Ë«±¶±©»÷¼¸ÂÊ
    var y = a.doubleCRI; 
	//Èý±¶±©»÷¼¸ÂÊ
    var z = a.tripleCRI;
	//¶¨ÒåÒ»ÏÂ²úÉúµÄÉËº¦Öµ
    var hurt; 
	//ÑªÌõ³¤¶È
    var tVar1 = Math.floor(rpx * b.HP / b.fullHP) + 1;
    var attackText = new text("miss!", b.mapX + rpx / 4,b.mapY + rpx / 2,b.mapX + rpx / 4, b.mapY + rpx / 2, "rgb(255,0,0)", "bold 30px FangSong");
    var hp = new rectangle(b.mapX, b.mapY- 9,b.mapX, b.mapY - 9, tVar1, 5, "rgb(0,255,0)");
    var hpBox = new rectangle(b.mapX, b.mapY - 10,b.mapX, b.mapY - 10, rpx, 7, "rgb(0,0,0)");
	//¶¯Ì¬µÄ¹¥»÷Ð§¹û
    attackAction(a); 
	//Ê¹±»¹¥»÷ÕßÉÁÒ»ÏÂ
    flicker(b);
	//-------------------------------------ÒÔÏÂÊÇÅ­¹¥»÷----------------------
    var m1 = Math.floor(Math.random() * 5) + 1; //»ñÈ¡1---6µÄËæ»úÊý,¸øÎÒ·½ÓÃµÄ
	var m2 = Math.floor(Math.random() * 5) + 1; //»ñÈ¡1---6µÄËæ»úÊý,¸øµÐ·½BOSSÓÃµÄ
	//--------------------------------------ÒÔÉÏÊÇÅ­¹¥»÷----------------------
    if ((n <= x)||(a instanceof enemyInfo )&&((b instanceof roleInfo)&&(b.spiritShanBi==1)) ){//-ÉÁ±Ü¹¦ÄÜµÄÄ£¿é-Èç¹ûÎÒ·½´ò¿ªÉÁ±Ü¹¦ÄÜÁË£¬µ±µÐÈË¹¥»÷ÎÒ·½Ê±£¬Æô¶¯ÉÁ±Ü--
		hurt = 0; //Èç¹û²úÉúµÄËæ»úÊýÐ¡ÓÚÃüÖÐÊ§ÎóÂÊ£¬¹¥»÷MISS£¬
		if((a instanceof roleInfo)&&(a.spiritJueSha==1)){
			a.spiritJueSha=0;
		}else
		if((a instanceof enemyInfo )&&(b instanceof roleInfo)&&(b.spiritShanBi==1)){
		   b.spiritShanBi=0;
		   var js=new spirit();
				js.id=4;
				js.num=1;
				b.spirits.splice(3,0,js );//¼Ó»ØÉÁ±ÜÕâ¸ö¾«ÉñÁ¦
				console.log("²å»ØÉÁ±ÜÕâ¸ö¾«ÉñÁ¦µ½Êý×é");
		}
	}
    else {
        //----------------------Å­ÖµµÄËæ»úÌí¼Ó--------------------------------------
		//ÎÒ·½´òµÐ·½µÄÐ¡±ø
		if((a instanceof roleInfo )&&(b instanceof enemyInfo)&&(b.type==0)){
			if(a.pow<a.fullPow){
				a.pow+=m1;
				if(a.pow>=a.fullPow){a.pow=a.fullPow;}
				}
		}else
		//ÎÒ·½´òµÐ·½BOSS
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
		//µÐ·½Ð¡±ø´òÎÒ·½
		if((a instanceof enemyInfo)&&(a.type==0)&&(b instanceof roleInfo)){
		  if(b.pow<b.fullPow){
		   b.pow+=m1;
		   if(b.pow>=b.fullPow){b.pow=b.fullPow;}
		  }
		 
		  //console.log("µÐ·½Ð¡±ø´òÎÒ·½,ÎÒ·½¼ÓÅ­Öµ"+m1);
		}else
		//µÐ·½BOSS´òÎÒ·½
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
        //----------------------Å­ÖµµÄËæ»úÌí¼Ó½áÊø--------------------------------------
		//Èç¹û²úÉúµÄËæ»úÊýÔÚ¡¾ÃüÖÐÊ§ÎóÂÊ £¬ÃüÖÐÊ§ÎóÂÊ +Ë«±¶±©»÷¼¸ÂÊ¡¿
		if (n > x && n <= x + y) {
			//Èç¹û¾øÉ±ºÍÉñÉ±¶¼·¢¶¯ÁË£¬ÔòÉñÉ±¸²¸Ç¾øÉ±
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 	if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//°ÑÉ¾µôµÄ¾øÉ±¼Ó»Øa.spiritsÊý×é
					var js=new spirit();
					js.id=2;
					js.num=1;
					//¼Ó»Ø¾øÉ±Õâ¸ö¾«ÉñÁ¦
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
			  	var js=new spirit();
				js.id=3;
				js.num=1;
				//¼Ó»ØÉñÉ±Õâ¸ö¾«ÉñÁ¦
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 6; 
				attackText.name = "Crit:-" + hurt;
			}else
			//ÒòÎªÊ¹ÓÃ¾øÉ±Ôì³ÉµÄ
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//°ÑÉ¾µôµÄ¾øÉ±¼Ó»Øa.spiritsÊý×é
				var js=new spirit();
				js.id=2;
				js.num=1;
				//¼Ó»Ø¾øÉ±Õâ¸ö¾«ÉñÁ¦
				a.spirits.splice(1,0,js );
			    hurt = (a.ATK - b.DEF) * 4; //4±¶¹¥»÷
				attackText.name = "Crit:-" + hurt;
			}else
			//ÆÕÍ¨µÄ2±¶¹¥»÷
			{
				hurt = (a.ATK - b.DEF) * 2; //2±¶¹¥»÷
				attackText.name = "Crit:-" + hurt;
		    }	
        } else 
		//Èç¹û²úÉúµÄËæ»úÊýÔÚ¡¾ÃüÖÐÊ§ÎóÂÊ £¬ÃüÖÐÊ§ÎóÂÊ +Ë«±¶±©»÷¼¸ÂÊ+Èý±¶±©»÷¼¸ÂÊ¡¿
		if (n > x + y && n <= x + y + z) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
			 		if(a.spiritJueSha==1){
						a.spiritJueSha=0;
						//°ÑÉ¾µôµÄ¾øÉ±¼Ó»Øa.spiritsÊý×é
						var js=new spirit();
						js.id=2;
						js.num=1;
						//¼Ó»Ø¾øÉ±Õâ¸ö¾«ÉñÁ¦
						a.spirits.splice(1,0,js );
					}
			    a.spiritSheSha=0;
			    var js=new spirit();
				js.id=3;
				js.num=1;
				//¼Ó»ØÉñÉ±Õâ¸ö¾«ÉñÁ¦
				a.spirits.splice(2,0,js );
				//ÒòÎªÍ¬Ê±Ê¹ÓÃÁË¾øÉ±ºÍÉñÉ±»î×ÅÊ¹ÓÃÁËÉñÉ±
                hurt = (a.ATK - b.DEF) * 9;
				attackText.name = "Crit:-" + hurt;
			}else
			if(a.spiritJueSha==1){//ÒòÎªÊ¹ÓÃ¾øÉ±Ôì³ÉµÄ
				a.spiritJueSha=0;
				//°ÑÉ¾µôµÄ¾øÉ±¼Ó»Øa.spiritsÊý×é
				var js=new spirit();
				js.id=2;
				js.num=1;
				a.spirits.splice(1,0,js );//¼Ó»Ø¾øÉ±Õâ¸ö¾«ÉñÁ¦
				
			    hurt = (a.ATK - b.DEF) * 6; //6±¶¹¥»÷
				attackText.name = "Crit:-" + hurt;
			}else{
				hurt = (a.ATK - b.DEF) * 3; //3±¶¹¥»÷
				attackText.name = "Crit:-" + hurt;
		    }
        } else
		if (n > x + y + z && n <= 100) {
			if(((a.spiritJueSha==1)&&(a.spiritSheSha==1))||(a.spiritSheSha==1)){
				if(a.spiritJueSha==1){
					a.spiritJueSha=0;
					//°ÑÉ¾µôµÄ¾øÉ±¼Ó»Øa.spiritsÊý×é
					var js=new spirit();
					js.id=2;
					js.num=1;
					//¼Ó»Ø¾øÉ±Õâ¸ö¾«ÉñÁ¦
					a.spirits.splice(1,0,js );
				}
			    a.spiritSheSha=0;
				var js=new spirit();
				js.id=3;
				js.num=1;
				//¼Ó»ØÉñÉ±Õâ¸ö¾«ÉñÁ¦
				a.spirits.splice(2,0,js );
                hurt = (a.ATK - b.DEF) * 3; //2±¶¹¥»÷
				attackText.name = "Crit:-" + hurt;
			}else
			//ÒòÎªÊ¹ÓÃ¾øÉ±Ôì³ÉµÄ
			if(a.spiritJueSha==1){
				a.spiritJueSha=0;
				//°ÑÉ¾µôµÄ¾øÉ±¼Ó»Øa.spiritsÊý×é
				var js=new spirit();
				js.id=2;
				js.num=1;
				//¼Ó»Ø¾øÉ±Õâ¸ö¾«ÉñÁ¦
				a.spirits.splice(1,0,js );
				recoverSpirit();
			    hurt = (a.ATK - b.DEF) * 2; //2±¶¹¥»÷
				attackText.name = "Crit:-" + hurt;
			}
			else{
				 //ÆÕÍ¨¹¥»÷
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
//----------------ÉÁ2ÏÂ------------------------------------------------------
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
//------------------------------¶¯Ì¬µÄ¹¥»÷--------------------------------
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
	//Èç¹ûËÀÍöµÄÊÇµÐÈËÀàÐÍµÄ
	if(objDead instanceof enemyInfo){
		//¸üÐÂÈ«¶ÓµÄÇ®
		teamMoney=teamMoney+objDead.money;
		roleUpIndex=objAttack.id-1;
		getSomething("½ðÇ®+"+objDead.money,objAttack);
		getSomething2("¾­Ñé+"+objDead.EXP,objAttack);
        //Ôö¼ÓÃØ¼¼Å­¼¼
		if(objDead.skills.length>0 || objDead.powers.length>0)
			{
			for(var i=0;i<objDead.skills.length;i++)
				storehouse.addskills.push(objDead.skills[i]);			
			for(var j=0;j<objDead.powers.length;j++)
			    storehouse.addpowers.push(objDead.powers[j]);
			}Ä¾­Ñé
		rolesArray[roleUpIndex].EXP=parseInt(objDead.EXP)+parseInt(rolesArray[roleUpIndex].EXP);
		//Èç¹ûÖ÷½Çµ±Ç°¾­Ñ
		//Ö÷½Ç¾­Ñé+µÐÈËµé±ÈÏÂÒ»µÈ¼¶µÄ¾­ÑéÖµ>=,requestLevel()
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