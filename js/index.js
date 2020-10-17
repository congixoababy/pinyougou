/*
 * @Author: mikey.zhaopeng 
 * @Date: 2020-10-18 03:40:46 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-18 04:51:59
 */

// 首页轮播图

window.addEventListener('load', function(){
    // 获取元素
    var focus = document.querySelector('.focus');
    // 获取左右按钮
    var arrow_prev = document.querySelector('.arrow_prev');
    var arrow_next = document.querySelector('.arrow_next');
    var focusWidth = focus.offsetWidth;
    // 显示和隐藏按钮
    focus.addEventListener('mouseenter', function(){
        // 显示
        arrow_prev.style.display = 'block';
        arrow_next.style.display = 'block';
    });
    focus.addEventListener('mouseleave', function(){
        // 隐藏
        arrow_prev.style.display = 'none';
        arrow_next.style.display = 'none';
    });
    // 添加 圆点
    // 获取图片数量
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    for(var i = 0; i < ul.children.length; i++){
        // 创建圆点
        var li = document.createElement('li');
        // 添加索引号
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 点击圆点 添加类名
        li.addEventListener('click', function(){
            // 清除其他 再添加
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';
            };
            this.className = 'current';
            // 点击圆点 图片移动
            // ul 的移动距离 小圆点的索引号 * 图片的宽度 负值
            var index = this.getAttribute('index');
            // 点击 li 时 把索引号给到 num
            arrowNum = index;
            circleNum = index;
            animate(ul, -index * focusWidth);
        });
    };
    
    // 给第一个圆点添加 current 类名
    ol.children[0].className = 'current';



    // 克隆第一张图片到最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 点击右边按钮 显示下一张
    var arrowNum = 0;
    // circleNum 控制圆圈的播放
    var circleNum = 0;
    arrow_next.addEventListener('click', function(){
        // 无缝处理
        if(arrowNum == ul.children.length - 1){
            ul.style.left = 0;
            arrowNum = 0;
        }
        // console.log(arrowNum);
        arrowNum++;
        animate(ul, -arrowNum * focusWidth);
        circleNum++;
        // if(circleNum == ol.children.length){
        //     circleNum = 0;
        // };
        circleNum = circleNum == ol.children.length ? 0 : circleNum;
        circleChange();
    });

    // 点击左边按钮显示上一张
    arrow_prev.addEventListener('click', function(){
        // 无缝处理
        if(arrowNum == 0){
            arrowNum = ul.children.length - 1;
            ul.style.left = -arrowNum * focusWidth + 'px';
            // arrowNum = ul.children.length - 1;
        }
        // console.log(arrowNum);
        arrowNum--;
        animate(ul, -arrowNum * focusWidth);
        circleNum--;
        // if(circleNum < 0){
        //     circleNum = ol.children.length - 1;
        // };
        circleNum = circleNum < 0 ? ol.children.length - 1 : circleNum;
        circleChange();
    });
    function circleChange(){
         // 先清除 再添加
         for(var i = 0; i < ol.children.length; i++){
             ol.children[i].className = '';
         }
         ol.children[circleNum].className = 'current';
    }
});
