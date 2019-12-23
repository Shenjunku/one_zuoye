var arry = ["王者荣耀", "快看", "神剪辑 ", "搞笑", "新闻", "舞蹈", "健康", "健身", "娱乐", "游戏", "英雄联盟", "萌宠", "情感", "汽车", "美食"]
var zhi = ""
for (var i = 0; i < arry.length; i++) {
    zhi += `<span>` + arry[i] + `</span>`

}
$(".d_biaoti").append($(zhi))//向每个匹配的元素内部追加内容
$(".d_biaoti>span").first().css({
    "color": "red",
    "margin-left": "1rem"
})
var shuju = [
    {
        one: "./images/20.jpeg",
        two: "./images/24.jpeg",
        three: "朋程说游",
        four: "王者荣耀",
        five: "./images/25.svg",
        six: "./images/26.svg",
        seven: "./images/27.png",
        biaoti:"王者荣耀：英雄就是比普通人更变态的辩变态，张飞这种玩法最无敌！！"
    }
    , {
        one: "./images/17.jpeg",
        two: "./images/21.jpeg",
        three: "动画",
        four: "王者荣耀",
        five: "./images/25.svg",
        six: "./images/26.svg",
        seven: "./images/27.png",
        biaoti:"王者荣耀搞笑：最强射手鲁班"
    }
    , {
        one: "./images/19.jpeg",
        two: "./images/22.jpeg",
        three: "游戏制作",
        four: "王者荣耀",
        five: "./images/25.svg",
        six: "./images/26.svg",
        seven: "./images/27.png",
        biaoti:"王者荣耀搞笑小动画，大乔是这样被宫本套路的"
    }
    , {
        one: "./images/18.jpeg",
        two: "./images/23.jpeg",
        three: "搞笑",
        four: "王者荣耀",
        five: "./images/25.svg",
        six: "./images/26.svg",
        seven: "./images/27.png",
        biaoti:"王者荣耀：玩家自己制作了4位英雄，连天美都不得不服"

    }
]


var vivo = ""
for (var j = 0; j < shuju.length; j++) {
    vivo = vivo + `<div class="d_neiron">
    <span class="d_neiron_biao">`+ shuju[j].biaoti+`</span>
    <img src=`+ shuju[j].one + `>
    <div class="d_neiron_zero">
        <div class="d_neiron_one">
            <img src=`+ shuju[j].two + `>
            <span>`+ shuju[j].three + `</span>
            <span>`+ shuju[j].four + `</span>
        </div>
        <div class="d_neiron_two">
            <img src=`+ shuju[j].five + `>
            <img src=`+ shuju[j].six + `>
            <img src=`+ shuju[j].seven + `>
        </div>
    </div>
    </div>`

}
$(".d_kuai").append($(vivo))
