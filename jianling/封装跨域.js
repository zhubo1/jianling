/**
 * Created by Administrator on 2017/3/22.
 */
const jsonp = (url, params, callback) => {
    'use strict'
    let script = document.createElement('script'),
        str = '',
        callbackName = 'jsonp_';
    for (let k in params) {
        str += k + '=' + params[k] + '&';
    }
    url += '?' + str;
    callbackName += Math.random().toString().replace(/\./, '');
    url += 'callback=' + callbackName;
    window[callbackName] = function (data) {
        callback(data);
    }
    script.src = url;
    document.body.appendChild(script);
    console.log(url);
}
jsonp(
    'https://api.douban.com/v2/movie/coming_soon',
    {
        'start': 0,
        'count': 5
    },
    function (data) {
        console.log(data);
    }
);