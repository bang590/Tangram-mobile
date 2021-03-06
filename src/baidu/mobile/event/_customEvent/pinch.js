/*
 * Tangram Mobile
 * Copyright 2010 Baidu Inc. All rights reserved.
 * 
 * path: baidu.mobile/event/_customEvent/pinch.js
 * author: bang
 * version: 1.0.0
 * date: 2010/12/6
 */

///import baidu.mobile.event._customEvent;
///import baidu.mobile.event.on

 /**
 * 双手指放大/缩小/旋转事件
 *          封装gesture三个事件，同时在pinch时屏蔽touch的三个事件。
 * @param {HTMLelem} elem  目标元素
 * @param {Function}   listener 事件监听器
 * @return {Object}   handlers   事件侦听hash对象
 */
baidu.mobile.event._customEvent.pinch = function (elem, listener) {
    var 
        stopFunc = function(e) {
            e.stopPropagation();
            e.preventDefault();
        },
        setEvent = function(elem, type) {
            var touchEvts = ["touchstart", "touchmove", "touchend"],
                i = touchEvts.length;
            while (i --) {
                elem[type](touchEvts[i], stopFunc, false);
            }
        },
        handlers = {
            gesturestart : function(e) {
                setEvent(elem, "addEventListener");
            },
            gestureend : function(e) {
                setEvent(elem, "removeEventListener");
            },
            gesturechange : listener
        };
    return handlers;
};