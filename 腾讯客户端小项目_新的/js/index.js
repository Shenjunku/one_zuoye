$(".tabbar_item").click(function () {
    var that = this
    var dian_index = $(this).index()
    $(".tabbar_item").each(function (index, item) {
        //index()不传递参数，返回这个元素在同辈中的索引位置
        if (dian_index == index) {
            console.log(index)
            var cur_src = $(item).find("img").attr("src")
            //indexOf() 方法可返回数组中某个指定的元素位置
            //如果在数组中没找到指定元素则返回 -1。
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src", cur_src.replace(".png", "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src", cur_src.replace("_a", ""))
        }
    })

    $(".evey>div").each(function (index, item) {
        if ($(that).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})

var goods = [
    {
        shop_name: "暑假刷片看这里！",
        good: [
            {
                img: "16.jpeg",
                biaoti: "小戏骨MV·外卖小哥",
                pinglun: "萌娃致敬烈日下劳动者",
                tishi: "更新至44集"
            },
            {
                img: "1.jpeg",
                biaoti: "惹上冷殿下·8.8首播",
                pinglun: "迷妹撩爱豆 饭圈高糖恋",
                tishi: "更新至44集"
            },
            {
                img: "4.jpeg",
                biaoti: "明日之子·第二季",
                pinglun: "华晨宇痛哭不舍文兆杰",
                tishi: "更新至44集"
            },
            {
                img: "5.jpeg",
                biaoti: "入戏·李宏毅",
                pinglun: "25岁前结婚这想法没变！",
                tishi: "更新至44集"
            },
            {
                img: "6.jpeg",
                biaoti: "幸福三重奏悠享版",
                pinglun: "S姐妹召开消灭四害研讨会",
                tishi: "更新至44集"
            },
            {
                img: "7.jpeg",
                biaoti: "火箭少女101研究所",
                pinglun: "宣仪跳浮夸舞蹈wink超可爱",
                tishi: "更新至44集"
            },
            {
                img: "2.jpeg",
                biaoti: "南方有乔木 TV版",
                pinglun: "陈伟霆腹黑开撩白百何",
                tishi: "更新至44集"
            },
            {
                img: "3.jpeg",
                biaoti: "爱情进化论·8.2首播",
                pinglun: "张若昀偷吻张天爱",
                tishi: "更新至44集"
            }
        ]

    },
    {
        shop_name: "热闻一览",
        good: [
            {
                img: "8.jpeg",
                biaoti: "马航MH370事件“终极报告”今天将出炉！",
                pinglun: "",
                tishi: "05:56"
            },
            {
                img: "9.jpeg",
                biaoti: "8月起这些新规将实施 我们都将收到这样一条短信",
                pinglun: "",
                tishi: "05:56"
            },
            {
                img: "10.jpeg",
                biaoti: "孟美岐演讲实录：我就是那个拿了第一名的女孩",
                pinglun: "",
                tishi: "05:56"
            },
            {
                img: "11.jpeg",
                biaoti: "迷妹专访101|yamy：很喜欢有遗憾的感觉",
                pinglun: "",
                tishi: "05:56"
            },
            {
                img: "12.jpeg",
                biaoti: "SNH48总决选前三专访：李艺彤自称未来一片辉煌",
                pinglun: "",
                tishi: "05:56"
            },
            {
                img: "13.jpeg",
                biaoti: "真正的金缕玉衣！古人葬礼都这么奢侈吗",
                pinglun: "",
                tishi: "05:56"
            }
        ]

    }

]


var content_str = ""
for (var i = 0; i < goods.length; i++) {
    var one_date = goods[i]
   
    content_str += `<div class="neiron_kuai">
         <div class="biao_ti">`+ goods[i].shop_name + `</div>`
    for (var k = 0; k < one_date.good.length; k++) {
        
        var one_goods = one_date.good[k]
        content_str += `<div class="vido_ge">
                   <img src="./images/`+ one_goods.img + `">
                   <span class="vido_sp1">`+ one_goods.biaoti + `</span>
                   <span class="vido_sp2">`+ one_goods.pinglun + `</span>
                   <span class="vido_sp3">`+ one_goods.tishi + `</span>
               </div>`
    }
    content_str += `<div class="xia_hua"></div>
               <div class="huang_yi">
                <div>
                    <img src="./images/图标 6.svg">
                </div>
                <span>换一批试试</span>
               </div>
               </div>
               `
}
$(".dianshi").append($(content_str))
$(".vido_ge").each(function (index, item) {
    if (index % 2 == 0) {
        $(item).css("margin-right", "1.3rem")
    }
    // console.log(".vido_ge")
})





var arry = [{
    shop_name: "明日之子·九大厂牌候选人",
    arry_one: [{

        img: "14.jpeg",
        biaoti: "九大厂牌候选人争夺战",
        pinglun: "2018-07-28 第5期",
        tishi: "2018-7-28"
    },
    {

        img: "15.jpeg",
        biaoti: "升级战13强冲出重围",
        pinglun: "2018-07-21 第4期 ",
        tishi: "2018-7-21"
    },
    {

        img: "15.jpeg",
        biaoti: "升级战13强冲出重围",
        pinglun: "2018-07-21 第4期 ",
        tishi: "2018-7-21"
    },
    {

        img: "15.jpeg",
        biaoti: "升级战13强冲出重围",
        pinglun: "2018-07-21 第4期 ",
        tishi: "2018-7-21"
    },
    {

        img: "15.jpeg",
        biaoti: "升级战13强冲出重围",
        pinglun: "2018-07-21 第4期 ",
        tishi: "2018-7-21"
    }
    ]
}
]
var arry_zhi = ""
var arry_two=""
for (var j = 0; j < arry.length; j++) {
    var two_date = arry[j]
    // console.log(one_date)
    arry_zhi +=`<div class="biao_ti">` + arry[j].shop_name + `</div>`
    $(".zuihou_one").append($(arry_zhi))
    for (var k = 0; k < two_date.arry_one.length; k++) {
        arry_two += `
        <div class="vido_ge">
                   <img src="./images/`+ two_date.arry_one[k].img + `">
                   <span class="vido_sp1">`+ two_date.arry_one[k].biaoti + `</span>
                   <span class="vido_sp2">`+ two_date.arry_one[k].pinglun + `</span>
                   <span class="vido_sp3">`+ two_date.arry_one[k].tishi + `</span>
               </div>
               `
               
    }
    $(".zuihou_shi").append($(arry_two))
}



$(".vido_ge>img").click(function(){
    location.href='腾讯视屏-视屏详情.html'
})
$(".da_tu>img").click(function(){
    location.href='腾讯视屏-视屏详情.html'
})


