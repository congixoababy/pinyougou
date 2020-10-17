/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-09-06 02:39:58 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-18 04:06:41
 */

//动画函数添加回调函数
//缓动动画
// 修改 left值 ， 动画对象需要有定位
// obj 目标值
// target 当前位置
// callback 回调函数
function animate(obj, target, callback){
    // 初始化定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 步长写到定时器里面
         var step = (target - obj.offsetLeft ) / 10;
         step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 当移动距离 超过目标值时 清除定时器
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            // 回调函数写到定时器结束位置
            if(callback){
                callback();
            }
        }
        // 将移动距离变为一个慢慢变小的值，步长：（目标值 - 当前位置）/10
        obj.style.left =  obj.offsetLeft + step + 'px';
    },15);
};

/*  //调用animate文件函数
	animate(con,-120,function(){
		box.children[0].innerHTML = '&rarr;';
	});
 */