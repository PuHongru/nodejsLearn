/**
 * Created by puhongru on 2016/11/2.
 */
/****************
 *  “Ï≤Ωµ›πÈ±È¿˙
 * **************/
var fs = require('fs');
var path = require("path");

function asyncTravel (dir, callback, finish) {
    fs.readdir(dir, function (err, files) {
        (function next (i) {
            if (i < files.length) {
                var pathname = path.join(dir,files[i]);

                fs.stat(pathname, function (err,stats) {
                    if (stats.isDirectory()) {
                        asynTravelc(pathname, callback, function () {
                            next(i+1);
                        })
                    }
                    else {
                        callback(pathname, function () {
                            next(i+1);
                        })
                    }
                });
            }
            else {
                finish && finish();
            }
        }(0));
    });
}