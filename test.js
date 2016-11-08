/**
 * Created by puhongru on 2016/11/1.
 */
/*

var http = require('http');

http.createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on("data",function (chunk) {
        body.push(chunk);
    });

    request.on('end',function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World\n');
}).listen(8124);*/

/*
var http = require('http');
var options = {
    hostname:'www.example.com',
    port:80,
    path:'/upload',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencodeed'
    }
};

var request = http.request(options,function (response) {});

request.write('hello world');
request.end();*/

/*
var http = require('http');

http.get('http://www.baidu.com/',function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data',function (chunk) {
        body.push(chunk);
    });

    response.on('end',function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});*/

var http = require('http');
var zlib = require('zlib');
var options = {
    hostname:'www.baidu.com',
    port:80,
    path:'/',
    method:'GET',
    header:{
        'Accept-Encoding':'gzip,deflate'
    }
};

http.request(options,function (response) {
    var body = [];

    response.on('data',function (chunk) {
        body.push(chunk);
    });

    response.on('end',function () {
        body = Buffer.concat(body);

        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip (body, function (err,data) {
                console.log(data.toString());
            });
        }
        else {
            console.log(data.toString());
        }
    });
}).end();