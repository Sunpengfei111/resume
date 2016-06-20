var oWrap = document.getElementById("wrap");
var oLis = oWrap.getElementsByTagName("li");
var oDiv = utils.children(oWrap,"div");
function fn(n) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = "";
        utils.removeClass(oDiv[i],"content");
    }
    oLis[n].className = "select";
    utils.addClass(oDiv[n],"content");
}


for (var i = 0; i < oLis.length; i++) {
    oLis[i].shengfenzheng = i;
    oLis[i].onmousemove = function () {
        fn(this.shengfenzheng)
    }
}

for ( i = 0; i < oLis.length; i++) {
    (function (j) {
        oLis[i].onmousemove = function () {
            fn(j)
        }
    })(i);
} //异步：你做我也同时在做  把异步的用自执行函数包起来


function fn() {
    for (var j = 0; j < oLis.length; j++) {
        +(function (n) {
            oLis[j].onmousemove = function () {
                for (var i = 0; i < oLis.length; i++) {
                    oLis[i].className = "";
                    utils.removeClass(oDiv[i],"content");
                }
                oLis[n].className = "select";
                utils.addClass(oDiv[n],"content");
            };
        })(j)
    }
}
fn();
