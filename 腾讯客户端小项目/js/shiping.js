$(".g_wen>span").eq(0).css({
    "margin-right": "1rem",
    "color": "rgba(255, 255, 255, 1)"
})
$(".g_wen>span").eq(1).css("color", "rgba(255, 141, 26, 1)")
$(".g_wen>span").eq(2).css("color", "rgba(255, 255, 255, 1)")
$(".g_wen>span").css({
    "font-size": "0.81rem",
    "display": "inline-block",
    "margin-top": "0.6rem"
})
$(".s_ming").css({
    "width": "21.56rem",
    "margin": "0 auto",
    "margin-top": "1rem",
    "display": "flex",
    // "height":"6rem"
})
$(".s_ming>div").eq(0).css({
    "flex": "3.5"
})
$(".s_ming>div>span").eq(0).css({
    "color": "rgba(255, 255, 255, 1)",
    "font-weigth": "bold",
    "font-size": "1.25rem",
})
$(".s_ming>div").eq(1).css({
    "flex": "1",
})
$(".s_ming>div>img").css({
    "width": "1.5rem",
    "height": "1.5rem",
    "margin-top": "0.1rem"
})
$(".s_ming>div>div").css({
    "color": "rgba(166, 166, 166, 1)",
    "display": "inline-block",
    "width": "2rem",
    "height": "1.5rem",
    "vertical-align": "top",
    "margin-top": "0.2rem"
})
$(".s_pinglun>div").eq(2).css({
    "width": "21.56rem",
    "margin": "0 auto",
    "margin-top": "0.5rem",
})
$(".s_pinglun>div>span").eq(0).css({
    "color": "rgba(255, 141, 26, 1)",
    "font-size": "0.88rem"
})
$(".s_pinglun>div>span").eq(1).css({
    "color": "rgba(166, 166, 166, 1)",
    "font-size": "0.88rem"
})

$(".s_anniu").css({
    "width": "21.56rem",
    "height": "3.5rem",
    "margin": "0 auto",
    "display": "flex",
    "margin-top": "0.5rem",
    "border-bottom": "0.1rem solid rgba(153, 153, 153, 0.2)"
})
$(".s_anniu>div").eq(0).css({
    "flex": "3",

})
$(".s_anniu>div>div").css({
    "width": "2.82rem",
    "height": "1.5rem",
    "border-radius": "0.22rem",
    "border": "0.15rem solid  rgba(255, 255, 255, 1)",
    "position": "relative"
})
$(".s_anniu>div>div>div").css({
    "color": "rgba(255, 255, 255, 1)",
    "font-size": "0.8rem",
    "display": "inline-block",
    "margin-left": "0.3rem"
})

$(".s_anniu>div>div>img").css({
    "position": "absolute",
    "margin-top": " 0.3rem",
    "width": "1rem",
    "height": "1rem",
})
$(".s_anniu>div").eq(1).css({
    "flex": "1"
})
$(".s_anniu>div>img").css({
    "width": "1.5rem",
    "height": "1.5rem"
})
$(".s_anniu>div>img").eq(0).css({
    "margin-right": "1rem"
})

$(".s_kanqi").css({
    "width": "21.56rem",
    "margin": "0 auto",
    "display": "flex",
    "margin-top": " 1rem",
})
$(".s_kanqi>div").eq(0).css({
    "flex": "3.5",
})
$(".s_kanqi>div").eq(1).css({
    "flex": "1",
    "position": "relative"
})
$(".s_kanqi>div>img").css({
    "position": "absolute",
    "width": "1.5rem",
    "height": "1.5rem",
    "margin-top": " 0.3rem",
})
$(".s_kanqi>div>div").css({
    "display": "inline-block",
    "margin-right": " 0.8rem",
    "margin-top": " 0.39rem",
    "color": "rgba(166, 166, 166, 1)",
    "font-size": "1rem"
})
$(".s_kanqi>div>span").css({
    "color": "white",
    "margin-top": "0.4rem",
    "display": "inline-block",
})

$(".s_xiaoxi").css({
    "width": "22.44rem",
    "margin-left": "1rem",
    "margin-top": "1rem",
    "overflow-x": "scroll",
    "display": "flex"
})

var arry = [
    {
        wen: "【第二组PK】陆政廷又唱rap，文兆杰田燚《他他他》..."
    },
    {
        wen: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
    },
    {
        wen: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
    },
    {
        wen: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
    },
    {
        wen: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
    },
]
var zhi = ""
for (var i = 0; i < arry.length; i++) {
    zhi += ` <div>
    <div>`+ arry[i].wen + `
    </div>
</div>`

}
$(".s_xiaoxi").append($(zhi))
$(".s_xiaoxi>div").css({
    "flex": "none",
    "width": "9rem",
    "height": "5rem",
    // "display":"flex",
    // "align-items":"center",
    // "justify-content":"center",
    "margin-right": "1rem",
    "background-color": "rgba(166, 166, 166, 0.2)",
    "border-radius": "0.22rem",
})

$(".s_xiaoxi>div>div").css({
    "width": "7rem",
    //"height":"4rem",
    "margin": "0 auto",
    "margin-top": "1rem",
    "text-align": "center",
    "color": "rgba(166, 166, 166, 1)",
    "font-size": "0.8rem"
})
$(".s_xiaoxi>div>div").eq(0).css({
    "color": "rgba(255, 141, 26, 1)",
})


$(".s_xiahua").css({
    "width": "21.56rem",
    "height": "0.1rem",
    "margin": "0 auto",
    "background-color": "rgba(153, 153, 153, 0.2)",
    "margin-top": "1rem",
})


$(".s_ping").append($(b))
$(".s_pian").css({
    "width": "21.56rem",
    "margin": "0 auto",
    "display": "flex",
    "margin-top": "1rem",

})
$(".s_pian_one").css({
    "flex": "4",
    "color": "rgba(255, 255, 255, 1)"
})
$(".s_pian>div").eq(1).css({
    "flex": "1",
    "color": "rgba(166, 166, 166, 1)",
    "text-align": "right"
})
$(".s_pian>div>span").eq(1).css({
    "display": "inlne-block",
    "margin-right": "1.5rem"
})

var a = [
    {
        one: "./img/2.jpeg",
        two: " 华晨宇聊到魔音选手心疼落泪：没想到陆政廷会被淘汰..."
    },
    {
        one: "./img/3.jpeg",
        two: " 文兆杰专访：没想过自己会复活，以后不会在让花花失望"
    },
    {
        one: "./img/4.jpeg",
        two: " 斯外戈专访：能复活超开心，最对不起和感谢的人是春春"
    },
]
var b=""
for (var j = 0; j < a.length; j++) { 

    b+=` <div>
         <div class="s_ping_one">
            <img src=`+ a[j].one+`>
         </div>
        <div class="s_ping_two">
         <span>
            `+ a[j].two+`
            </span>
         </div>
     </div>
    `
}
$(".s_ping").append($(b))

$(".s_ping").css({
    "width": "21.56rem",
    "margin": "0 auto",
    "margin-top": "1.5rem",
    
})
$(".s_ping>div").css({
    "width": "21.56rem",
    "margin-bottom": "0.6rem",
})
$(".s_ping>div>div").css({
    "display": "inline-block",
})
$(".s_ping_one").css({
    "width": "6.5rem",
    "margin-right": "0.4rem",
    "vertical-align": "bottom"
})
$(".s_ping_two").css({
    "width": "11.19rem",
    "height": "3.75rem",
    "vertical-align": "bottom"
})
$(".s_ping>div>div>img").css({
    "width": "6.5rem",
    "height": "3.75rem",
    "border-radius": "0.2rem"
})
$(".s_ping>div>div>span").css({
    "width": "11.19rem",
    "height": "2.63rem",
    "color": "white",
    "font-size": "0.8rem"
})

$(".s_quangbu").css({
    "width": "2rem",
    "height": "1.31rem",
    "color":"white",
    "font-size":"0.88rem",
    "margin":"0 auto"
})


$(".s_pingxing").css({
    "width": "21.56rem",
    "margin": "0 auto",
    "margin-top": "1.5rem",
    
})
$(".s_pingxing>div").css({
    "width": "21.56rem",
    "margin-bottom": "0.6rem",
})
$(".s_pingxing>div>div").css({
    "display": "inline-block",
})
$(".s_pingxinng_one").css({
    "width": "6.5rem",
    "margin-right": "0.4rem",
    "vertical-align": "top"
})
$(".s_pingxing_two").css({
    "width": "11.19rem",
    "height": "3.75rem",
    "vertical-align": "top"
})
$(".s_pingxing>div>div>img").css({
    "width": "6.5rem",
    "height": "3.75rem",
    "border-radius": "0.2rem"
})
$(".s_pingxing>div>div>span").css({
    "width": "11.19rem",
    "height": "2.63rem",
    "color": "rgba(166, 166, 166, 1)",
    "font-size": "0.75rem"
})
$(".s_pingxing>div>div>div").css({
    //"width": "11.19rem",
    //"height": "2.63rem",
    "color": "white",
})



