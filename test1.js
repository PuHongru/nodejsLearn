/**
 * Created by puhongru on 2016/11/3.
 */
function F () {
    function C () {
        console.log(this);
        return this;
    }
    return C();
}
var o = new F();console.log(o.constructor.name);