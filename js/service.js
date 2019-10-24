$(function () {
    var viewportHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var positionTop1 = $(".banner").height()+1317;
    var positionTop2 = $(".banner").height()+1317+500;
    var positionTop3 = $(".banner").height()+1317+650;
    var positionTop4 = $(".banner").height()+1317+802;
    var positionTop5 = $(".banner").height()+1317+1125;
    var positionTop6 = $(".banner").height()+1317+1331;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if(positionTop1-scrollTop<viewportHeight){
            $("svg g").eq(0).css({
                "stroke-dasharray": 64,
                "stroke-dashoffset": 64,
                "animation": "one 0.3s linear 1",
                "animation-fill-mode": "forwards",
            });
            setTimeout(function () {
                $(".service_step").eq(0).fadeIn(500);
            },300);
        }
        if(positionTop2-scrollTop<viewportHeight){
            $("svg g").eq(1).css({
                "stroke-dasharray": 24,
                "stroke-dashoffset": 24,
                "animation": "two 0.4s linear 1",
                "animation-fill-mode": "forwards",
            });
            $("svg g").eq(2).css({
                "stroke-dasharray": 699,
                "stroke-dashoffset": 699,
                "animation": "three 2s linear 1",
                "animation-fill-mode": "forwards",
            });
            setTimeout(function () {
                $(".service_step").eq(1).fadeIn(500);
            },2000);
        }
        if(positionTop3-scrollTop<viewportHeight){
            $("svg g").eq(3).css({
                "stroke-dasharray": 576,
                "stroke-dashoffset": 576,
                "animation": "four 2s linear 1",
                "animation-fill-mode": "forwards",
            });
            setTimeout(function () {
                $(".service_step").eq(2).fadeIn(500);
            },2000);
            setTimeout(function () {
                $("svg g").eq(4).css({
                    "stroke-dasharray": 165,
                    "stroke-dashoffset": 165,
                    "animation": "five 0.5s linear 1",
                    "animation-fill-mode": "forwards",
                });
            },2000);
            setTimeout(function () {
                $(".service_step").eq(3).fadeIn(500);
            },2500);
            setTimeout(function () {
                $("svg g").eq(5).css({
                    "stroke-dasharray": 884,
                    "stroke-dashoffset": 884,
                    "animation": "six 2.5s linear 1",
                    "animation-fill-mode": "forwards",
                });
            },2500)
            setTimeout(function () {
                $(".service_step").eq(4).fadeIn(500);
            },3500);
            setTimeout(function () {
                $(".service_step").eq(5).fadeIn(500);
            },5000);
        }
        if(positionTop4-scrollTop<viewportHeight){
            $("svg g").eq(6).css({
                "stroke-dasharray": 116,
                "stroke-dashoffset": 116,
                "animation": "four 1s linear 1",
                "animation-fill-mode": "forwards",
            });
            setTimeout(function () {
                $(".service_step").eq(6).fadeIn(500);
            },1000);
        }
        if(positionTop5-scrollTop<viewportHeight){
            $("svg g").eq(7).css({
                "stroke-dasharray": 1025,
                "stroke-dashoffset": 1025,
                "animation": "four 3s linear 1",
                "animation-fill-mode": "forwards",
            });
            setTimeout(function () {
                $(".service_step").eq(7).fadeIn(500);
            },1500);
            setTimeout(function () {
                $(".service_step").eq(8).fadeIn(500);
            },2000);
            setTimeout(function () {
                $(".service_step").eq(9).fadeIn(500);
            },3000);
            setTimeout(function () {
                $("svg g").eq(8).css({
                    "stroke-dasharray": 252,
                    "stroke-dashoffset": 252,
                    "animation": "four 1s linear 1",
                    "animation-fill-mode": "forwards",
                });
            },3000);
            setTimeout(function () {
                $(".service_step").eq(10).fadeIn(500);
            },4000);
            setTimeout(function () {
                $("svg g").eq(9).css({
                    "stroke-dasharray": 318,
                    "stroke-dashoffset": 318,
                    "animation": "four 1s linear 1",
                    "animation-fill-mode": "forwards",
                });
            },4000);
            setTimeout(function () {
                $(".service_step").eq(11).fadeIn(500);
            },5000);
        }
        if(positionTop6-scrollTop<viewportHeight){
            $("svg g").eq(10).css({
                "stroke-dasharray": 215,
                "stroke-dashoffset": 215,
                "animation": "four 1s linear 1",
                "animation-fill-mode": "forwards",
            });
            setTimeout(function () {
                $(".service_step").eq(12).fadeIn(500);
            },1000);
            setTimeout(function () {
                $("svg g").eq(11).css({
                    "stroke-dasharray": 109,
                    "stroke-dashoffset": 109,
                    "animation": "four 0.5s linear 1",
                    "animation-fill-mode": "forwards",
                });
            },1000);
            setTimeout(function () {
                $(".service_step").eq(13).fadeIn(500);
            },1500);
            setTimeout(function () {
                $("svg g").eq(12).css({
                    "stroke-dasharray": 374,
                    "stroke-dashoffset": 374,
                    "animation": "four 1s linear 1",
                    "animation-fill-mode": "forwards",
                });
            },1500);
        }
    });
    /*$("svg g").eq(0).css({
        "stroke-dasharray": 64,
        "stroke-dashoffset": 64,
        "animation": "one 1s linear 1",
        "animation-fill-mode": "forwards",
    });*/

})