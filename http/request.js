/**
 * Created by puhongru on 2016/11/11.
 */
// ¹àË®ÊÔÑé
/*
Accept:*!/!*
 Accept-Encoding:gzip, deflate
 Accept-Language:zh-CN,zh;q=0.8
 Connection:keep-alive
 Content-Length:184
 Content-Type:application/x-www-form-urlencoded
 Cookie:SINAGLOBAL=4125065718494.445.1477618853139; YF-Ugrow-G0=57484c7c1ded49566c905773d5d00f82; SCF=Aio_nPAVYRvKTGM2UpOIX_Ex0k4UWHcsMm7697HUWkmlevyjqx5Jroi2YcVW8jGcUbutYRGlvNi5BEiCk1AKvHE.; SUB=_2A251IfYuDeTxGedJ7VQQ-S_FyDiIHXVWV2DmrDV8PUNbmtANLUnmkW9SzfduT38ekCpcyMh5pyZvQKn_ew..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9W5Fm2UuFyehQB0oHd-sS9HM5JpX5KMhUgL.Fo2NSoqp1K24e0B2dJLoIfQLxK-L1KeL1hnLxK-L1KqLB.BLxK-L1hMLB-qLxKqLB.2L1K5LxKML12-LB.2LxKqL1hnL1K2LxK-L12qLB-zLxK.L1hzL1KeLxKMLBoBLB-zLxKqLBKeL12zt; SUHB=0QSoAUC8z663V4; ALF=1510390270; SSOLoginState=1478854270; wvr=6; YF-V5-G0=a5a264208a5b5a42590274f52e6c7304; YF-Page-G0=c81c3ead2c8078295a6f198a334a5e82; _s_tentry=login.sina.com.cn; Apache=2029706997242.5886.1478854286057; ULV=1478854286212:4:1:1:2029706997242.5886.1478854286057:1477837095267; wb_publish_fist100_1766191934=1; UOR=www.fgm.cc,widget.weibo.com,login.sina.com.cn
 Host:weibo.com
 Origin:http://weibo.com
 Referer:http://weibo.com/u/1766191934/home?wvr=5&lf=reg
 User-Agent:Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36
 X-Requested-With:XMLHttpRequest*/

var http = require('http');
var querystring = require('querystring');

/*var postData = querystring.stringify({
    'location': 'v6_content_home',
    'text': '\u704c\u6c34\u8bd5\u9a8c biubiubiu'
});*/

/*var options = {
    hostname: 'www.weibo.com',
    port: 80,
    path: '/aj/mblog/add?ajwvr=6&__rnd=1478854446096',
    method: 'POST',
    headers: {
        'Accept': '*!/!*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'SINAGLOBAL=4125065718494.445.1477618853139; YF-Ugrow-G0=57484c7c1ded49566c905773d5d00f82; SCF=Aio_nPAVYRvKTGM2UpOIX_Ex0k4UWHcsMm7697HUWkmlevyjqx5Jroi2YcVW8jGcUbutYRGlvNi5BEiCk1AKvHE.; SUB=_2A251IfYuDeTxGedJ7VQQ-S_FyDiIHXVWV2DmrDV8PUNbmtANLUnmkW9SzfduT38ekCpcyMh5pyZvQKn_ew..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9W5Fm2UuFyehQB0oHd-sS9HM5JpX5KMhUgL.Fo2NSoqp1K24e0B2dJLoIfQLxK-L1KeL1hnLxK-L1KqLB.BLxK-L1hMLB-qLxKqLB.2L1K5LxKML12-LB.2LxKqL1hnL1K2LxK-L12qLB-zLxK.L1hzL1KeLxKMLBoBLB-zLxKqLBKeL12zt; SUHB=0QSoAUC8z663V4; ALF=1510390270; SSOLoginState=1478854270; wvr=6; YF-V5-G0=a5a264208a5b5a42590274f52e6c7304; YF-Page-G0=c81c3ead2c8078295a6f198a334a5e82; _s_tentry=login.sina.com.cn; Apache=2029706997242.5886.1478854286057; ULV=1478854286212:4:1:1:2029706997242.5886.1478854286057:1477837095267; wb_publish_fist100_1766191934=1; UOR=www.fgm.cc,widget.weibo.com,login.sina.com.cn',
        'Host': 'weibo.com',
        'Origin': 'http://weibo.com',
        'Referer': 'http://weibo.com/u/1766191934/home?wvr=5&lf=reg',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};*/

var i = 0;

var timer = setInterval(function () {
    i++;
    (i > 3) && (clearInterval(timer));
    var postData = querystring.stringify({
        'location': 'v6_content_home',
        'text': '\u704c\u6c34\u8bd5\u9a8c biubiubiu' + i
    });
    var options = {
        hostname: 'www.weibo.com',
        port: 80,
        path: '/aj/mblog/add?ajwvr=6&__rnd=1478854446096',
        method: 'POST',
        headers: {
            'Accept': '*!/!*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.8',
            'Connection': 'keep-alive',
            'Content-Length': postData.length,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'SINAGLOBAL=4125065718494.445.1477618853139; YF-Ugrow-G0=57484c7c1ded49566c905773d5d00f82; SCF=Aio_nPAVYRvKTGM2UpOIX_Ex0k4UWHcsMm7697HUWkmlevyjqx5Jroi2YcVW8jGcUbutYRGlvNi5BEiCk1AKvHE.; SUB=_2A251IfYuDeTxGedJ7VQQ-S_FyDiIHXVWV2DmrDV8PUNbmtANLUnmkW9SzfduT38ekCpcyMh5pyZvQKn_ew..; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9W5Fm2UuFyehQB0oHd-sS9HM5JpX5KMhUgL.Fo2NSoqp1K24e0B2dJLoIfQLxK-L1KeL1hnLxK-L1KqLB.BLxK-L1hMLB-qLxKqLB.2L1K5LxKML12-LB.2LxKqL1hnL1K2LxK-L12qLB-zLxK.L1hzL1KeLxKMLBoBLB-zLxKqLBKeL12zt; SUHB=0QSoAUC8z663V4; ALF=1510390270; SSOLoginState=1478854270; wvr=6; YF-V5-G0=a5a264208a5b5a42590274f52e6c7304; YF-Page-G0=c81c3ead2c8078295a6f198a334a5e82; _s_tentry=login.sina.com.cn; Apache=2029706997242.5886.1478854286057; ULV=1478854286212:4:1:1:2029706997242.5886.1478854286057:1477837095267; wb_publish_fist100_1766191934=1; UOR=www.fgm.cc,widget.weibo.com,login.sina.com.cn',
            'Host': 'weibo.com',
            'Origin': 'http://weibo.com',
            'Referer': 'http://weibo.com/u/1766191934/home?wvr=5&lf=reg',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest'
        }
    };
    //postData.text = '\u704c\u6c34\u8bd5\u9a8c biubiubiu' + i;
    var req = http.request(options, function (res) {
        console.log('Status: ' + res.statusCode);
        console.log('headers: ' + JSON.stringify(res.headers));

        res.on('data', function (chunk) {
            console.log(Buffer.isBuffer(chunk));
            console.log(typeof chunk);
        });

        res.on('end', function () {
            console.log('\u8bc4\u8bba\u5b8c\u6bd5\uff01');
        });

        res.on('error', function (e) {
            console.log('Error: ' + e.message());
        });
    });

    req.write(postData);
    req.on('end',function () {
        console.log('end' + i);
    })
},10000);

/*
var req = http.request(options, function (res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    
    res.on('end', function () {
        console.log('\u8bc4\u8bba\u5b8c\u6bd5\uff01');
    });
    
    res.on('error', function (e) {
        console.log('Error: ' + e.message());
    });
});

req.write(postData);
req.end();*/
