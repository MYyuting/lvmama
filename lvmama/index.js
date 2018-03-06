/**
 * Created by 禹亭 on 2017/12/12.
 */

//    <!-- 初始化轮播-->

var s_ban = new Swiper(".s-ban",{
//        autoplay:2500,
    pagination:".swiper-pagination"
});

$(".lei_lie li:gt(4)").css("margin-top","20px");


//    初始化iscroll
var isc = new IScroll(".qg_con",{
    scrollX:true,
    speed:1500,
    Scrollbars:true,
    interactiveScrollbars:true
});


//    返回顶部
$(window).scroll(function(){
    var scrol = ($(window).scrollTop());
    //console.log(scrol);
    if(scrol >250){
        $("#top").show(500);
    }else{
        $("#top").stop(true).hide(500)
    }
});
$("#top").click(function(){
    $("#top").hide(500)
    $("body,html").animate({scrollTop:0},400)
});





//底部点击样式
$("footer li:eq(0)").addClass("fot_active");


$("footer li").click(function(){
   $(this).addClass("fot_active").siblings().removeClass("fot_active")
});

$(".table a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    checkShow()
})