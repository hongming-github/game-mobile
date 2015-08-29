
/*
	�жϵ����Ƿ������ǹ�����Χ�ڣ�OK��
*/
function judgeEnemyOnRange(obj) {
    var r = obj.range;
    var sx = obj.mapX;
    var sy = obj.mapY;
    for (var i = 0; i < enemysArray.length; i++) {
        var m = Math.abs(enemysArray[i].mapX - sx) + Math.abs(enemysArray[i].mapY - sy);
        if (m <= r * rpx) {return true;}
    }
}
/*
�жϸý�ɫ�Ƿ��Ѿ����ҷ��Ķ�����
*/
function isRoleIdInrolesArray(comeid){
    for(var i=0;i<rolesArray.length;i++){
		if(rolesArray[i].id==comeid){return true;}
	}
	return false;
}
/*
�жϸý�ɫ�Ƿ��Ѿ����غ����ù�����
*/
function isRoleHasUsedItem(obj){
	if(obj.has_use_Item==1){return true;}
	return false;
}
/*
�ж��Ƿ��ڵ��˵Ĺ�����Χ��
*/
function IsOnEnemyRange(obj){
	var r=obj.range;
	var sx=obj.mapX;
	var sy=obj.mapY;
	for (var i = 0; i < rolesArray.length; i++) {
		var m = Math.abs(rolesArray[i].mapX - sx) + Math.abs(rolesArray[i].mapY - sy);
		if (m <= r * rpx){ return true;}
	}
}
/*
�ж��Ƿ����ҷ��Ĺ�����Χ��
*/
function IsOnRoleRange(obj,objEnemy){
	var r=obj.range;
	console.log("obj.range       "+r);
	var sx=obj.mapX;
	var sy=obj.mapY;
	console.log("obj.mapX       "+obj.mapX);
	console.log("obj.mapY       "+obj.mapY);
	var m = Math.abs(objEnemy.mapX - sx) + Math.abs(objEnemy.mapY - sy);
	console.log("objEnemy.mapX      "+objEnemy.mapX);
	console.log("objEnemy.mapY      "+objEnemy.mapY);
	console.log("m       "+m);
	if (m <= r * rpx){ return true;}
	else{return false;}

}
function MouseOnPic(x, y, obj) {
    if (x > obj.sx && x < obj.sx + obj.sw && y > obj.sy && y < obj.sy + obj.sh) {
        return true;
    }
}
/*
	�ж���������Ƿ������ǹ�����Χ
*/
function MouseOnRange(x, y) {
    var a = Math.floor((x-mapMovX) / rpx) * rpx;
    var b = Math.floor((y-mapMovY) / rpx) * rpx;
    var r = rolesArray[rolesIndex].range;
    var sx = rolesArray[rolesIndex].mapX;
    var sy = rolesArray[rolesIndex].mapY;
    var dis = Math.abs(a - sx) + Math.abs(b - sy);
    if (dis <= r * rpx) return true;
}
/*
	�ж�����Ƿ���Ŀ����
*/
function MouseOnObj(x, y, obj) {
    if (x > obj.sx && x < obj.sx + obj.swidth && y > obj.sy && y < obj.sy + obj.sheight) {
        return true;
    }
}
/*
	�жϵ����Ƿ�������
*/
function isEnemyAllDead(){
      for(var i=0;i<enemysArray.length;i++){
	    if(enemysArray[i].mapX!=2496){return false;}
	  }
	  return true;
}
/*
	�жϵ����Ƿ�������
*/
function isBossDead(){
      for(var i=0;i<enemysArray.length;i++){
	    if(enemysArray[i].id==3&&enemysArray[i].mapX==2496){return true;}
	  }
	  return false;
}
/*
	�ж������Ƿ����ƶ���Χ��
*/
function MouseOnMovement(x,y) {
	var mapMoveRpx=Math.floor((x-mapMovX)/rpx)* rpx;
	var mapMoveRpy=Math.floor((y-mapMovY)/rpx)* rpx;
	for(var i=0;i<everything1.length;i++)
	{
		if(everything1[i].mapX==mapMoveRpx && everything1[i].mapY==mapMoveRpy)
		{
			return true;
		}
		
	}
	return false;
}

/*
	�ж������Ƿ��ڵ���ͼƬ��
*/
function MouseOnEnemys(x, y) {
    for (var i = 0; i < enemysArray.length; i++) {
        if (x >= enemysArray[i].sx && x <= enemysArray[i].sx + rpx && y >= enemysArray[i].sy && y <= enemysArray[i].sy + rpx) {
            enemysIndex = i;
            return true;
        }
    }
}
/*
	�ҵ�ѡ�н�ɫ���±�
*/
function findRolesIndex(x, y) {
    for (var i = 0; i < rolesArray.length; i++) {
        if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {
            rolesIndex = i;
			/*
			console.log("���������"+rolesArray[rolesIndex].sx+"   "+rolesArray[rolesIndex].sy);
            console.log("firstClick��"+firstClick+"   ����"+rolesArray[rolesIndex].walk+"  has_walk"+rolesArray[rolesIndex].has_walk);
			
			console.log("�ƶ���"+rolesArray[rolesIndex].movement);
            console.log("��ɱ"+rolesArray[rolesIndex].spiritJueSha+"  ��ɱ"+rolesArray[rolesIndex].spiritSheSha+"    ����"+rolesArray[rolesIndex].spiritShanBi);
			console.log("���п���"+rolesArray[rolesIndex].spiritShenXing+"  ��ȷ��ʹ��"+rolesArray[rolesIndex].not_sure_use_ShenXing+"   ȷ��ʹ��"+rolesArray[rolesIndex].has_use_ShenXing);
			*/
       }
    }
}
/*
	�ж������Ƿ�������ͼƬ��
*/
function MouseOnRoles(x, y) {
    for (var i = 0; i < rolesArray.length; i++) {
        if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {return true;}
    }
}
/*
   ���������ѡ�еĽ�ɫ��
*/
function MouseClickOnRolesIndex(x, y) {
    if (x >= rolesArray[rolesIndex].sx && x <= rolesArray[rolesIndex].sx + rpx && y >= rolesArray[rolesIndex].sy && y <= rolesArray[rolesIndex].sy + rpx) return true;
}
/*
   ������ڹ�����Χ��
*/
function MouseClickOnAttakRange(x,y){
	var mapMoveRpx=Math.floor((x-mapMovX)/rpx)* rpx;
	var mapMoveRpy=Math.floor((y-mapMovY)/rpx)* rpx;
	for(var i=0;i<everything1.length;i++)
	{
		if(rangeShow[i].mapX==mapMoveRpx && rangeShow[i].mapY==mapMoveRpy)
		{
			return false;
		}	
	}
	return true;
		 
}
/*
   �ж��ҷ��غ��Ƿ����
*/
function judeEnd() {
    for (var i = 0; i < rolesArray.length; i++) {
    
        if (((rolesArray[i].dy != 240)&&(rolesArray[i].sh !=0))||((rolesArray[i].sh ==0)&&(rolesArray[i].dh !=0))) {
			//alert(i);
			return false;
		}
    }
    return true;
}
/*
	�ڵ��˹�����Χ���н�ɫ��Ѱ��Ŀ��λ��
*/
function judgeTargetLocation() {

}

/*
	�ж������Ƿ��ص�
*/
function judgeOverlap(obj) {
    for (var i = 0; i < enemysArray.length; i++) {
        if (enemysArray[i].sx == obj.sx && enemysArray[i].sy == obj.sy) return true;
    }
    for (var j = 0; j < rolesArray.length; j++) {
        if (rolesArray[j].sx == obj.sx && rolesArray[j].sy == obj.sy) {
            return true;
        }
    }
}
function MouseOnOtherRoles(x, y) {
    for (var i = 0; i < rolesArray.length; i++) {
        if (x >= rolesArray[i].sx && x <= rolesArray[i].sx + rpx && y >= rolesArray[i].sy && y <= rolesArray[i].sy + rpx) {
            if (rolesArray[i].sx != rolesArray[rolesIndex].sx && rolesArray[i].sy != rolesArray[rolesIndex].sy) {
                return true;
            }
        }
    }
}
function judgeDistance(a, b) {
    //alert(Math.abs(a.sx-b.sx)+Math.abs(a.sy-b.sy));
    if (Math.abs(a.sx - b.sx) + Math.abs(a.sy - b.sy) == rpx) return true;
}
function judgeOver() {
    for (var i = 0; i < rolesArray.length; i++) {
        if (rolesArray[i].mapX != 2496){ return false;}
    }
	return true;
}

//�ж���û���ϰ���
function IsObstacle(pos){ 
    if((";"+pass+";").indexOf(";"+pos+";")!=-1)
        return true;
    return false;
}
//�ж���û�е�����
function IsEnemyHere(arr){
	var bool=false;
 for(var i=0;i<enemysArray.length;i++){
//	var ssx=enemysArray[i].sx/48;
//	var ssy=enemysArray[i].sy/48;
 	var ssx=enemysArray[i].mapX/48;
	var ssy=enemysArray[i].mapY/48;
    if(arr[0]==ssx&&arr[1]==ssy){bool= true;break;}
     else{bool=false;}
 }
 return bool;
}
//�ж���û�ж�����
function IsBuddyHere(arr){
	var bool=false;
  // for(var i=1;i<rolesArray.length;i++){
  	for(var i=0;i<rolesArray.length;i++){
//	var rsx=rolesArray[i].sx/48;
//	var rsy=rolesArray[i].sy/48;
  	var rsx=rolesArray[i].mapX/48;
	var rsy=rolesArray[i].mapY/48;
    if(arr[0]==rsx&&arr[1]==rsy){bool=true;break;}
     else{bool=false;}
 }
 return bool;
}
//�ж�����Ƿ���������һ��
function MouseOnRenWu(x, y, obj) {
    if (x > obj.sx && x < obj.sx + obj.swidth && y > obj.sy && y < obj.sy + 35) {		
        return true;
    }
}
//�ж��Ƿ������idNum�ŵĵ����ڲֿ��л����ڱ�����
function isIdOfItemThere(arr,idNum){
   for(var i=0;i<arr.length;i++){
	   if(arr[i].id==idNum){return true;}
   }
   return false;
}
//ȷ���뿪
function checkLeave(){
    event.returnValue="ȷ���뿪��ǰҳ����";
}
//�Ƿ񵽴�ؿ�
function checkGuanKa(obj){
  if(obj.sx==(bg.sx+1152)&&((obj.sy<=(bg.sy+480))&&(obj.sy>=(bg.sy+475)))){
	//  console.log("�Ƿ񵽴�ؿ�true    "+obj.sx+"   "+bg.sx+"    "+obj.sy+"     "+bg.sy);
	  return true;}
  else{
	//  console.log("�Ƿ񵽴�ؿ�false   "+obj.sx+"   "+bg.sx+"    "+obj.sy+"     "+bg.sy);
	  return false;}

}
//�ж�dingzhukuangLeft�Ƿ���һ��1
function isOneThere(arr){
   for(var i=0;i<arr.length;i++){
	   if(arr[i]==1){return true;}
   }
   return false;
}

//����������ƶ�����
function itemMove(x,y,bagArr,ckArr){
  	if(MouseOnObj(x, y, DJZLBg)){//�������ڵ�������ı�����ͼƬ��
	  clearArr(everything2);//�Ȱѷ���ɫ�ƶ����������յ�
	  var a=[0,0,0,0,0];//�������Ʊ�������û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  var aa=[0,0,0,0,0,0];//�������Ʋֿ⣬��û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  var b=bagArr.length;
	  var c=ckArr.length;
	  for(var i=0;i<b;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<c;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//������ɫ��ĸ߶�����
      if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵ�һ������
		  //�����ߵĶ�ס����һ����ѡ���ˣ���ô�ò���ʾ��ɫ�Ŀ��˵��
		  if(dingzhukuangLeft[0]==0){ mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+167;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,0,0);}
		  //�����һ����ѡ���ˣ���ô��ʾ˵��
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(rolesArray[big_role_index].items,0,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵڶ�������
		   if(dingzhukuangLeft[1]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+227;everything2.push(mrec); getShuoMingText(rolesArray[big_role_index].items,1,0);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(rolesArray[big_role_index].items,1,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵ���������
		   if(dingzhukuangLeft[2]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+287;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,2,0);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(rolesArray[big_role_index].items,2,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //�����ĵ��ĸ�����
		   if(dingzhukuangLeft[3]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+347;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,3,0);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(rolesArray[big_role_index].items,3,0);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //�����ĵ��������
		  if(dingzhukuangLeft[4]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+407;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].items,4,0);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(rolesArray[big_role_index].items,4,0);}
	  }
	  else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+41;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//�����ķ���ֿ�
	  else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){mrec.sx=DJZLBg.sx+170;mrec.sy = DJZLBg.sy+472;mrec.swidth=117;mrec.sheight=32;everything2.push(mrec);}//�����Ķ���
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�1������
		   if(dingzhukuangRight[0]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,0,0);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(storehouse.additems,0,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�2������
		    if(dingzhukuangRight[1]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,1,0);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(storehouse.additems,1,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�3������
		    if(dingzhukuangRight[2]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,2,0);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(storehouse.additems,2,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�4������
		    if(dingzhukuangRight[3]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,3,0);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(storehouse.additems,3,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�5������
		   if(dingzhukuangRight[4]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,4,0);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(storehouse.additems,4,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�6������
		   if(dingzhukuangRight[5]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(storehouse.additems,5,0);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(storehouse.additems,5,0);}
	  }
	  else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+340;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//�ֿ�ķ��뱳����ť
      else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+490;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//�ֿ�Ķ�����ť
	}
	drawBigMap();
}
//��������ĵ������
function itemClick(x,y,bagArr,ckArr,caseNum){
	var b=bagArr.length;
	var c=ckArr.length;
	var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<b;i++){//1��ʾ�е�����
	     a[i]=1;
	}
	for(var i=0;i<c;i++){//1��ʾ�е�����
	     aa[i]=1;
	}
	if(MouseOnObj(x, y, rightArrow)){
		   console.log(big_role_index+"        "+rolesArray.length);
		   if(big_role_index<=rolesArray.length-1){
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
			   {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//�����ȡ����ť��
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  DJZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}
	else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�1��������
		 if(dingzhukuangLeft[0]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�2��������
		 if(dingzhukuangLeft[1]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�3��������
		 if(dingzhukuangLeft[2]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�4��������
		 if(dingzhukuangLeft[3]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�5��������
		 if(dingzhukuangLeft[4]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//��������ķ���ֿ�
      changeItemNumber();itemOption=0;
	}else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//��������Ķ�����ť
	  changeItemNumber();itemOption=1;
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�1������
         if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�2������
         if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�3������
		 if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�4������
		 if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�5������
         if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�6������
         if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//�ֿ�ķ��뱳����ť
      changeItemNumber();itemOption=2;
	}else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//�ֿ�Ķ�����ť
      changeItemNumber();itemOption=3;
	}
	 drawBigMap();

}

//װ��������ƶ�����
function equipMove(x,y,bagArr,ckArr){
  	if(MouseOnObj(x, y, DJZLBg)){//�������ڵ�������ı�����ͼƬ��
	  clearArr(everything2);//�Ȱѷ���ɫ�ƶ����������յ�
	  var a=[0,0,0,0,0];//�������Ʊ�������û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  var aa=[0,0,0,0,0,0];//�������Ʋֿ⣬��û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  var b=bagArr.length;
	  var c=ckArr.length;
	  for(var i=0;i<b;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<c;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//������ɫ��ĸ߶�����
      if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵ�һ������
		  //�����ߵĶ�ס����һ����ѡ���ˣ���ô�ò���ʾ��ɫ�Ŀ��˵��
		  if(dingzhukuangLeft[0]==0){ mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+167;everything2.push(mrec);getShuoMingText(bagArr,0,2);}
		  //�����һ����ѡ���ˣ���ô��ʾ˵��
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(bagArr,0,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵڶ�������
		   if(dingzhukuangLeft[1]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+227;everything2.push(mrec); getShuoMingText(bagArr,1,2);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(bagArr,1,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵ���������
		   if(dingzhukuangLeft[2]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+287;everything2.push(mrec);getShuoMingText(bagArr,2,2);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(bagArr,2,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //�����ĵ��ĸ�����
		   if(dingzhukuangLeft[3]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+347;everything2.push(mrec);getShuoMingText(bagArr,3,2);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(bagArr,3,2);}
	  }
	  else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //�����ĵ��������
		  if(dingzhukuangLeft[4]==0){mrec.sx=DJZLBg.sx+37;mrec.sy = DJZLBg.sy+407;everything2.push(mrec);getShuoMingText(bagArr,4,2);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(bagArr,4,2);}
	  }
	  else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+41;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//�����ķ���ֿ�
	  else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangRight))){mrec.sx=DJZLBg.sx+170;mrec.sy = DJZLBg.sy+472;mrec.swidth=117;mrec.sheight=32;everything2.push(mrec);}//�����Ķ���
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�1������
		    if(dingzhukuangRight[0]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,0,2);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(ckArr,0,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�2������
		   if(dingzhukuangRight[1]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,1,2);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(ckArr,1,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�3������
		   if(dingzhukuangRight[2]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,2,2);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(ckArr,2,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�4������
		    if(dingzhukuangRight[3]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,3,2);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(ckArr,3,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�5������
		   if(dingzhukuangRight[4]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,4,2);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(ckArr,4,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�6������
		   if(dingzhukuangRight[5]==0){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(ckArr,5,2);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(ckArr,5,2);}
	  }
	  else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+340;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//�ֿ�ķ��뱳����ť
      else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+490;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//�ֿ�Ķ�����ť
	}
	drawBigMap();


}
//װ������ĵ������
function equipClick(x,y,arr1,arr2,caseNum){
  
	var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<arr1.length;i++){//1��ʾ�е�����
	     a[i]=1;
	}
	for(var i=0;i<arr2.length;i++){//1��ʾ�е�����
	     aa[i]=1;
	}
	if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=rolesArray.length-1){ 
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
               {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//�����ȡ����ť��
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  ZBZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}
	else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�1��������
		 if(dingzhukuangLeft[0]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�2��������
		 if(dingzhukuangLeft[1]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�3��������
		 if(dingzhukuangLeft[2]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�4��������
		 if(dingzhukuangLeft[3]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�5��������
		 if(dingzhukuangLeft[4]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+41&&x<DJZLBg.sx+156&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//��������ķ���ֿ�
          itemOption=13;areUSureFX();
	}else if(x>DJZLBg.sx+170&&x<DJZLBg.sx+286&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangLeft))){//��������Ķ�����ť
	
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�1������
         if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�2������
         if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�3������
		 if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�4������
		 if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�5������
         if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�6������
         if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+340&&x<DJZLBg.sx+455&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//�ֿ�ķ��뱳����ť
         itemOption=12;areUSureFX();
	}else if(x>DJZLBg.sx+490&&x<DJZLBg.sx+605&&y>DJZLBg.sy+472&&y<DJZLBg.sy+502&&(isOneThere(dingzhukuangRight))){//�ֿ�Ķ�����ť
  
	}
	 drawBigMap();
}
//ŭ��������ƶ�����
function powerMove(x,y,arr1,arr2){
  if(MouseOnObj(x, y, DJZLBg)){//�������ڵ�������ı�����ͼƬ��
	 clearArr(everything2);
	 var a=arr1.length;
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	 if(x>DJZLBg.sx+106&&x<DJZLBg.sx+222&&y>DJZLBg.sy+249&&y<DJZLBg.sy+278&&(a!=0)){//��ӡ��ť
	    mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+106;mrec.sy = DJZLBg.sy+249;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+534&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503){//���ð�ť
        mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+419;mrec.sy = DJZLBg.sy+473;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//�ֿ�ĵ�1����ť
        if(dingzhukuangRight[0]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+89;everything2.push(mrec);getShuoMingText(arr2,0,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//�ֿ�ĵ�2����ť
        if(dingzhukuangRight[1]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;everything2.push(mrec);getShuoMingText(arr2,1,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//�ֿ�ĵ�3����ť
        if(dingzhukuangRight[2]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+207;everything2.push(mrec);getShuoMingText(arr2,2,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//�ֿ�ĵ�4����ť
		if(dingzhukuangRight[3]==0){  mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+266;everything2.push(mrec);getShuoMingText(arr2,3,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//�ֿ�ĵ�5����ť
	    if(dingzhukuangRight[4]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+325;everything2.push(mrec);getShuoMingText(arr2,4,3);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//�ֿ�ĵ�6����ť
		 if(dingzhukuangRight[5]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+384;everything2.push(mrec);getShuoMingText(arr2,5,3);}
	 }
  }
  drawBigMap();
}
//ŭ������ĵ������
function powerClick(x,y,arr1,arr2,caseNum){
   var a=arr1.length;
   var b=[0,0,0,0,0,0];
   for(var j=0;j<arr2.length;j++){
	   b[j]=1;
   }
   if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=rolesArray.length-1){ 
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
			   {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else if(MouseOnObj(x, y, CloseImg)){//�����ȡ����ť��
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  NJZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
   }else if(x>DJZLBg.sx+106&&x<DJZLBg.sx+222&&y>DJZLBg.sy+249&&y<DJZLBg.sy+278&&(a!=0)){//����ڷ�ӡ��ť
	   dingzhukuangLeft[0]=1;itemOption=4;areUSureFX();
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//�ֿ�ĵ�1����ť
	   if(dingzhukuangRight[0]==0){console.log("1");dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//�ֿ�ĵ�2����ť
	   if(dingzhukuangRight[1]==0){console.log("2");dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//�ֿ�ĵ�3����ť
	   if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//�ֿ�ĵ�4����ť
	   if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//�ֿ�ĵ�5����ť
       if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//�ֿ�ĵ�6����ť
       if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+534&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503&&(isOneThere(dingzhukuangRight))){//���ð�ť
      itemOption=5;areUSureFX();
   }
    drawBigMap();

}
//�ؼ�������ƶ�����
function skillMove(x,y,arr1,arr2){
  if(MouseOnObj(x, y, DJZLBg)){//�������ڵ�������ı�����ͼƬ��
     clearArr(everything2);
	 var a=[0,0,0,0];
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr1.length;j++){
		 a[j]=1;
	 }
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	 if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+192&&y<DJZLBg.sy+246&&(a[0]==1)){//�����ĵ�1������
          if(dingzhukuangLeft[0]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+192;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,0,1);} 
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(rolesArray[big_role_index].skills,0,1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+255&&y<DJZLBg.sy+309&&(a[1]==1)){//�����ĵ�2������
		  if(dingzhukuangLeft[1]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+255;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,1,1);} 
		  else if(dingzhukuangLeft[1]==1){ getShuoMingText(rolesArray[big_role_index].skills,1,1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+318&&y<DJZLBg.sy+372&&(a[2]==1)){//�����ĵ�3������
		   if(dingzhukuangLeft[2]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+318;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,2,1);} 
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(rolesArray[big_role_index].skills,2,1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+381&&y<DJZLBg.sy+435&&(a[3]==1)){//�����ĵ�4������
		  if(dingzhukuangLeft[3]==0){mrec.swidth=248; mrec.sheight=55;mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+381;everything2.push(mrec);getShuoMingText(rolesArray[big_role_index].skills,3,1);} 
		  else if(dingzhukuangLeft[3]==1){ getShuoMingText(rolesArray[big_role_index].skills,3,1);}
	 }else if(x>DJZLBg.sx+110&&x<DJZLBg.sx+227&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503){//��ӡ
		  mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+110;mrec.sy = DJZLBg.sy+474;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+621&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//�ֿ�ĵ�1������
		  if(dingzhukuangRight[0]==0){mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+89;everything2.push(mrec);getShuoMingText(storehouse.addskills,0,1);}
		  else if(dingzhukuangRight[0]==1){getShuoMingText(storehouse.addskills,0,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//�ֿ�ĵ�2����ť
         if(dingzhukuangRight[1]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;everything2.push(mrec);getShuoMingText(storehouse.addskills,1,1);}
		 else if(dingzhukuangRight[1]==1){getShuoMingText(storehouse.addskills,1,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//�ֿ�ĵ�3����ť
		 if(dingzhukuangRight[2]==0){mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+207;everything2.push(mrec);getShuoMingText(storehouse.addskills,2,1);}
		 else if(dingzhukuangRight[2]==1){getShuoMingText(storehouse.addskills,2,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//�ֿ�ĵ�4����ť
		 if(dingzhukuangRight[3]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+266;everything2.push(mrec);getShuoMingText(storehouse.addskills,3,1);}
		 else if(dingzhukuangRight[3]==1){getShuoMingText(storehouse.addskills,3,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//�ֿ�ĵ�5����ť
        if(dingzhukuangRight[4]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+325;everything2.push(mrec);getShuoMingText(storehouse.addskills,4,1);}
		else if(dingzhukuangRight[4]==1){getShuoMingText(storehouse.addskills,4,1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//�ֿ�ĵ�6����ť
       if(dingzhukuangRight[5]==0){ mrec.swidth=295;mrec.sheight=55;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+384;everything2.push(mrec);getShuoMingText(storehouse.addskills,5,1);}
	   else if(dingzhukuangRight[5]==1){getShuoMingText(storehouse.addskills,5,1);}
	 }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+535&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503){//���ð�ť
        mrec.swidth=115; mrec.sheight=30;mrec.sx=DJZLBg.sx+419;mrec.sy = DJZLBg.sy+473;everything2.push(mrec);
	 }
	 drawBigMap();
  }
}
//�ؼ�����ĵ������
function skillClick(x,y,arr1,arr2,caseNum){
     var a=[0,0,0,0];
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr1.length;j++){
		 a[j]=1;
	 }
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	  if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=rolesArray.length-1){ 
			   big_role_index++;
			   if(big_role_index>rolesArray.length-1)
			   {big_role_index=0;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	 }else
	 if(MouseOnObj(x, y, leftArrow)){
		   if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index<0)
			   {big_role_index=rolesArray.length-1;}
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	 }else
	 if(MouseOnObj(x, y, CloseImg)){//�����ȡ����ť��
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  MJZhengLi=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
     }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+192&&y<DJZLBg.sy+246&&(a[0]==1)){//�����ĵ�1������
         if(dingzhukuangLeft[0]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+255&&y<DJZLBg.sy+309&&(a[1]==1)){//�����ĵ�2������
		 if(dingzhukuangLeft[1]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[1]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+318&&y<DJZLBg.sy+372&&(a[2]==1)){//�����ĵ�3������
		 if(dingzhukuangLeft[2]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[2]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+334&&y>DJZLBg.sy+381&&y<DJZLBg.sy+435&&(a[3]==1)){//�����ĵ�4������
		 if(dingzhukuangLeft[3]==0){dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[3]=1;DZKuang(mrec);}
		 else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+110&&x<DJZLBg.sx+227&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(isOneThere(dingzhukuangLeft))){//��ӡ
      itemOption=6;areUSureFX();
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+621&&y>DJZLBg.sy+89&&y<DJZLBg.sy+144&&(b[0]==1)){//�ֿ�ĵ�1������
        if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+148&&y<DJZLBg.sy+203&&(b[1]==1)){//�ֿ�ĵ�2����ť
	    if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+207&&y<DJZLBg.sy+262&&(b[2]==1)){//�ֿ�ĵ�3����ť
		if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+266&&y<DJZLBg.sy+321&&(b[3]==1)){//�ֿ�ĵ�4����ť
		if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[3]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+325&&y<DJZLBg.sy+380&&(b[4]==1)){//�ֿ�ĵ�5����ť
		if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[4]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+622&&y>DJZLBg.sy+384&&y<DJZLBg.sy+439&&(b[5]==1)){//�ֿ�ĵ�6����ť
		if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0,0];clearArr(everything1);dingzhukuangRight[5]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	 }else if(x>DJZLBg.sx+419&&x<DJZLBg.sx+535&&y>DJZLBg.sy+473&&y<DJZLBg.sy+503&&(isOneThere(dingzhukuangRight))){//���ð�ť
      itemOption=7;areUSureFX();
	 }
	drawBigMap();
}
//��Ա�ĵ���ĺ���
function duiyuanClick(x,y){
       if(MouseOnObj(x, y, CloseImg)){
			   DuiYuan=false;
		       bigMapoption=true;
			   clearArr(shadowShow);
			   drawArr(startShow);
	   }else if(MouseOnObj(x, y, leftArrow)){
		  if(big_role_index>=0){
			   big_role_index--;
			   if(big_role_index < 0){big_role_index=rolesArray.length-1;}
			   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	           drawArr(startShow);
			   teamMember(rolesArray[big_role_index],0);
		   } 
	   }else if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<=(rolesArray.length-1)){			  
			    big_role_index++;
				if(big_role_index > rolesArray.length-1){big_role_index=0;}
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	            drawArr(startShow);
			    teamMember(rolesArray[big_role_index],0);
		   }  
	   }else if (MouseOnObj(x, y, skill)) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	      drawArr(startShow);
		  teamMember(rolesArray[big_role_index],0);
       }else  if (MouseOnObj(x, y, power)) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	      drawArr(startShow);
		  teamMember(rolesArray[big_role_index],1);
       }else  if (MouseOnObj(x, y, equip)) {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	      drawArr(startShow);
		  teamMember(rolesArray[big_role_index],2);
       }
}
//�ֿ���ƶ�����
function cangKuMove(x,y,arr2,tempp){
	 if(MouseOnObj(x, y, DJZLBg)){//�������ڵ�������ı�����ͼƬ��
	 clearArr(everything2);
	 var b=[0,0,0,0,0,0];
	 for(var j=0;j<arr2.length;j++){
	   b[j]=1;
	 }
	 
	 if(x>DJZLBg.sx+366&&x<DJZLBg.sx+469&&y>DJZLBg.sy+384&&y<DJZLBg.sy+412){//������ť
	    mrec.swidth=103; mrec.sheight=28;mrec.sx=DJZLBg.sx+366;mrec.sy = DJZLBg.sy+384;everything2.push(mrec);
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+76&&y<DJZLBg.sy+130&&(b[0]==1)){//�ֿ�ĵ�1����ť
        if(dingzhukuangRight[0]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+76;everything2.push(mrec);getShuoMingText1(arr2,0,tempp);}
		else if(dingzhukuangRight[0]==1){ getShuoMingText1(arr2,0,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+133&&y<DJZLBg.sy+184&&(b[1]==1)){//�ֿ�ĵ�2����ť
        if(dingzhukuangRight[1]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+133;everything2.push(mrec);getShuoMingText1(arr2,1,tempp);}
		else if(dingzhukuangRight[1]==1){ getShuoMingText1(arr2,1,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+190&&y<DJZLBg.sy+238&&(b[2]==1)){//�ֿ�ĵ�3����ť
        if(dingzhukuangRight[2]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+190;everything2.push(mrec);getShuoMingText1(arr2,2,tempp);}
		else if(dingzhukuangRight[2]==1){ getShuoMingText1(arr2,2,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+247&&y<DJZLBg.sy+392&&(b[3]==1)){//�ֿ�ĵ�4����ť
		if(dingzhukuangRight[3]==0){  mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+247;everything2.push(mrec);getShuoMingText1(arr2,3,tempp);}
		else if(dingzhukuangRight[3]==1){ getShuoMingText1(arr2,3,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+314&&y<DJZLBg.sy+446&&(b[4]==1)){//�ֿ�ĵ�5����ť
	    if(dingzhukuangRight[4]==0){ mrec.swidth=222;mrec.sheight=51;mrec.sx=DJZLBg.sx+33;mrec.sy = DJZLBg.sy+304;everything2.push(mrec);getShuoMingText1(arr2,4,tempp);}
		else if(dingzhukuangRight[4]==1){ getShuoMingText1(arr2,4,tempp);}
	 }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+371&&y<DJZLBg.sy+500&&(b[5]==1)){//�ֿ�ĵ�6����ť
		if(dingzhukuangRight[5]==0){ mrec.swidth=222;mrec.sheight=49;mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+361;everything2.push(mrec);getShuoMingText1(arr2,5,tempp);}
		else if(dingzhukuangRight[5]==1){ getShuoMingText1(arr2,5,tempp);}
	 }
  }
  drawBigMap();
}
//�ֿ�ĵ������
function cangKuClick(x,y,arr2,caseNum){
   var b=[0,0,0,0,0,0];
   for(var j=0;j<arr2.length;j++){
	   b[j]=1;
   }

/*   if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<rolesArray.length-1){ 
			   big_role_index++;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else if(MouseOnObj(x, y, leftArrow)){
		   if(0<big_role_index){
			   big_role_index--;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }dingzhukuangLeft=[0,0,0,0,0];clearArr(everything1);dingzhukuangLeft[0]=1;DZKuang(mrec);
	}else*/ if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+76&&y<DJZLBg.sy+130&&(b[0]==1)){//�ֿ�ĵ�1����ť
	   if(dingzhukuangRight[0]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[0]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+133&&y<DJZLBg.sy+184&&(b[1]==1)){//�ֿ�ĵ�2����ť
	   if(dingzhukuangRight[1]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+190&&y<DJZLBg.sy+238&&(b[2]==1)){//�ֿ�ĵ�3����ť
	   if(dingzhukuangRight[2]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[2]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+247&&y<DJZLBg.sy+392&&(b[3]==1)){//�ֿ�ĵ�4����ť
	   if(dingzhukuangRight[3]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+314&&y<DJZLBg.sy+446&&(b[4]==1)){//�ֿ�ĵ�5����ť
       if(dingzhukuangRight[4]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	   else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+33&&x<DJZLBg.sx+257&&y>DJZLBg.sy+371&&y<DJZLBg.sy+599&&(b[5]==1)){//�ֿ�ĵ�6����ť
       if(dingzhukuangRight[5]==0){dingzhukuangRight=[0,0,0,0,0];clearArr(everything1);dingzhukuangRight[1]=1;DZKuang(mrec);}
	    else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
   }else if(x>DJZLBg.sx+366&&x<DJZLBg.sx+469&&y>DJZLBg.sy+384&&y<DJZLBg.sy+412){//������ť
     changeItemNumber();
	 itemOption=12;
   }
    drawBigMap();

}
//�����̵���ƶ�����
function itemStoreMove(x,y,arr1,arr2){
  if(MouseOnObj(x, y, DJZLBg)){//�������ڵ�������ı�����ͼƬ��
	  clearArr(everything2);//�Ȱѷ���ɫ�ƶ����������յ�
	  var a=[0,0,0,0,0];//�������Ʊ�������û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  var aa=[0,0,0,0,0,0];//�������Ʋֿ⣬��û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  for(var i=0;i<arr1.length;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<arr2.length;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//������ɫ��ĸ߶�����

      if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+175&&y<DJZLBg.sy+255&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//�ֿ�ĵ�һ������
		  //�����ߵĶ�ס����һ����ѡ���ˣ���ô�ò���ʾ��ɫ�Ŀ��˵��
		  if(!isOneThere(dingzhukuangLeft)){ mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+175;everything2.push(mrec);getShuoMingText(arr1,0,0);showItemGold(0,0);}
		  //�����һ����ѡ���ˣ���ô��ʾ˵��
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(arr1,0,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+234&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//�ֿ�ĵڶ�������
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+234;everything2.push(mrec); getShuoMingText(arr1,1,0);showItemGold(1,0);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(arr1,1,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+293&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//�ֿ�ĵ���������
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+293;everything2.push(mrec);getShuoMingText(arr1,2,0);showItemGold(2,0);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(arr1,2,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+352&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //�ֿ�ĵ��ĸ�����
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+352;everything2.push(mrec);getShuoMingText(arr1,3,0);showItemGold(3,0);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(arr1,3,0);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+411&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //�ֿ�ĵ��������
		  if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+411;everything2.push(mrec);getShuoMingText(arr1,4,0);showItemGold(4,0);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(arr1,4,0);}
	  }
	  else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+154;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//����
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //�̵�ĵ�1������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,0,0);showItemGold(0,1);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(arr2,0,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //�̵�ĵ�2������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,1,0);showItemGold(1,1);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(arr2,1,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�̵�ĵ�3������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,2,0);showItemGold(2,1);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(arr2,2,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //�̵�ĵ�4������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,3,0);showItemGold(3,1);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(arr2,3,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�̵�ĵ�5������
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,4,0);showItemGold(4,1);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(arr2,4,0);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�̵�ĵ�6������
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.items,5,0);showItemGold(5,1);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(arr2,5,0);}
	  }
	  else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+483;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//����ť
	}
	drawBigMap();
}
//�����̵�ĵ������
function itemStoreClick(x,y,arr1,arr2,caseNum){
    var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<arr1.length;i++){//1��ʾ�е�����
	     a[i]=1;
	}
	for(var i=0;i<arr2.length;i++){//1��ʾ�е�����
	     aa[i]=1;
	}
	 if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<rolesArray.length){ 
			   big_role_index++;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(0<big_role_index){
			   big_role_index--;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//�����ȡ����ť��
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  itemStore=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+175&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�1��������
        if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[0]==0){dingzhukuangLeft[0]=1;DZKuang(mrec);DZGold(0,0);}}
		else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+234&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�2��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[1]==0){dingzhukuangLeft[1]=1;DZKuang(mrec);DZGold(1,0);}}
		else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+293&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�3��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[2]==0){dingzhukuangLeft[2]=1;DZKuang(mrec);DZGold(2,0);}}
		else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+352&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�4��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[3]==0){dingzhukuangLeft[3]=1;DZKuang(mrec);DZGold(3,0);}}
		else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+411&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�5��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[4]==0){dingzhukuangLeft[4]=1;DZKuang(mrec);DZGold(4,0);}}
		else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(isOneThere(dingzhukuangLeft))){//����
		changeItemNumber();itemOption=8; 
	}
     else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //�̵�ĵ�1������
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[0]==0){dingzhukuangRight[0]=1;DZKuang(mrec);DZGold(0,1);}}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //�̵�ĵ�2������
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[1]==0){dingzhukuangRight[1]=1;DZKuang(mrec);DZGold(1,1);}}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�̵�ĵ�3������
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[2]==0){dingzhukuangRight[2]=1;DZKuang(mrec);DZGold(2,1);}}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //�̵�ĵ�4������
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[3]==0){dingzhukuangRight[3]=1;DZKuang(mrec);DZGold(3,1);}}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�̵�ĵ�5������
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[4]==0){dingzhukuangRight[4]=1;DZKuang(mrec);DZGold(4,1);}}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�̵�ĵ�6������
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[5]==0){dingzhukuangRight[5]=1;DZKuang(mrec);DZGold(5,1);}}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){//����ť
		changeItemNumber();itemOption=9; 
	}
    drawBigMap();
}
//�����̵���ƶ�����
function equipStoreMove(x,y,arr1,arr2){
    if(MouseOnObj(x, y, DJZLBg)){//�������ڵ�������ı�����ͼƬ��
	  clearArr(everything2);//�Ȱѷ���ɫ�ƶ����������յ�
	  var a=[0,0,0,0,0];//�������Ʊ�������û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  var aa=[0,0,0,0,0,0];//�������Ʋֿ⣬��û�е����ڵ�ʱ�򣬣�����ƶ��͵����Ч
	  for(var i=0;i<arr1.length;i++){
	     a[i]=1;
	  }
	  for(var i=0;i<arr2.length;i++){
	     aa[i]=1;
	  }
	  mrec.swidth=248; mrec.sheight=55;//������ɫ��ĸ߶�����
      if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+175&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵ�һ������
		  //�����ߵĶ�ס����һ����ѡ���ˣ���ô�ò���ʾ��ɫ�Ŀ��˵��
		  if(!isOneThere(dingzhukuangLeft)){ mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+175;everything2.push(mrec);getShuoMingText(arr1,0,2);showItemGold(0,3);}
		  //�����һ����ѡ���ˣ���ô��ʾ˵��
		  else if(dingzhukuangLeft[0]==1){ getShuoMingText(arr1,0,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+234&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵڶ�������
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+234;everything2.push(mrec); getShuoMingText(arr1,1,2);showItemGold(1,3);}
		   else if(dingzhukuangLeft[1]==1){ getShuoMingText(arr1,1,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+293&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//�����ĵ���������
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+293;everything2.push(mrec);getShuoMingText(arr1,2,2);showItemGold(2,3);}
		   else if(dingzhukuangLeft[2]==1){ getShuoMingText(arr1,2,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+352&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){ //�����ĵ��ĸ�����
		   if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+352;everything2.push(mrec);getShuoMingText(arr1,3,2);showItemGold(3,3);}
		   else if(dingzhukuangLeft[3]==1){ getShuoMingText(arr1,3,2);}
	  }
	  else if(x>DJZLBg.sx+40&&x<DJZLBg.sx+287&&y>DJZLBg.sy+411&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){ //�����ĵ��������
		  if(!isOneThere(dingzhukuangLeft)){mrec.sx=DJZLBg.sx+40;mrec.sy = DJZLBg.sy+411;everything2.push(mrec);getShuoMingText(arr1,4,2);showItemGold(4,3);}
		  else if(dingzhukuangLeft[4]==1){ getShuoMingText(arr1,4,2);}
	  }
	  else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(!isOneThere(dingzhukuangRight))){ mrec.sx=DJZLBg.sx+154;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//����
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�1������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+90;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,0,2);showItemGold(0,2);}
		   else if(dingzhukuangRight[0]==1){getShuoMingText(arr2,0,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�2������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+148;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,1,2);showItemGold(1,2);}
           else if(dingzhukuangRight[1]==1){getShuoMingText(arr2,1,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�3������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+208;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,2,2);showItemGold(2,2);}
		   else if(dingzhukuangRight[2]==1){getShuoMingText(arr2,2,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�4������
		   if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+267;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,3,2);showItemGold(3,2);}
		   else if(dingzhukuangRight[3]==1){getShuoMingText(arr2,3,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�5������
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+326;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,4,2);showItemGold(4,2);}
		  else if(dingzhukuangRight[4]==1){getShuoMingText(arr2,4,2);}
	  }
	  else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�6������
		  if(!isOneThere(dingzhukuangRight)){mrec.sx=DJZLBg.sx+324;mrec.sy = DJZLBg.sy+386;mrec.swidth=295;mrec.sheight=55;everything2.push(mrec);getShuoMingText(store.equips,5,2);showItemGold(5,2);}
		  else if(dingzhukuangRight[5]==1){getShuoMingText(arr2,5,2);}
	  }
	  else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){mrec.sx=DJZLBg.sx+483;mrec.sy = DJZLBg.sy+472;mrec.swidth=117; mrec.sheight=32;everything2.push(mrec);}//����ť
	}
	drawBigMap();

}
//�����̵�ĵ������
function equipStoreClick(x,y,arr1,arr2,caseNum){
	var a=[0,0,0,0,0];
	var aa=[0,0,0,0,0,0,0];
	for(var i=0;i<arr1.length;i++){//1��ʾ��װ����
	     a[i]=1;
	}
	for(var i=0;i<arr2.length;i++){//1��ʾ��װ����
	     aa[i]=1;
	}
	 if(MouseOnObj(x, y, rightArrow)){
		   if(big_role_index<rolesArray.length-1){ 
			   big_role_index++;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
	if(MouseOnObj(x, y, leftArrow)){
		   if(0<big_role_index){
			   big_role_index--;
			   ZhengLi(rolesArray[big_role_index],caseNum);
		   }
	}else
    if(MouseOnObj(x, y, CloseImg)){//�����ȡ����ť��
		  clearArr(everything1);
		  dingzhukuangLeft=[0,0,0,0,0];
		  dingzhukuangRight=[0,0,0,0,0,0];
		  equipStore=false;
		  bigMapoption=true;
		  clearArr(shadowShow);
		  drawArr(startShow);
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+167&&y<DJZLBg.sy+225&&a[0]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�1��������
        if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[0]==0){dingzhukuangLeft[0]=1;DZKuang(mrec);DZGold(0,3);}}
		else if(dingzhukuangLeft[0]==1){dingzhukuangLeft[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+227&&y<DJZLBg.sy+280&&a[1]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�2��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[1]==0){dingzhukuangLeft[1]=1;DZKuang(mrec);DZGold(1,3);}}
		else if(dingzhukuangLeft[1]==1){dingzhukuangLeft[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+287&&y<DJZLBg.sy+335&&a[2]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�3��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[2]==0){dingzhukuangLeft[2]=1;DZKuang(mrec);DZGold(2,3);}}
		else if(dingzhukuangLeft[2]==1){dingzhukuangLeft[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+347&&y<DJZLBg.sy+395&&a[3]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�4��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[3]==0){dingzhukuangLeft[3]=1;DZKuang(mrec);DZGold(3,3);}}
		else if(dingzhukuangLeft[3]==1){dingzhukuangLeft[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+37&&x<DJZLBg.sx+287&&y>DJZLBg.sy+407&&y<DJZLBg.sy+450&&a[4]==1&&(!isOneThere(dingzhukuangRight))){//���ڱ����ĵ�5��������
	    if(!isOneThere(dingzhukuangLeft)){if(dingzhukuangLeft[4]==0){dingzhukuangLeft[4]=1;DZKuang(mrec);DZGold(4,3);}}
		else if(dingzhukuangLeft[4]==1){dingzhukuangLeft[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+152&&x<DJZLBg.sx+272&&y>DJZLBg.sy+472&&y<DJZLBg.sy+504&&(isOneThere(dingzhukuangLeft))){//����
		itemOption=14;areUSureFX();
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+90&&y<DJZLBg.sy+144&&aa[0]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�1������
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[0]==0){dingzhukuangRight[0]=1;DZKuang(mrec);DZGold(0,2);}}
		 else if(dingzhukuangRight[0]==1){dingzhukuangRight[0]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+148&&y<DJZLBg.sy+202&&aa[1]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�2������
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[1]==0){dingzhukuangRight[1]=1;DZKuang(mrec);DZGold(1,2);}}
		 else if(dingzhukuangRight[1]==1){dingzhukuangRight[1]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+208&&y<DJZLBg.sy+260&&aa[2]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�3������
	     if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[2]==0){dingzhukuangRight[2]=1;DZKuang(mrec);DZGold(2,2);}}
		 else if(dingzhukuangRight[2]==1){dingzhukuangRight[2]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+267&&y<DJZLBg.sy+320&&aa[3]==1&&(!isOneThere(dingzhukuangLeft))){ //�ֿ�ĵ�4������
		 if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[3]==0){dingzhukuangRight[3]=1;DZKuang(mrec);DZGold(3,2);}}
		 else if(dingzhukuangRight[3]==1){dingzhukuangRight[3]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+326&&y<DJZLBg.sy+380&&aa[4]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�5������
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[4]==0){dingzhukuangRight[4]=1;DZKuang(mrec);DZGold(4,2);}}
		 else if(dingzhukuangRight[4]==1){dingzhukuangRight[4]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+324&&x<DJZLBg.sx+620&&y>DJZLBg.sy+386&&y<DJZLBg.sy+441&&aa[5]==1&&(!isOneThere(dingzhukuangLeft))){//�ֿ�ĵ�6������
         if(!isOneThere(dingzhukuangRight)){if(dingzhukuangRight[5]==0){dingzhukuangRight[5]=1;DZKuang(mrec);DZGold(5,2);}}
		 else if(dingzhukuangRight[5]==1){dingzhukuangRight[5]=0;clearArr(everything1);}
	}else if(x>DJZLBg.sx+483&&x<DJZLBg.sx+601&&y>DJZLBg.sy+474&&y<DJZLBg.sy+503&&(!isOneThere(dingzhukuangLeft))){//����ť
		itemOption=11; changeItemNumber();
	}
    drawBigMap();
}