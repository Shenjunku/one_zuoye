var goods = [
    {
        good: [
            {
                img: "36.jpeg",
                biaoti: "扶摇[会员抢先看]",
                pinglun: "戏精赢了！五福成功闯天煞",
                tishi: "更新至44集"
            },
            {
                img: "28.jpeg",
                biaoti: "沙海[会员抢先看]",
                pinglun: "哈哈毛不易本色出演男护士",
                tishi: "更新至44集"
            },
            {
                img: "30.jpeg",
                biaoti: "甜蜜暴击[首播 会员先看]",
                pinglun: "鹿晗变身格斗系元气学长",
                tishi: "更新至44集"
            },
            {
                img: "37.jpg",
                biaoti: "快把我哥带走[会员提前看]",
                pinglun: "兄妹相爱相杀治愈成长路",
                tishi: "更新至44集"
            },
            {
                img: "32.jpeg",
                biaoti: "限定24小时[首播]",
                pinglun: "技术宅男获得触物为人超能力",
                tishi: "更新至44集"
            },
            {
                img: "29.jpg",
                biaoti: "重返20岁[会员抢先看]",
                pinglun: "韩东君牵手胡冰卿逆转时光",
                tishi: "更新至44集"
            }
        ]

    }

]
var content_str = ""
for (var i = 0; i < goods.length; i++) {
    var one_date = goods[i]
    for (var k = 0; k < one_date.good.length; k++) {
        var one_goods = one_date.good[k]
        content_str += `<div class="vido_gex">
               <img src="./images/`+ one_goods.img + `">
               <span class="vidox_sp1">`+ one_goods.biaoti + `</span>
               <span class="vidox_sp2">`+ one_goods.pinglun + `</span>
               <span class="vidox_sp3">`+ one_goods.tishi + `</span>
           </div>`
    }
}
$(".p_kuai").append($(content_str))

var arry=[
    {
        img: "34.jpeg",
        biaoti: "吸血鬼日记8",
        pinglun: "Nina回归最终季",
        tishi: "更新至44集"
    },
    {
        img: "31.jpg",
        biaoti: "破产姐妹6",
        pinglun: "打工姐妹花以破产告终？",
        tishi: "更新至44集"
    },
    {
        img: "33.jpg",
        biaoti: "女超人",
        pinglun: "超人超女合体拯救地球",
        tishi: "更新至44集"
    },
    {
        img: "35.jpg",
        biaoti: "绿箭侠5",
        pinglun: "糖哥跑男超女大玩联动交叉",
        tishi: "更新至44集"
    }
]
var a=""
for(var i=0;i<arry.length;i++){
a+=`<div class="vido_gex">
<img src="./images/`+ arry[i].img + `">
<span class="vidox_sp1">`+ arry[i].biaoti + `</span>
<span class="vidox_sp2">`+ arry[i].pinglun + `</span>
<span class="vidox_sp3">`+ arry[i].tishi + `</span>
</div>`
}
$(".p_kuai_two").append($(a))

$(".vido_gex").each(function (index, item) {
    if (index % 2 == 0) {
        $(item).css("margin-right", "1.3rem")
    }
})