/*理念*/
function thinking() {
    var width = $(".thinking").width()
    var height = $(".thinking").height();
    $(".thinking").css({
        "marginLeft":-(width/2),
        "marginTop":-(height/2)
    });
}
/*类别*/
function type() {
    var height = $(".typeList>li").height();
    $(".typeList>li").css({
        "paddingTop":(height/6)
    });
    $(".typeList>li img").css({
        "marginBottom":(height/54*8)
    });
    $(".typeList>li>h3").css({
        "marginBottom":(height/54*4)
    });
    $(".typeList>li>ul h3").css({
        "marginTop":(height/540*80),
        "marginBottom":(height/540*60),
    });
}
/*流程*/
function line(){
    var height = $(".third").height();
    $(".third h2").css({
        "paddingTop":height/1080*80,
    });
    $(".third ul").css({
        "bottom":height/1080*200,
    });
    $(".third .point img").css({
        "bottom":height/1080*36,
        "height":height/1080*223
    });
    $(".third .point .works").css({
        "bottom":height/1080*259,
    });
    $(".third .process img").css({
        "bottom":height/1080*150,
    });
    $(".third .process p.text1").css({
        "bottom":height/1080*150,
    });
    $(".third .process p.text2").css({
        "bottom":height/1080*95,
    });
}
/*亮点*/
function dna() {
    var width = $(".forth").width();
    var height = $(".forth").height();
    $(".forth img").css({
        "height":height/1080*112,
        "marginTop":height/1080*167
    });
    $(".forth .left").css({
        "top":height/1080*300,
        "left":width/1920*100,
        "width":width/1920*420
    });
    $(".forth .right").css({
        "top":height/1080*300,
        "right":width/1920*100,
        "width":width/1920*420
    });
    $(".forth .middle").css({
        "top":height/1080*380,
        "width":width/1920*420,
        "marginLeft":-(width/1920*420/2),
    });
    $(".forth h2").css({
        "marginBottom":height/1080*40,
    });
}
/*contact*/
function contact() {
    var height = $(".fifth").height();
    $(".fifth").css({
        "paddingTop":height/1080*50,
    })
    $(".fifth h2").css({
        "marginBottom":height/1080*20
    });
    $(".fifth .contactMessage").css({
        "marginBottom":height/1080*50
    });
    $(".formGroup").css({
        "height":height/1080*51,
        "marginBottom":height/1080*21,
        "line-height":height/1080*51+"px",
    });
    $("textarea").css({
        "height":height/1080*140,
        "marginBottom":height/1080*21,
    });
    $("button").css({
        "height":height/1080*51,
    });
}
$(function () {
    thinking();
    type();
    line();
    dna();
    contact();
});
$(window).resize(function () {
    thinking();
    type();
    line();
    dna();
    contact();
});