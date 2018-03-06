/**
 * Created by 禹亭 on 2017/12/13.
 */

    var arr=[
    {
        til:"首页",
        cls:"icon-house",
        alt:"index.html"
    },
    {
        til:"特卖",
        cls:"icon-price",
        alt:"index2.html"
    },
    {
        til:"目的地",
        cls:"icon-popularity",
        alt:"index3.html"
    },
    {
        til:"周边",
        cls:"icon-location",
        alt:"index4.html"
    },
    {
        til:"我的",
        cls:"icon-user",
        alt:"index5.html"
    }
  ];

var str="";
for(var temp of arr){
    console.log(temp);
    str += '<li>'
            +'<a href="'+temp.alt+'">'
            +'<span class="iconfont '+temp.cls+'"></span>'
            +'<p>'+temp.til+'</p>'
            +'</a>'
         +'</li>';
}

$("footer ul").html(str);



$("footer li").click(function(){
    $(this).addClass("fot_active").siblings().removeClass("fot_active")
});










