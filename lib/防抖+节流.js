/***
 * @creater:ACBash
 * @create_time:23-3-15 11:22:11
 * @last_modify:ACBash
 * @modify_time:23-4-8 14:41:28
 * @line_count:34
 **/

//防抖，回城，输入框，窗口化
function debounce(fn, delay = 1000) {
    let time = null;

    function _debounce(...args) {
        if (time != null) {
            clearTimeout(time);
        }

        time = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }

    return _debounce;
}

//节流，等CD，强制的按频率来执行函数
function throttle(fn, interval) {
    let lastTime = 0;

    function _throttle(...args) {
        let nowTime = new Date().getTime();
        let remainTime = nowTime - lastTime;

        if (remainTime >= interval) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    }

    return _throttle;
}
