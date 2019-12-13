import 'bootstrap';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import {swiperAnimateCache, swiperAnimate, clearSwiperAnimate} from 'swiper-animate-cn';
import '../css/index.css';
import { WOW } from './wow';
// <!--侧滑--搜索-->
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
    // <!--header-->
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
    // <!--aside-->
        $(function () {
            if($(window).scrollTop() == 0){
                $(window).scroll(function () {
                    $("aside").animate({
                        width: "68px"
                    },500);
                });
            }else{
                $("aside").css({width: "68px"});
            }
            $("aside").hover(function () {
                $("aside").animate({
                    width: "210px"
                },500);
            },function () {
                $("aside").animate({
                    width: "68px"
                },500);
                $('div.weChat').fadeOut('fast');
            });
            $(".goTop").click(function () {
                $('body,html').animate({scrollTop:0},500);
            });
            $("aside li").hover(function() {
              var index = $(this).index();
              if(index == 3) {
                $('div.weChat').fadeIn('fast');
              } else {
                $('div.weChat').fadeOut('fast');
              }
              $("aside li").removeClass('active');
              $(this).addClass('active');
              $("aside div.imgWrap").removeClass('active');
              $(this).find('div.imgWrap').addClass('active')
            }, function() {
              $(this).removeClass('active');
              $("aside div.imgWrap").removeClass('active');
              $(this).find('span').removeClass('active');

            })
        })

        /*$(function () {
            var nav_btn = $('.nav_btn');
            nav_btn.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                nav_btn.removeClass('li_a');
                var target =  $(e.currentTarget);
                target.addClass('li_a');
                var _index = target.attr('index');
                $('.caseList').css({'display': 'none'});
                $('#caseList' + _index).css({'display': 'block'});
            })
        })*/


      $(function() {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
            },
            speed:1000,
            on: {
              init: function(){
              swiperAnimateCache(this);
              swiperAnimate(this);
            },
              slideChangeTransitionEnd: function(){
                swiperAnimate(this)
              },
              }
           })
           
           
           //动画
          var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:150,mobile:true,live:true});
          wow.init();
      })


      //表单提交
      
        $(function() {

            $("#submit").click(function() {
                var isPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;

                var isTel = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/

                var name = $("#your-name").val();
                var email = $("#your-email").val();
                var tel = $("#your-tel").val();

                var con = $(".con").val();
                var pattern = new RegExp("[~'!@#$%^&*()-+_=:]");  
                if (name == "") {
                    alert("请输入您的姓名");
                    return false;
                }


                if (pattern.test(name)) {
                    alert("姓名带有非法字符！");
                    return false;
                }  


                if (tel == "") {
                    alert("请输入您的联系电话");
                    return;
                }
                if (isPhone.test(tel) || isTel.test(tel)) {

                }else {
                    alert("请输入正确的电话号码");
                    return;
                }

                $.ajax({
                    url: 'request/request.php',
                    data: {name: name, email: email, tel: tel, con: con},
                    cache: false,
                    type: 'POST',
                    success: function(data) {
                        if (data) {
                            alert("留言成功，我们会尽快与您取得联系！");
                        }else{
                            alert("服务器开小差，请您直接联系客户！");
                        }
                    }
                })

            })

        });

  
    

