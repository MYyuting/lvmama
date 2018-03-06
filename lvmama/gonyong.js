/**
 * Created by 禹亭 on 2017/12/14.
 */

//    <!-- 返回-->
$(".fanhui").click(function(){
    window.history.back()
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

