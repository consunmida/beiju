$(function () {
    var prev = 0;var special = 0;var waitTime;
    var liCount = $(".imgList li").length;
    function banner() {
        var bannerWidth = $(".banner").width();
        $(".bannerList").css("width",3*bannerWidth);
        $(".bannerList li").css("width",bannerWidth);
    }
    function nextLi(background) {
        $(".bannerList").children("li").eq(2).css("background",background);
        $(".bannerList").animate({
            left:"-200%"
        },1000,function () {
            $(".bannerList").children("li").eq(1).css("background",background);
            $(".bannerList").css({left:"-100%"});
            $(".bannerList").children("li").eq(2).css("background","none");
        });
    }
    function prevLi(background) {
        $(".bannerList").children("li").eq(0).css("background",background);
        $(".bannerList").animate({
            left:"0"
        },1000,function () {
            $(".bannerList").children("li").eq(1).css("background",background);
            $(".bannerList").css({left:"-100%"});
            $(".bannerList").children("li").eq(0).css("background","none");
        });
    }
    function bannerSlider(next) {
        var background = $(".imgList li").eq(next).css("background");
        $(".banner ol li").eq(next).addClass("active").siblings("li").removeClass("active");
        if(prev<next){
            if(special==1){
                prevLi(background);
            }else{
                nextLi(background);
            }
        }else if(prev>next){
            if(special==1){
                nextLi(background);
            }else{
                prevLi(background);
            }
        }
        prev = next;
        waitTime=0;
    }
    function ol() {
        for(var i=0;i<liCount;i++){
            $(".banner ol").append("<li></li>");
        }
        $(".banner ol").css("marginLeft","-"+$(".banner ol").width()/2+"px")
    }
    banner();
    ol();
    bannerSlider(0);
    $("ol>li").click(function () {
        bannerSlider($(this).index());
        $(this).index()
    });
    /*触摸滑动*/
    var x1 = 0;var x2 = 0;
    $(".banner")[0].addEventListener("touchstart",function (event) {
        var touch = event.touches[0]; //获取第一个触点
        x1 = Number(touch.pageX); //页面触点X坐标
    }, false)
    $(".banner")[0].addEventListener("touchmove",function (event) {
        var touch = event.touches[0]; //获取第一个触点
        x2 = Number(touch.pageX); //页面触点X坐标
    }, false)
    $(".banner")[0].addEventListener("touchend",function (event) {
        if(x1-x2>10){
            var next = prev + 1;
            if(next>liCount-1){
                special = 1;
                next = 0;
            }else{
                special = 0;
            }
            bannerSlider(next);
        }else if(x1-x2<-10){
            var next = prev - 1;
            if(next<0){
                special = 1
                next = liCount-1;
            }else{
                special = 0;
            }
            bannerSlider(next);
        }
    }, false);
    /*自动*/
    setInterval(function () {
        if(waitTime==7000){
            var next = prev + 1;
            if(next>liCount-1){
                special = 1;
                next = 0;
            }else{
                special = 0;
            }
            bannerSlider(next);
        }
    },7000);
    setInterval(function () {
        if(waitTime<7000){
            waitTime+=100;
        }
    },100);
});
$(window).resize(function(){
    var bannerWidth = $(".banner").width();
    $(".bannerList").css("width",3*bannerWidth);
    $(".bannerList li").css("width",bannerWidth);
});