!function () {
    var banner = document.getElementById('banner'),
        boxImg = document.getElementById('box'),
        jsonData = null;
    ~function dataBind() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'banner.txt?_=' + Math.random(), false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                jsonData = utils.jsonParse(xhr.responseText);
            }
        };
        xhr.send(null);
    }();


    ~function () {
        if (jsonData) {
            var ary = [],
                n = 0,
                a = 0,
                b = 0,
                str1 = '',
                str = '';
            /*组装轮播大图*/
            str1 = '<img id="before" src="' + jsonData[0].img + '"/>';
            banner.innerHTML = str1;
            var beforeImg = document.getElementById('before');
            for (var i = 0; i < jsonData.length; i++) {
                ary.push(jsonData[i]);
            }


            /*组装按钮*/
            function zu() {
                for (var j = 0; j < jsonData.length; j++) {
                    var cur = jsonData[j];
                    str += '<div class="mask"><img src="' + cur.img + '"/><i></i></div>';
                }
                boxImg.innerHTML = str;
                var boxFirst = boxImg.getElementsByTagName("img")[0];
                boxFirst.className = "selected";
                utils.next(boxFirst).style.display = "none";
            }

            zu();
            /*自动循环播放*/
            window.timer = null;
            var run = auto;
            window.clearTimeout(timer);
            function auto(ary, n) {
                window.clearTimeout(timer);
                window.timer = setTimeout(function () {/*滑过清除动画start*/
                    banner.addEventListener("mouseover", function () {
                        window.clearTimeout(timer);
                    }, false);
                    banner.addEventListener("mouseout", function () {
                        run(ary, n);
                    }, false);
                    /*滑过清除动画end*/




                    if (ary.length) {
                        /*var btnLeft = document.getElementById("btn-left"),
                         btnRight = document.getElementById("btn-right");
                         btnRight.onclick=auto;
                         btnLeft.addEventListener('click', function () {
                         if (n <= 0) {
                         n = imgList.length - 1;
                         run(ary, n);
                         }
                         n--;
                         changeTips();

                         }, false);*/

                       /* function change(){*/

                        var imgTop = ary[n++],
                            imgSrc = imgTop.img,
                            imgList = boxImg.getElementsByTagName("img"),
                            iList = boxImg.getElementsByTagName("i");
                        beforeImg.src = imgSrc;
                        for (var i = 0; i < imgList.length; i++) {
                            imgList[i].className = null;
                            iList[i].style.display = "block";
                        }

                        imgList[a++].className = "selected";
                        iList[b++].style.display = "none";
                       /* }
                        change();*/

                        /*左右按钮start*/
                        /*var btnLeft = document.getElementById("btn-left"),
                         btnRight = document.getElementById("btn-right");
                         btnRight.addEventListener('click', function () {

                         run(ary, n);
                         }, false);
                         btnLeft.addEventListener('click', function () {
                         if (n <= 0) {
                         n = imgList.length + 1;
                         }
                         n--;
                         run(ary, n);
                         changeTips();
                         }, false);
                         /!*左右按钮end*!/
                         */
                        /*焦点对齐start*/
                        /*~function () {
                            var imgList = boxImg.getElementsByTagName("img");
                            console.log(imgList.length)
                            for (i = 0; i < imgList.length; i++) {
                                var cur = imgList[i];
                                cur.index = i;
                                cur.addEventListener('mouseover', function () {
                                    n = this.index;
                                    //change();
                                }, false);
                                cur.addEventListener('mouseout',function(){
                                    run(ary,n)
                                })
                            }
                        }();*/


                        /*焦点对齐end*/

                        /*过界判断*/
                        if (n > ary.length - 1) {
                            n = a = b = 0;
                            run(ary, n);
                        } else {
                            run(ary, n);
                        }
                        /*过界判断*/

                    }
                }, 800 * 2);
            }

            run(ary, n);
        }
    }();
}();