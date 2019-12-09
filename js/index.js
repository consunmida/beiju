import 'bootstrap';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import {swiperAnimateCache, swiperAnimate, clearSwiperAnimate} from 'swiper-animate-cn';
import { WOW } from './wow';
import '../css/index.css';
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
            });
            $(".goTop").click(function () {
                $('body,html').animate({scrollTop:0},500);
            });
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