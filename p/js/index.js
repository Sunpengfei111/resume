
/*回到顶部start*/
~function(){
    var aLink = document.getElementById('link');
    aLink.onclick = function (){
        var duration = 500;
        var distance = utils.win('scrollTop');
        var interval = 10;
        var step = (distance/duration)*interval;
        var timer = window.setInterval(function (){
            if(utils.win('scrollTop') <= 0){
                window.clearInterval(timer);
                window.onscroll = showBtn;
                return;
            }
            var srcollTop = utils.win('scrollTop');
            srcollTop -= step;
            utils.win('scrollTop',srcollTop);
        },interval);
        window.onscroll = null;
        this.style.display = 'none';
    };
    window.onscroll = showBtn;

    function showBtn(){
        var winScrollTop = utils.win('scrollTop');
        var screenHeight = utils.win('clientHeight');
        if(winScrollTop-screenHeight > 0){
            aLink.style.display = 'block';
        }else{
            aLink.style.display = 'none';
        }
        callBack();
    }

    function callBack(){
        var reTurn=document.getElementById("return"),
            link=document.getElementById("link");
        link.onmouseenter=function(e){
            reTurn.style.display="block";
        };
        link.onmouseleave=function(e){
            reTurn.style.display="none";
        };

    }

}();
/*回到顶部end*/


/*推拉门start*/
~function(){
    var zhufengEffect = {
        //匀速
        Linear: function (t, b, c, d) {
            return c * t / d + b;
        }
    };
    /*function bind(ele,type,callBack){

        if(typeof ele.addEventListener==="Function"){
            ele.addEventListener(ele,type,callBack,false);
        }else if(ele.addEventListener==="FUnction"){
            ele.attachEvent("on"+type,callBack);
        }
    }

    function mouseoverHandler(e){

        var target= e.target|| e.srcElement;
        var wrapper=document.getElementById("wrapper");
        var oLis=wrapper.getElementsByTagName("li");
        for(var i=0;i<oLis.length;i++){
            oLis[i].className="";
        }
        while(target.tagName!="LI"||target.tagName=="BODY"){
            target=target.parentNode;
        }
        oLis[i].className='big';
        console.log('ok');
    }

    function initList(){

        var wrapper=document.getElementById("wrapper");
        var oLis=wrapper.getElementsByTagName("li");
        for(var i=0;i<oLis.length;i++){
            bind(oLis[i],'mouseover',mouseoverHandler);
        }
    }*/
    //initList();

    var move=function(){
        var wrapper=document.getElementById("wrapper");
        var oLis=wrapper.getElementsByTagName("li");
        var step=0;
        var linear=zhufengEffect.Linear;
        for(var i=0;i<oLis.length;i++){
            var curLi=oLis[i];
            curLi.selfIndex = i;
            curLi.onmouseenter=function(){
                step= this.selfIndex;
                if(step==4){
                    zhufengAnimate(wrapper,{left: -(step-1)*248},300,linear);
                }else{
                    zhufengAnimate(wrapper,{left: -step*248},300,linear);
                }
                this.style.width=992+'px';
            };
            curLi.onmouseleave=function(){
                zhufengAnimate(wrapper,{left: 0},300);
                this.style.width=248+'px';
                //this.style.transition="width linear 0.3s";
            };
        }
    };
    move();
}();
/*推拉门end*/


/*导航隐现 start*/
~function(){
    var fix=document.getElementById("fix");
    /*window.onscroll=function(){
        var winScrollTop = utils.win('scrollTop');
        winScrollTop-=1;
        var nowScrollTop=utils.win('scrollTop');
        if(nowScrollTop<winScrollTop){
            console.log(nowScrollTop<winScrollTop) ;
            fix.style.display = 'block';
        }
        if(winScrollTop+=1||winScrollTop>=123){
            fix.style.display = 'none';
            console.log(nowScrollTop);
            /!*if(nowScrollTop--){
             fix.style.display = 'block';console.log(nowScrollTop);
             }*!/
        }
    }*/
}();

/*导航隐现 end*/

/*登录页start*/
~function(){
    var login = document.getElementsByClassName("log")[0];
    var close = document.getElementsByClassName("close")[0];
    var oWrap = document.getElementById("wrap");
    login.addEventListener("click",function(){
        oWrap.style.display="block";
    },false);
    close.addEventListener("click",function(){
        oWrap.style.display="none";
    },false);
}();
/*登录页end*/









