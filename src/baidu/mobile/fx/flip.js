/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/fx/flip.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.fx.start

/**
 * 翻转效果
 * @param {HTMLelem} elem  目标元素
 * @param {Object} options 选项 
 *        参考baidu.mobile.fx.start，忽略from to参数，新增：
 *        {
 *            out : {boolean} false    //运动类型是否为out(从正常显示运动到消失)
 *            direction : {string}  "left" || "right" || "up" || "down"  //运动方向
 *        }
 */
baidu.mobile.fx.flip = function(elem, options) {
    var 
        options = options || {},
        direction = options.direction || "left",
        out = options.out,
        isHori = direction == 'up' || direction == 'down',
        
        rotateProp = isHori ? "X" : "Y",
        fromScale = out ? 1 : 0.8,
        toScale = out ? 0.8 : 1,
        fromRotate = out ? 0 : 180,
        toRotate = out ? -180 :0;

    if (direction == 'right' || direction == 'down') {
        toRotate *= -1;
        fromRotate *= -1;
    }

    options.from = {
        'webkitTransform': 'rotate' + rotateProp + '(' + fromRotate + 'deg) scale(' + fromScale + ')',
        'webkitBackfaceVisibility': 'hidden'
    };
    options.to = {
        'webkitTransform': 'rotate' + rotateProp + '(' + toRotate + 'deg) scale(' + toScale + ')',
        'webkitBackfaceVisibility': 'hidden'
    };
    
    baidu.mobile.fx.start(elem, options);
};