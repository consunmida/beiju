function timeLine() {
    var myCanvas = document.getElementById("timeLine");
    var timeLine = myCanvas.getContext('2d');
    /*画圆---声明*/
    function drawPoint(cxt,x,y,r,fillTstyle) {
        /*根据坐标点画圆*/
        cxt.fillStyle = fillTstyle;
        cxt.beginPath();
        cxt.arc(x,y,r,0,Math.PI*2,true);
        cxt.closePath();
        cxt.fill();
    }
    /*画时间节点---声明*/
    function timePiont(x,y) {
        /*var i=0;
        var int = setInterval(function () {
            i=i+0.1
            if(i<=1){
                drawPoint(timeLine,x,y,10,"rgba(153,153,153,"+i+")");
                drawPoint(timeLine,x,y,5,"rgba(0,0,0,"+i+")");
            }else{
                clearInterval(int)
            }
        },1)*/
        drawPoint(timeLine,x,y,10,"#ccc");
        drawPoint(timeLine,x,y,5,"#0096ff");
    }
    /*画圆弧---声明*/
    function curve(cxt,x,y,r,strokeStyle,r0,r1,flag) {
        cxt.beginPath();
        cxt.strokeStyle = strokeStyle;
        cxt.lineWidth = 5.7;
        cxt.arc(x,y,r,r0*0.01*Math.PI,r1*0.01*Math.PI,flag);
        cxt.closePath();
        cxt.stroke();
    }
    /*画直线---声明*/
    function drawLine(cxt,x,y,lineWidth,strokeStyle,flag) {
        if(flag === true){
            cxt.beginPath();
            cxt.moveTo(x,y);
        }
        cxt.lineTo(x,y);//从x0,y0到x1,y1画一条线
        cxt.lineWidth = lineWidth;//线条的宽度
        cxt.strokeStyle = strokeStyle;//线条的颜色
        cxt.stroke();//画线
        cxt.closePath();
    }
    /*第一个时间节点--执行*/
    timePiont(382,10);
    $(".historyText .timePoint").eq(0).fadeIn(500);
    /*第一段动画--执行*/
    var i1 = 19;
    var int1;
    int1 = setInterval(function () {
        if(i1 === 19) {
            drawLine(timeLine, 382, 20, 5, "#f5f5f5", true);
            i1 = i1 + 2;
        }else{
            drawLine(timeLine, 382, i1 += 2, 5, "#f5f5f5", false);
        }
        if(i1 === 187) {
            clearInterval(int1);
            /*第二段动画--执行*/
            var i2 = 0;
            var int2 = setInterval(function () {
                curve(timeLine,302,187, 80, "#f5f5f5", i2, ++i2, false);
                if(i2 === 50) {
                    clearInterval(int2);
                    timePiont(302,267);
                    $(".historyText .timePoint").eq(1).fadeIn(500);
                    var i3 = 292;
                    var int3 = setInterval(function () {
                        if(i3 === 292) {
                            drawLine(timeLine, 292, 267, 5, "#f5f5f5", true);
                            i3 = i3 - 2;
                        }else{
                            drawLine(timeLine, i3 -= 2, 267, 5, "#f5f5f5", false);
                        }
                        if(i3 === 94) {
                            clearInterval(int3);
                            timePiont(94,267);
                            $(".historyText .timePoint").eq(2).fadeIn(500);
                            var i4 = 150;
                            var int4 = setInterval(function () {
                                curve(timeLine, 84, 347, 80, "#f5f5f5", i4, --i4, true);
                                if(i4 === 50) {
                                    clearInterval(int4);
                                    var i5 = 84;
                                    var int5 = setInterval(function () {
                                        if(i5 === 86) {
                                            drawLine(timeLine, 84, 427, 5, "#f5f5f5", true);
                                            i5 = i5 + 2;
                                        }else{
                                            drawLine(timeLine, i5 += 2, 427, 5, "#f5f5f5", false);
                                        }
                                        if(i5 === 302) {
                                            clearInterval(int5);
                                            timePiont(302,427);
                                            $(".historyText .timePoint").eq(3).fadeIn(500);
                                            var i6 = 312;
                                            var int6 = setInterval(function () {
                                                if(i6 === 312) {
                                                    drawLine(timeLine, 312, 427, 5, "#f5f5f5", true);
                                                    i6 = i6 + 2;
                                                }else{
                                                    drawLine(timeLine, i6 += 2, 427, 5, "#f5f5f5", false);
                                                }
                                                if(i6 === 532) {
                                                    clearInterval(int6);
                                                    timePiont(532,427);
                                                    $(".historyText .timePoint").eq(4).fadeIn(500);
                                                    var i7 = 542;
                                                    var int7 = setInterval(function () {
                                                        if(i7 === 542) {
                                                            drawLine(timeLine, 542, 427, 5, "#f5f5f5", true);
                                                            i7 = i7 + 2;
                                                        }else{
                                                            drawLine(timeLine, i7 += 2, 427, 5, "#f5f5f5", false);
                                                        }
                                                        if(i7 === 680) {
                                                            clearInterval(int7);
                                                            var i8 = -50;
                                                            var int8 = setInterval(function () {
                                                                curve(timeLine, 680, 507, 80, "#f5f5f5", i8, ++i8, false);
                                                                if(i8 === 50) {
                                                                    clearInterval(int8);
                                                                    timePiont(680,587);
                                                                    $(".historyText .timePoint").eq(5).fadeIn(500);
                                                                    var i9 = 670;
                                                                    var int9 = setInterval(function () {
                                                                        if(i9 === 670) {
                                                                            drawLine(timeLine, 670, 587, 5, "#f5f5f5", true);
                                                                            i9 = i9 - 2;
                                                                        }else{
                                                                            drawLine(timeLine, i9 -= 2, 587, 5, "#f5f5f5", false);
                                                                        }
                                                                        if(i9 === 462) {
                                                                            clearInterval(int9);
                                                                            var i10 = 150;
                                                                            var int10 = setInterval(function () {
                                                                                curve(timeLine, 462, 667, 80, "#f5f5f5", i10, --i10, true);
                                                                                if(i10 === 100) {
                                                                                    clearInterval(int10);
                                                                                    timePiont(382,667);
                                                                                    $(".historyText .timePoint").eq(6).fadeIn(500);
                                                                                    var i11 = 677;
                                                                                    var int11 = setInterval(function () {
                                                                                        if(i11 === 677) {
                                                                                            drawLine(timeLine, 382, 677, 5, "#f5f5f5", true);
                                                                                            i11 = i11 + 2;
                                                                                        }else{
                                                                                            drawLine(timeLine, 382, i11 += 2, 5, "#f5f5f5", false);
                                                                                        }
                                                                                        if(i11 === 787) {
                                                                                            clearInterval(int11);
                                                                                            timePiont(382,787);
                                                                                            $(".historyText .timePoint").eq(7).fadeIn(500);
                                                                                            var i12 = 797;
                                                                                            var int12 = setInterval(function () {
                                                                                                if(i12 === 797) {
                                                                                                    drawLine(timeLine,382,797,5,"#f5f5f5", true);
                                                                                                    i12 = i12 + 2;
                                                                                                }else{
                                                                                                    drawLine(timeLine,382, i12 += 2,5,"#f5f5f5", false);
                                                                                                }
                                                                                                if(i12 === 907) {
                                                                                                    clearInterval(int12);
                                                                                                    timePiont(382,907);
                                                                                                    $(".historyText .timePoint").eq(8).fadeIn(500);
                                                                                                    var i13 = 917;
                                                                                                    var int13 = setInterval(function () {
                                                                                                        if(i13 === 917) {
                                                                                                            drawLine(timeLine,382,917,5,"#f5f5f5",true);
                                                                                                            i13 = i13 + 2;
                                                                                                        }else{
                                                                                                            drawLine(timeLine,382,i13 += 2,5,"#f5f5f5",false);
                                                                                                        }
                                                                                                        if(i13 === 1027){
                                                                                                            clearInterval(int13);
                                                                                                            timePiont(382,1027);
                                                                                                            $(".historyText .timePoint").eq(9).fadeIn(500);
                                                                                                        }
                                                                                                    },1);
                                                                                                }
                                                                                            },1);
                                                                                        }
                                                                                    },1);
                                                                                }
                                                                            },5)
                                                                        }
                                                                    },1);
                                                                }
                                                            },5)
                                                        }
                                                    },1)
                                                }
                                            },1)
                                        }
                                    },1);
                                }
                            },5);
                        }
                    },1);
                }
            },5);
        }
    },1);
}
timeLine();
/*
$(window).scroll(function () {
    console.log($(window).scrollTop())
    //timeLine($(window).scrollTop());
});
*/