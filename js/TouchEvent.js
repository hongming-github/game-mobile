/*
说明：定义触摸事件函数
*/
var isTouchMove = false; //记录触摸滑动的开关
var startX; //触摸时的坐标
var startY;
var x=0;      //存取滑动后位置的临时变量
var y=0;
var slideX; //滑动的距离
var slideY;
var aboveX=0;
var aboveY=0; //设一个全局变量记录上一次内部块滑动的位置 

            /*window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

            function render(){
                ctx.drawImage(img,x,y,960,576,0,0,960,576);
            }
            requestAnimationFrame(function(){
                render();
             });*/

         
function touchStart(e){//触摸
        e.preventDefault();
        var touch = e.touches[0];//获取第一个target
        startX = touch.pageX;    //刚触摸时的坐标   
        startY = touch.pageY;    
        console.log("aa");             
}

function touchMove(e){//滑动  
        isTouchMove = true;        
        e.preventDefault();        
        var touch = e.touches[0];   
        slideX = touch.pageX - startX;//滑动的距离            
        slideY = touch.pageY - startY;
/*
        x = aboveX - slideX;
        y = aboveY - slideY;

        if(x >= 1248) x = 1248;    //地图边界
        if(y >= 768) y = 768;
        if(x <= 0) x = 0;
        if(y <= 0) y = 0;*/
                 
        //ctx.drawImage(img,x,y,960,576,0,0,960,576);

}  

function touchEnd(e){//手指离开屏幕
        e.preventDefault();      
       // aboveX = x;     //touch结束后用来记录最后剪切的位置
        //aboveY = y;
        bg.sx = x;
        bg.sy = y;
        mapMovX = x;
        mapMovY = y;
        isTouchMove = false;         
} 