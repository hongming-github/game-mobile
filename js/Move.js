/*
	��ɫ�ƶ�(��OK)
*/

function change(arr) {
	//window.cancelAnimationFrame(mapDraw); 
    hasNoRolesWalk=false;
	var a=0;
	var xg = arr[a][0] * rpx;
	var yg = arr[a][1] * rpx;
	tid = setInterval(function (){
		countInterval++;
		if (countInterval%6==0){
			walk(rolesArray[rolesIndex]);		
		}
		if (rolesArray[rolesIndex].mapX < xg) {
			rolesArray[rolesIndex].dy = 2*rpx;
			rolesArray[rolesIndex].mapX +=4;
		}else
		if (rolesArray[rolesIndex].mapX > xg) {
			rolesArray[rolesIndex].dy = rpx;
			rolesArray[rolesIndex].mapX -=4;
		}else
		if (rolesArray[rolesIndex].mapX == xg) {
			if (rolesArray[rolesIndex].mapY < yg) {
				rolesArray[rolesIndex].dy = 0;
				rolesArray[rolesIndex].mapY +=4;			
			}else
			if (rolesArray[rolesIndex].mapY > yg) {
				rolesArray[rolesIndex].dy = 3*rpx;
				rolesArray[rolesIndex].mapY -=4;				
			}else
			if (rolesArray[rolesIndex].mapY == yg) {
				a++;
				if (a<arr.length){
					
					xg = arr[a][0] * rpx;
					yg = arr[a][1] * rpx;
					
				}else{
					//foot.pause();//��·�����Ĺر�
					find=[];
					rolesArray[rolesIndex].dx=0;
					rolesArray[rolesIndex].dy=0;
					clearArray(everything2);
					clearInterval(tid);
					countInterval=0;
					if(checkGuanKa(rolesArray[rolesIndex])&&mapLevel==1){
					//	alert("1");
						hasNoRolesWalk=true;
						IntoGuanKa=true;
						//nextGuanKaOpen();
						setTimeout(nextGuanKaOpen,500);
						 //bigMapLoop=setInterval(drawAll,200);
					}
					else{
						//alert("2");
						end=false;
						hasNoRolesWalk=true;
						showMenu(rolesArray[rolesIndex]);}
					//mapDraw=window.requestAnimationFrame(drawAll);
				}
			}
		}
		
		//drawAll();

	},10);
}
//----------------------------------------------------------------------------------------------------
function enemyChange(arr) {
	var a=0;
	var xg = arr[a][0] * rpx;
	var yg = arr[a][1] * rpx;
	tid = setInterval(function (){
		countInterval++;
		if (countInterval%6==0){
			walk(enemysArray[enemyIndex]);
		}
		if (enemysArray[enemyIndex].mapX < xg) {
			enemysArray[enemyIndex].dy = 2*rpx;
			enemysArray[enemyIndex].mapX +=4;
		}else
		if (enemysArray[enemyIndex].mapX > xg) {
			enemysArray[enemyIndex].dy = rpx;
			enemysArray[enemyIndex].mapX -=4;
		}else
		if (enemysArray[enemyIndex].mapX == xg) {
			if (enemysArray[enemyIndex].mapY < yg) {
				enemysArray[enemyIndex].dy = 0;
				enemysArray[enemyIndex].mapY +=4;			
			}else
			if (enemysArray[enemyIndex].mapY > yg) {
				enemysArray[enemyIndex].dy = 3*rpx;
				enemysArray[enemyIndex].mapY -=4;				
			}else
			if (enemysArray[enemyIndex].mapY == yg) {
				a++;				
				if (a<arr.length){			
					xg = arr[a][0] * rpx;
					yg = arr[a][1] * rpx;				
				}else{
					enemysArray[enemyIndex].dx = 0;
					enemysArray[enemyIndex].dy = 240;
					clearInterval(tid);
					countInterval = 0;
					//�ڵ��˵Ĺ�����Χ��
					if (IsOnEnemyRange(enemysArray[enemyIndex])){
						    //������ͨ�����ҷ�
							console.log("������ͨ�����ҷ�");
							normalAttack(enemysArray[enemyIndex], roleObj);
							//�Ե�����ͨ�����ҷ�����
							var tm1 = setInterval(function() {
								if (finish) {
									clearInterval(tm1);
									finish = false;
									enemysArray[enemyIndex].dy = 240;
									//����ҷ��ڵ��˵���ͨ�����»�����
									console.log("�ҷ��ڵ��˵���ͨ�����»�����   "+roleObj.name);
									if (roleObj.HP > 0) {
										//�ҷ���ͨ��������
										console.log("�������0");
									     if(IsOnRoleRange(roleObj,enemysArray[enemyIndex])){
										    normalAttack(roleObj, enemysArray[enemyIndex]);
											//���ҷ���ͨ������������
											var tm2 = setInterval(function() {
												if (finish) {
													finish = false;
													clearInterval(tm2);
													roleObj.dy = 240;
													//����������ҷ�����ͨ�����»�����
													if (enemysArray[enemyIndex].HP > 0) {
														//�����BOSS
														if(enemysArray[enemyIndex].type==1){
															//���BOSS��ŭֵ�����ģ������ȷ���
															//if(enemysArray[enemyIndex].pow==enemysArray[enemyIndex].fullPow){
															
															  BossPowerAttacked(enemysArray[enemyIndex],roleObj);
															/*
															}else{
															   var n = Math.floor(Math.random() * 100) + 1;
															   console.log("BOSSŭֵû�����������   "+n+"  "+powerNumber);
															   //��������С�ڵ���50�������ȷ���ŭ����
															   if(n<=50){
																  console.log("����С��50 ");
																  BOSS_power_attack();
																  //BOSSħץ�޵м���ִ������
																  var boss_power_end1=setInterval(function(){
																		if(bossPowerEnd){	
																		   clearInterval(boss_power_end1);
																		   bossPowerEnd = false;
																		   //����ҷ���BOSS���ؼ������»�����
																		   if (roleObj.HP > 0) {
																				 console.log("�ٴη���ŭ����");
																				  setTimeout(BOSS_power_attack, 2000); 
																		   }
																		   //����ҷ���BOSS���ؼ�����������
																		   else{
																				powerNumber=2;
																				deadEvent(null,roleObj);
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
																  });//boss_power_end
																  var boss_power_end2=setInterval(function(){
																		if(bossPowerEnd){	
																		   clearInterval(boss_power_end2);
																		   bossPowerEnd = false;
																		   //����ҷ���BOSS���ؼ������»�����
																		   if (roleObj.HP > 0) {
																				  enemysArray[enemyIndex].dy = 240;
																				  enemyIndex++;
																				  if (enemyIndex < enemysArray.length) {
																						setTimeout(enemysAction, 2000);
																				  } else {	
																						enemyIndex = 0;
																						count++;
																						setTimeout(dialogShow, 2000);
																						ai = false;
																				  }
																			 
																		   }
																		   //����ҷ���BOSS���ؼ�����������
																		   else{
																				powerNumber=2;
																				deadEvent(null,roleObj);
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
																  });//boss_power_end
															   }
															   else{//�򷢶��ؼ�����
																	console.log("�������50 ");
															   //ִ��BOSS�������ؼ�����
																  Boss_skill_attack();
																  var boss_skill_end=setInterval(function(){
																		  if(finish){
																			 clearInterval(boss_skill_end);
																			 finish = false;
																			 //����ҷ���BOSS���ؼ������»�����
																			 if (roleObj.HP > 0) {
																				 enemyIndex++;
																				 if (enemyIndex < enemysArray.length) {
																					 setTimeout(enemysAction, 2000);
																				 } else {
																					 enemyIndex = 0;
																					 count++;
																					 setTimeout(dialogShow, 2000);
																					 ai = false;
																				 }// if (enemyIndex < enemysArray.length) 
																			 }
																			 //����ҷ���BOSS���ؼ�����������
																			 else{
																				deadEvent(null,roleObj);
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
																  });//var boss_skill_end
															   }//else
															
															}//else
															*/
														}
														else
														//�����С��
														{
															console.log("��С��");
															enemyIndex++;
															if (enemyIndex < enemysArray.length) {
																setTimeout(enemysAction, 2000);
															} else {
																enemyIndex = 0;
																count++;
																setTimeout(dialogShow, 2000);
																ai = false;
															}
														}
													} else 
													//����������ҷ�����ͨ����������
													{
														deadEvent(roleObj,enemysArray[enemyIndex]);
														att_end = setInterval(function() {
															if (finish) {
																finish = false;
																clearInterval(att_end);
																enemyIndex++;
																if (enemyIndex < enemysArray.length) {
																	setTimeout(enemysAction, 2000);
																} else {
																	enemyIndex = 0;
																	count++;
																	setTimeout(dialogShow, 2000);
																	ai = false;
																}
															}
														});
													}
												}
											});
									     }else{
									            enemyIndex++;
												if (enemyIndex < enemysArray.length) {
														setTimeout(enemysAction, 2000);
												} else {
														enemyIndex = 0;
														count++;
														setTimeout(dialogShow, 2000);
														ai = false;
												} 
									     }
									} else
									//����ҷ��ڵ��˵���ͨ����������
									{
										deadEvent(null,roleObj);
										var tm4 = setInterval(function() {
											if (finish) {
												finish = false;
												clearInterval(tm4);
												if (!judgeOver()) {
													enemyIndex++;
													if (enemyIndex < enemysArray.length) {
														setTimeout(enemysAction, 2000);
													} else {
														enemyIndex = 0;
														count++;
														setTimeout(dialogShow, 2000);
														ai = false;
													}
												} else {
													game_over_page();
												}
											}
										});
									}
								}
							});
					}else
					//���ڵ��˵Ĺ�����Χ��
					{
						enemyIndex++;
						if (enemyIndex < enemysArray.length) {
							setTimeout(enemysAction, 500);
						} else {
							enemyIndex = 0;
							count++;
							setTimeout(dialogShow, 2000);
							ai = false;
						}
					}
					
				}
			}
		}
		//drawAll();
	},10);
}
//----------------------------------------------------------------------------------------------------
/*
	�������߶���
*/
function walk(obj) {
	//foot.play();//��·������
    ctx.clearRect(obj.sx, obj.sy, rpx, rpx);
    if (obj.dx < 192) { //48*4=192
        obj.dx += 48;
		if((obj instanceof roleInfo)&&(rolesArray[rolesIndex].walk==0)){
			rolesArray[rolesIndex].walk=1;//��ʾ�Ѿ��߹���
	        console.log("�����߿���");
		}
    }
    if (obj.dx == 192) {
        obj.dx = 0;
    }
    obj.draw();
}