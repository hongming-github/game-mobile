/*
	����Ŀ��ƶ����룬������ʾ
*/
function movingrange() { //"rgba(255,0,0,0.3)"  "rgba(0,207,255,0.6)"	
    var m = rolesArray[rolesIndex].movement;
    var sx = rolesArray[rolesIndex].mapX;
    var sy = rolesArray[rolesIndex].mapY;
    var x = sx - (m + 2) * rpx;
    for (var i = 0; i < 2 * (m + 1) + 1; i++) {
        x += rpx;
        var y = sy - (m + 2) * rpx;
        for (var j = 0; j < 2 * (m + 1) + 1; j++) {
            y += rpx;
            if (x >= 0 && y >= 0) {
                var distance = Math.abs(x - sx) + Math.abs(y - sy);
				var s=x/rpx+","+y/rpx;
				if (distance > 0 && distance <= (m+1) * rpx) {
					setPos(x,y);
					if (find.length>0&&find.length<=m){
						if (IsEnemy(x,y)||IsPass1(s)){
							everything1.push(new rectangle(x ,y ,x, y, rpx - 1, rpx - 1, "rgba(255,0,0,0.3)"));
						}else{
							everything1.push(new rectangle(x,y,x, y, rpx - 1, rpx - 1, "rgba(0,207,255,0.6)"));
						}
					}else if (find.length==m+1){
						everything1.push(new rectangle(x,y,x, y, rpx - 1, rpx - 1, "rgba(255,0,0,0.3)"));
					}
					closelist=[],openlist=[];											
					num=undefined;
					find=[];	
                }
			 
            }
        }
    }
   // drawAll();
}
//----------------------A*�㷨-----------------------------------------------------------------------------------
function GetRound(pos){//����ԭ����Χ��4����
	var a=new Array();
 
	a[0]=(pos[0]+1)+","+pos[1];
	
	a[1]=pos[0]+","+(pos[1]+1);
  
	a[2]=(pos[0]-1)+","+pos[1];
   
	a[3]=pos[0]+","+(pos[1]-1);
	return a;
}
function setPos(x,y){
	p_start=[rolesArray[rolesIndex].mapX / rpx,rolesArray[rolesIndex].mapY / rpx];
	p_end=[Math.floor(x / rpx),Math.floor(y / rpx)];
	
	//alert(p_start);
	//alert(p_end);

	var h=(Math.abs(p_end[0]-p_start[0])+Math.abs(p_end[1]-p_start[1]))*gw;
	s_path=[h,0,h,p_start,p_start];
	//alert(s_path[3]);
	Amain();
}
function setObj(x,y){
	p_start=[enemysArray[enemyIndex].mapX / rpx,enemysArray[enemyIndex].mapY / rpx];
	p_end=[Math.floor(x / rpx),Math.floor(y / rpx)];
	
	var h=(Math.abs(p_end[0]-p_start[0])+Math.abs(p_end[1]-p_start[1]))*gw;
	s_path=[h,0,h,p_start,p_start];
	//alert(s_path[3]);
	Amain();
}
function GetF(arr){ //����Ϊԭ����Χ��8����
	var t,G,H,F;//F,�ۺϵľ���ֵ��H,����ֵ G,ˮƽ\���丽�Ӽ���
	for(var i=0;i<arr.length;i++){
		t=arr[i].split(",");//split() �������ڰ�һ���ַ����ָ���ַ������顣
		t[0]=parseInt(t[0]);
		t[1]=parseInt(t[1]);
		
		if(IsStart([t[0],t[1]])||IsOutScreen([t[0],t[1]])||IsPass(arr[i])||InClose([t[0],t[1]])||IsObj([t[0],t[1]]))
			continue;//�������������һ���㣬����������ѭ����������һ�Ρ�
		G=s_path[1]+gw;//�����G=10;
		if(InOpen([t[0],t[1]])){//�����ǰ���Ѵ���openlist������
			if(G<openlist[num][1]){
				openlist[num][0]=(G+openlist[num][2]);
				openlist[num][1]=G;
				openlist[num][4]=s_path[3];
			}
			else{G=openlist[num][1];}
		}
		else{
			H=(Math.abs(p_end[0]-t[0])+Math.abs(p_end[1]-t[1]))*gw;
			F=G+H;
			arr[i]=new Array();
			arr[i][0]=F;
			arr[i][1]=G;
			arr[i][2]=H;
			arr[i][3]=[t[0],t[1]];
			arr[i][4]=s_path[3];
			openlist[openlist.length]=arr[i];//��F����Ϣ���浽openlist
		}
	}
}
function IsEnemy(x,y){
	var bool=false;
	for (var i = 0; i < enemysArray.length; i++) {
        if (x == enemysArray[i].mapX &&y == enemysArray[i].mapY  ) {
            bool= true;break;
        }
    }
	return bool;
}
/*function IsObj(arr){
	var bool=false;
	//console.log("5");
	if (rolesIndex>=0&& p_start[0]==rolesArray[rolesIndex].mapX/ rpx && p_start[1]==rolesArray[rolesIndex].mapY / rpx){		
		for (var i =0;i<enemysArray.length ;i++ ){
			if (arr[0]==enemysArray[i].mapX/rpx&&arr[1]==enemysArray[i].mapY/rpx){
				if (p_end[0]==enemysArray[i].mapX/rpx&&p_end[1]==enemysArray[i].mapY/rpx){
					continue;
				}else{
					bool=true;
					break;
				}
			}
		}
	}else{
		for (var i =0;i<rolesArray.length ;i++ ){
			if (arr[0]==rolesArray[i].mapX/rpx && arr[1]==rolesArray[i].mapY/rpx){
				if (p_end[0]==rolesArray[i].mapX/rpx && p_end[1]==rolesArray[i].mapY/rpx){
					continue;
				}else{
					bool=true;
					break;
				}
			}
		}
	}
	return bool;
	
}*/
function IsObj(arr){
	var bool=false;
	//console.log("5");
	if (rolesIndex>=0&&	p_start[0]==rolesArray[rolesIndex].mapX/ rpx && p_start[1]==rolesArray[rolesIndex].mapY / rpx){	//
		for (var i =0;i<enemysArray.length ;i++ ){
			if (arr[0]==enemysArray[i].mapX/rpx&&arr[1]==enemysArray[i].mapY/rpx){
				if (p_end[0]==enemysArray[i].mapX/rpx&&p_end[1]==enemysArray[i].mapY/rpx){
					continue;
				}else{
				
					bool=true;
					break;
				}
			}
		}
	}else{
		//�����ж����Ŷ������������ϰ���
	  for (var i = 0; i < enemysArray.length; i++) {
		
        if (arr[0] == enemysArray[i].mapX/48 && arr[1] == enemysArray[i].mapY/48  ) {

			console.log("it's true now ");
            bool= true;
			break;
        }
      }
	  //�����ж��ҷ������������ϰ���
	  for (var i =0;i<rolesArray.length ;i++ ){
			if (arr[0]==rolesArray[i].mapX/rpx && arr[1]==rolesArray[i].mapY/rpx){
			if (p_end[0]==rolesArray[i].mapX/rpx && p_end[1]==rolesArray[i].mapY/rpx){
					continue;
				}else{
					console.log("bool2 true");
					bool=true;
					break;
				}
		}
	  }
	}
	
	return bool;
	
}
function IsOutScreen(arr){ //�Ƿ񳬳�������Χ
	//console.log("1");
	if(arr[0]<0||arr[1]<0||arr[0]>=26||arr[1]>=16)
		return true;
	return false;
}
function IsPass(pos){ //pos������Ƿ���ϰ����غ�
	//console.log("2");
	if((";"+pass+";").indexOf(";"+pos+";")!=-1)
		if ((";"+p_end[0]+","+p_end[1]+";").indexOf(";"+pos+";")!=-1){
			return false;
		}else{
			return true;
		}
	return false;
}
function IsPass1(pos){ //pos������Ƿ���ϰ����غ�
	//console.log("2");
	if((";"+pass+";").indexOf(";"+pos+";")!=-1)
			return true;
	return false;
}
function IsStart(arr){ //�жϸõ��ǲ������
	//console.log("4");
	if(arr[0]==p_start[0]&&arr[1]==p_start[1])
		return true;
	return false;
}
function InClose(arr){
	//console.log(closelist.length);
	var bool=false;
	for(var i=0;i<closelist.length;i++){
		if((arr[0]==closelist[i][3][0])&&(arr[1]==closelist[i][3][1])){
			bool=true;
		break;}
	}
	return bool;
}
function InOpen(arr){//��ô�����openlist�����λ�ã��粻���ڷ���false������Ϊtrue��λ����������ȫ�ֱ���num
	var bool=false;
	for(var i=0;i<openlist.length;i++){
		if(arr[0]==openlist[i][3][0]&&arr[1]==openlist[i][3][1]){
			bool=true;num=i;break;}
	}
	return bool;
}
function Sort(arr){//�������飬�ҳ���С��F����������λ�á�
	var temp;
	for(var i=0;i<arr.length;i++){
		if(arr.length==1)break;
		if(arr[i][0]<=arr[i+1][0]){
			temp=arr[i];
			arr[i]=arr[i+1];
			arr[i+1]=temp;
		}
		if((i+1)==(arr.length-1))
			break;
	}
}
function getPath(){//���·��
	
	find.unshift(p_end);
	var t=closelist[closelist.length-1][4];
	while(1){
		find.unshift(t);
		//console.log(t[0]+","+t[1]+";");
		for(var i=0;i<closelist.length;i++){
			if(closelist[i][3][0]==t[0]&&closelist[i][3][1]==t[1])
				t=closelist[i][4];
		}
		if(t[0]==p_start[0]&&t[1]==p_start[1]){
			//console.log(find);
			
			break;
		}
	}
	
}

function Amain(){
	GetF(					//��ԭ����Χ8�㴫��GetF���д�����A*���ĺ����� :)��������F������openlist����
		GetRound(s_path[3]) //��ԭ����Χ8��
	);
	Sort(openlist);			//�������飬�ҳ���С��F����������λ�á�
	s_path=openlist[openlist.length-1];			//���õ�ǰԭ��ΪF��С�ĵ�
	closelist[closelist.length]=s_path;			//����ǰԭ�����ӽ�closelist������
	openlist[openlist.length-1]=null;			//��openlist�����F��С�ĵ�
	if(openlist.length==0){
		return;
	}											//���openlist������û�������ˣ����Ҳ���·��
	openlist.length=openlist.length-1;							//�ϴ�ɾ��������ɾ�ˣ�λ�û������ˣ�����ɾ��
	if((s_path[3][0]==p_end[0])&&(s_path[3][1]==p_end[1])){				//��������յ��ˣ����·��
		getPath();
	}else{
		Amain();
	}
}

