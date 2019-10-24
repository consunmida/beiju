$(function () {
    /*------------------------------type1------------------------------*/
    function type1_static($this) {
        var pWidth = $this.parent().width();
        $this.css({
            "width":pWidth,
        });
        $this.children("img").css({
            "width":pWidth,
        });
        var left = pWidth - $this.width();
        $this.children("img").css({
            "left":left,
        });
        $this.children("img").css({
            "margin-top":-1*$this.children("img").height()*176/390
        });
    }
    type1_static($(".type1"))
    var type1_flag = 0;
    function type1_animate($this,width) {
        if(type1_flag == 0){
            type1_flag = 1;
            var pWidth = $this.parent().width();
            $this.animate({
                "width":width,
                "left":(pWidth - width)/2,
                "margin-top":-1*width/282*390*176/390,
            },1000,function () {
                var pWidth = $(".type1 img").parent().width();
                $(".type1 img").animate({
                    "width":pWidth,
                    "left":(pWidth - pWidth)/2,
                    "margin-top":-1*pWidth/282*390*176/390,
                },1000,function () {
                    type1_flag = 0;
                });
            });
        }
    }
    $(".typeList li").eq(0).hover(function () {
        type1_animate($(".type1 img"),800);
    },function () {

    });
    /*------------------------------type2------------------------------*/
    var type2_flag = 0;
    function type2() {
        if(type2_flag == 0){
            type2_flag = 1;
            $(".type2 .fans1").css({
                "left":"-20px",
                "top":"-215px",
            });
            $(".type2 .fans2").css({
                "right":"-172px",
                "top":"107px",
            });
            $(".type2 .fans3").css({
                "right":"-141px",
                "bottom":"-233px",
            });
            $(".type2 .fans4").css({
                "left":"-193px",
                "bottom":" -130px",
            });
            $(".type2 .fans5").css({
                "left":"-213px",
                "top":"76px",
            });
            $(".type2_wrap").css({
                "width":$(".type2_wrap").parent().width(),
                "left":"6px",
            });
            $(".type2").css({
                "width":$(".type2").parent().width(),
                "left":"0px",
            });
            $(".type2").rotate({
                center:["50%","50%"],
                angle: -90,
                animateTo: 0,
                easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                    return c*(t/d)+b;
                }
            });
            $(".type2 .fans1").animate({
                "left":"-20px",
                "top":"80px",
            },1000);
            $(".type2 .fans1").rotate({
                center:["50%","50%"],
                animateTo: 90,
                easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                    return c*(t/d)+b;
                }
            });
            $(".type2 .fans2").animate({
                "right":"18px",
                "top":"123px",
            },1000);
            $(".type2 .fans2").rotate({
                center:["50%","50%"],
                animateTo: 90,
                easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                    return c*(t/d)+b;
                }
            });
            $(".type2 .fans3").animate({
                "right":"-140px",
                "bottom":"-206px",
            },1000);
            $(".type2 .fans3").rotate({
                center:["50%","50%"],
                animateTo: 90,
                easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                    return c*(t/d)+b;
                }
            });
            $(".type2 .fans4").animate({
                "left":"-48px",
                "bottom":"0px",
            },1000);
            $(".type2 .fans4").rotate({
                center:["50%","50%"],
                animateTo: 90,
                easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                    return c*(t/d)+b;
                }
            });
            $(".type2 .fans5").animate({
                "left":"14px",
                "top":"50px",
            },1000,function () {
                type2_flag = 0;
            });
            $(".type2 .fans5").rotate({
                center:["50%","50%"],
                animateTo: 90,
                easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                    return c*(t/d)+b;
                }
            });
        }
    }
    function type2_static() {
        $(".type2_wrap").css({
            "width":$(".type2_wrap").parent().width(),
            "left":"6px",
        });
        $(".type2").css({
            "width":$(".type2").parent().width(),
            "left":"0px",
            "transform": "rotate(0deg)",
            "transform-origin": "50% 50% 0px"
        });
        $(".type2 .fans1").css({
            "left":"-20px",
            "top":"80px",
            "transform": "rotate(90deg)",
            "transform-origin": "50% 50% 0px"
        });
        $(".type2 .fans2").css({
            "right":"18px",
            "top":"123px",
            "transform": "rotate(90deg)",
            "transform-origin": "50% 50% 0px"
        });
        $(".type2 .fans3").css({
            "right":"-140px",
            "bottom":"-206px",
            "transform": "rotate(90deg)",
            "transform-origin": "50% 50% 0px"
        });
        $(".type2 .fans4").css({
            "left":"-48px",
            "bottom":"0",
            "transform": "rotate(90deg)",
            "transform-origin": "50% 50% 0px"
        });
        $(".type2 .fans5").css({
            "left":"14px",
            "top":"50px",
            "transform": "rotate(90deg)",
            "transform-origin": "50% 50% 0px"
        });
    }
    type2_static();
    $(".typeList li").eq(1).mouseenter(function () {
        type2()
    });
    /*------------------------------type3------------------------------*/
    var type3_flag = 0;
    function type3() {
        if(type3_flag == 0){
            type3_flag = 1;
            $(".type3_wrap").css({
                "width":$(".type3_wrap").parent().width(),
                "left":"12px",
            });
            $(".type3").css({
                "width":$(".type3").parent().width(),
                "left":"0",
            });
            $(".type3 .circle1").css({
                "width":"184px",
                "height":"184px",
                "margin-left":"-92px",
                "top":"-184px"
            });
            $(".type3 .circle2").css({
                "width":"184px",
                "height":"184px",
                "margin-left":"-92px",
                "bottom":"-184px"
            });
            $(".type3 .circle1").animate({
                "top":"80px",
            },800,function () {
                $(".type3").rotate({
                    center:["50%","50%"],
                    angle:0,
                    animateTo: 180,
                    duration:800,
                    easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
                        //console.log(c*(t/d)+b);
                        //console.log(d);
                        return c*(t/d)+b;
                    }
                });
                $(".type3 .circle1").animate({
                    "width":"230px",
                    "height":"230px",
                    "margin-left":"-115px",
                    "top":"40px"
                },800)
                $(".type3 .circle2").animate({
                    "width":"230px",
                    "height":"230px",
                    "margin-left":"-115px",
                    "bottom":"40px"
                },800,function () {
                    type3_flag = 0;
                })
            });
            $(".type3 .circle2").animate({
                "bottom":"80px",
            },800);
        }
    }
    function type3_static(){
        $(".type3_wrap").css({
            "width":$(".type3_wrap").parent().width(),
            "left":"12px",
        });
        $(".type3").css({
            "width":$(".type3").parent().width(),
            "left":"0",
            "transform": "rotate(180deg)",
            "transform-origin": "50% 50% 0px"
        });
        $(".type3 .circle1").css({
            "width":"230px",
            "height":"230px",
            "margin-left":"-115px",
            "top":"40px"
        })
        $(".type3 .circle2").css({
            "width":"230px",
            "height":"230px",
            "margin-left":"-115px",
            "bottom":"40px"
        })
    }
    type3_static();
    $(".typeList li").eq(2).mouseenter(function () {
        type3()
    });
    /*------------------------------type4------------------------------*/
    var type4_flag = 0;
    function type4() {
        if(type4_flag == 0){
            type4_flag = 1;
            $(".type4").css({
                "width":$(".type4").parent().width(),
                "left":"18px",
            });
            $(".type4 img").css({
                "right":"48px"
            });
            $(".type4 img").animate({
                "right":"-497px"
            },1000,function () {
                $(".type4 img").css({
                    "right":"282px"
                });
                $(".type4 img").animate({
                    "right":"48px"
                },500,function () {
                    type4_flag = 0;
                });
            })
        }
    }
    function type4_static(){
        $(".type4").css({
            "width":$(".type4").parent().width(),
            "left":"18px",
        });
        $(".type4 img").css({
            "right":"48px"
        });
    }
    type4_static();
    $(".typeList li").eq(3).hover(function () {
        type4()
    },function () {
    });
});