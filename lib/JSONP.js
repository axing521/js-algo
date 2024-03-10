function jsonp(url, params, callback) {
    // 生成唯一的回调函数名
    const callbackName = 'jsonp_' + Date.now();

    // 将参数拼接到 URL 中
    const queryString = Object.keys(params)
        .map(
            key =>
                encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
        )
        .join('&');

    // 创建 script 元素
    const script = document.createElement('script');
    script.src = url + '?' + queryString + '&callback=' + callbackName;

    // 定义回调函数
    window[callbackName] = function (data) {
        // 调用回调函数
        callback(data);

        // 删除 script 元素和回调函数
        document.head.removeChild(script);
        delete window[callbackName];
    };

    // 将 script 元素添加到页面中
    document.head.appendChild(script);
}
