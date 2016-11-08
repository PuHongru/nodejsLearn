/**
 * Created by puhongru on 2016/11/2.
 */
/****************
*  Í¬²½µÝ¹é±éÀú
* **************/

var fs = require('fs');
var path = require("path");

function travel(dir,callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir,file);

        if(fs.statSync(pathname).isDirectory()) {
            travel(pathname,callback);
        } else {
            console.log(pathname);
            return pathname;
        }
    });
}

//console.log(fs.readdirSync('/html/nodejsLearn'));

travel('/html/nodejsLearn/lib',function(pathname) {
    console.log(pathname);
});