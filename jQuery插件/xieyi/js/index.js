//span标签背景
$(".one_span").css({
    "background-image": "url(./img/line_yellow.png)"
})



//监听文字
// var time = ""
// var shu = 10
// function wenzhi() {
    
//     time = setInterval(function () {
//         shu--
//         console.log($(".two_wenzhi").width())
//         var h_kuang=$(".two_wenzhi").width()
//         if (shu <= 0) {
//             clearInterval(time)
//             time = ""
//             shu = 10
//         }
//         if ( h_kuang> 667) {
//             $(".two_wenzhi>h1").css({
//                 "display": "none"
//             })
//         }
//     }, 1000)
    
// }
// if(shu>=10){
//     wenzhi()
//}






////改变图片文字颜色
//鼠标进入事件
$(".bian").css({
    "border-right": "15px solid rgb(176,176,176)"
})
$(".bianxing").css({
    "border-left": "15px solid rgb(176,176,176)"
})
$(".h_border").each(function(index,item){

    $(this).mouseenter(function () {
    //   console.log($(this).index())
        $(this).find(".two_wenzhi").css({
            "color": "black",
        })
        $(this).find(".bian").css({
            "border-right": "15px solid rgb(207,219,0)"
        })
        $(this).find(".bianxing").css({
            "border-left": "15px solid rgb(207,219,0)"
        })
    })

})

//鼠标移除事件
$(".h_border").mouseleave(function () {
    $(".two_wenzhi").css({
        "color": "rgb(176,176,176)",
    })
    $(".bian").css({
        "border-right": "15px solid rgb(176,176,176)"
    })
    $(".bianxing").css({
        "border-left": "15px solid rgb(176,176,176)"
    })
})



// 第二个页面css样式
$(".a_quang").css("padding-top","2vw")


//第五个页面css样式
$(".animat_3d").width()

$(".animat_wenzhi>p").eq(0).css({
    "font-size":"1.5em",
    "padding-top":"5px"
})
$(".animat_wenzhi>p").css({
    "padding-left":"1vw"
})



