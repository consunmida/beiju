import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/case.css';

// 侧滑--搜索
    $(function () {
        $(".btn_phoneMenu").click(function () {
            var scrollTop = $(window).scrollTop();
            $("header").css("top",scrollTop);
            $(".phoneMenu").css("top",scrollTop);
            $("body").addClass("swipe");
            $("nav.phoneMenu").css("display","block");
            $("#mask").css("display","block");
        }) ;
        $("#mask").click(function () {
            $("header").css("top",0);
            $(".phoneMenu").css("top",0);
            $("body").removeClass("swipe");
            $("nav.btn_phoneMenu").css("display","none");
            $("#mask").css("display","none");
        }) ;
    });
//<!--header-->
    $(function () {
        var menu_caret = $('.menu-caret');
        menu_caret.mouseenter(function(e){
           $(this).children('.dropDown').css("display", 'block');
       }) 

       menu_caret.mouseleave(function(){
           $(this).children('.dropDown').css('display', 'none');
       })

       menu_caret.click(function () {
            menu_caret.removeClass('active');
            $(this).addClass('active');
       })
    })